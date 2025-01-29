import React, { useState } from "react";
import FilterButton from "../components/FilterButtons";

const projects = [
    {
        title: "Employee Management System",
        description:
            "A React- based web app for efficient task management, featuring admin and employee dashboards, secure authentication, and responsive design.",
        techStack: ["React", "Context API", "Local Storage"],
        category: "Full Stack",
        image: "src\\assets\\images\\EmpMangSystm.png",
        link: "https://example.com/flappy-bird-ar",
    },
    {
        title: "VR Target Toss",
        description:
        "Developed a VR game where players throw objects at targets to score points. Built an interactive environment in Unity using MetaXR All-XR-in-One-SDK.Implemented VR controller mechanics for object interaction and a dynamic scoring system with real-time score updates. Designed a user-friendly interface to guide players and display metrics.",
       techStack: ["Virtual Reality", "User Interface Design", "Game Mechanics", "Oculus"],
        category: "AR/VR",
        image: "src\\assets\\images\\VRTargetToss.png",
        link: "https://example.com/vowel-validation",
    },
    {
        title: "Augmented Reality for Education",
        description:
        "Developed an immersive AR platform that allows students to explore and understand complex subjects through interactive visualizations.From biology diagrams that spring to life to historical artifacts that can be observed from every angle, the platform transforms learning into an experience.",        
        techStack: ["AR", "Plane Tracking", "AR Core", "Animations", "Image Tracking"],
        category: "AR/VR",
        image: "src\\assets\\images\\AREdu.png",
        link: "https://example.com/vowel-validation",
    },
    {
        title: "Visual elements for WebGL support",
        description:
            "Automated material changes and multi- angle captures with organized, time - stamped storage.Integrated WebGL for enhanced functionality.Skills: WebGL, Scripting, Automation, Cost Control, AR / VR.",
        techStack: ["AR", "Plane Tracking", "AR Core", "Animations", "Image Tracking"],
        category: ["AR/VR", "Full Stack"],
        image: "src\\assets\\images\\WebGL.png",
        link: "https://example.com/vowel-validation",
    },
    {
        title: "AR Face Filter for Instagram",
        description:
            "Developed an augmented reality face filter for Instagram using Spark AR. The filter reacts to facial expressions and provides an engaging user experience.",
        techStack: ["Spark AR", "3D Modeling", "JavaScript"],
        category: "AR/VR",
        image: "src\\assets\\images\\w.png",
        link: "https://example.com/ar-face-filter",
    },
    {
        title: "Flappy Bird AR Game",
        description:
            "Created an AR version of the classic Flappy Bird game, controlled by face movements. Users navigate the bird by raising their eyebrows or nodding their heads.",
        techStack: ["Unity 3D", "C#", "AR Foundation"],
        category: "AR/VR",
        image: "src\\assets\\images\\flappyBird.png",
        link: "https://example.com/flappy-bird-ar",
    },
    {
        title: "Street Suffer",
        description:
            "A simple Unity-based game that challenges players to overcome obstacles on a busy street. The game features a dynamic environment and an engaging storyline.",
        techStack: ["Unity 3D", "C#", "Blender"],
        category: "Game Development",
        image: "src\\assets\\images\\streetSuffer.png",
        link: "https://example.com/street-suffer",
    },
    {
        title: "WebAR Image Tracking",
        description:
            "An interactive AR experience built using MindAR and A-Frame, featuring image-based tracking and 3D model animations with lighting effects.",
        techStack: ["AR", "HTML", "A-Frame,", "Three.js", "Animations"],
        category: "Full Stack",
        image: "src\\assets\\images\\arjs.png",
        link: "https://example.com/flappy-bird-ar",
    },
    {
        title: "UI for Unity",
        description:
            "Built interactive login, sign-up, and secure UI features with responsive design in Unity.",
        techStack: ["UI Design", "Unity", "User Authentication,", " Responsive Design", "Firewall"],
        category: "AR/VR",
        image: "src\\assets\\images\\UI4Unity.png",
        link: "https://example.com/flappy-bird-ar",
    },
];

const categories = ["All", "AR/VR", "Full Stack", "Data Science"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(project =>
                Array.isArray(project.category)
                    ? project.category.includes(activeCategory)
                    : project.category === activeCategory
            );
    return (
        <section id="projects" className="py-16 bg-white text-gray-900 px-8">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">
                    My Projects
                </h2>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Take a look at some of the projects I've worked on!
                </p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => (
                        <FilterButton
                            key={category}
                            category={category}
                            isActive={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                            className="w-auto px-4 py-2 text-center text-sm"
                        />
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* View Project Button */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
