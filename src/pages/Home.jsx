import React from 'react';

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-white text-black flex items-center px-8"
            style={{ fontFamily: 'Arial, sans-serif' }}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="font-thin px-10 text-6xl sm:text-8xl text-zinc-900 mb-5">
                        Hi, I'm
                    </h1>
                    <h2 className="font-thin px-10 text-6xl sm:text-8xl  text-zinc-900 mb-5">
                        Darshil
                    </h2>
                    <h2 className="font-thin px-10 text-6xl sm:text-8xl text-zinc-900 mb-5">
                        Padmani.
                    </h2>
                </div>
                {/* About Button */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                    <button
                        className="px-10 py-3 font-bold bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                        onClick={() => {
                            const aboutSection = document.getElementById('about');
                            if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        About
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <a
                        href="https://medium.com/@darshilpadmani27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-70 h-64 bg-white shadow-sm rounded-md flex flex-col items-center justify-center hover:bg-gray-100 transition-all border border-gray-300"
                    >
                        <img
                            src="./src/assets/images/2.jpg"
                            alt="Loading..."
                            className="w-64 h-56 object-cover rounded-t-md"
                        />
                        <span className="flex items-center justify-center py-5 px-6 text-black text-center text-lg">Browse all blogs</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
