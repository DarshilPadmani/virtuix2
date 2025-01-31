import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ThreeBackground = () => {
    const canvasContainerRef = useRef(null);

    useEffect(() => {
        // Get container
        const canvasContainer = canvasContainerRef.current;
        if (!canvasContainer) {
            console.error("Canvas container not found!");
            return;
        }

        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(75, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000);
        camera.position.set(0, 1, 5);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputEncoding = THREE.sRGBEncoding;
        canvasContainer.appendChild(renderer.domElement);

        // OrbitControls setup (Enable rotation + auto-rotation)
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableRotate = true;
        controls.enableZoom = false;
        controls.autoRotate = true; // Enable auto-rotation
        controls.autoRotateSpeed = 1.5; // Set rotation speed

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
        scene.add(ambientLight);

        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);

        // Add point light
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        // HDRI lighting setup
        new RGBELoader().load(
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/blue_photo_studio_2k.hdr",
            (texture) => {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                scene.environment = texture;
                scene.background = texture;
            },
            undefined,
            (error) => console.error("HDRI loading error:", error)
        );

        // Load 3D Model
        const loader = new GLTFLoader();
        loader.load(
            "public\\images\\apple_vision_pro.glb", // Ensure model is placed inside `public/models/Textures/`
            (gltf) => {
                const model = gltf.scene;

                // Scale and center model
                // const box = new THREE.Box3().setFromObject(model);
                const size = new THREE.Vector3();
                box.getSize(size);
                const scale = 5 / Math.max(size.x, size.y, size.z);
                model.scale.set(scale, scale, scale);
                model.position.sub(box.getCenter(new THREE.Vector3()));

                scene.add(model);
                console.log("Model loaded successfully!");
            },
            undefined,
            (error) => {
                console.error("Error loading model:", error);

                // Add a fallback cube if the model fails
                // const fallbackGeometry = new THREE.BoxGeometry(1, 1, 1);
                const fallbackMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                const fallbackMesh = new THREE.Mesh(fallbackGeometry, fallbackMaterial);
                scene.add(fallbackMesh);
                console.log("Fallback cube added.");
            }
        );

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize and maintain aspect ratio
        const handleResize = () => {
            const width = canvasContainer.clientWidth;
            const height = canvasContainer.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener("resize", handleResize);

        // Initial resize to ensure responsive scaling
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            if (canvasContainer.contains(renderer.domElement)) {
                canvasContainer.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            id="three-bg"
            ref={canvasContainerRef}
            className="absolute inset-0 w-full max-w mx-auto h-full"
        ></div>
    );
};

export default ThreeBackground;