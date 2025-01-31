import React, { useState, useEffect } from 'react';
import ThreeBackground from './ThreeBackground';

const Home = () => {
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOpacity(Math.max(0, 1 - window.scrollY / 500));
            setIsAtTop(window.scrollY < 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center px-8">
            {/* 3D Background */}
            <ThreeBackground />

            {/* Content Container */}
            <div className="relative container mx-auto flex flex-col md:flex-row items-center z-10">
                {/* Text Section */}
                <div className="text-center md:text-left md:w-1/2 text-white">
                    <h1 className="font- px-10 text-6xl sm:text-8xl mb-5">Hi, I'm</h1>
                    <h2 className="font- px-10 text-6xl sm:text-8xl mb-5">Darshil</h2>
                    <h2 className="font- px-10 text-6xl sm:text-8xl mb-5">Padmani.</h2>
                </div>

                {/* About Button */}
                {isAtTop && (
                    <div
                        className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
                        style={{ opacity: scrollOpacity, transition: 'opacity 0.9s ease' }}
                    >
                        <button
                            className="px-10 py-3 font-bold bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                            onClick={() => {
                                const aboutSection = document.getElementById('about');
                                if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            About
                        </button>
                    </div>
                )}

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
                    <a
                        href="https://medium.com/@darshilpadmani27"
                        className="w-64 h-60 bg-white shadow-sm rounded-md flex flex-col items-center justify-center hover:bg-gray-100 transition-all border border-gray-300"
                    >
                        <img
                            src="dist\images\2.jpg"
                            alt="Loading..."
                            className="w-64 h-56 object-cover rounded-t-md"
                        />
                        <span className="py-3 px-6 text-black text-center text-lg pb-4">Browse all blogs</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;