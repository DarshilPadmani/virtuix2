import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="py-16 bg-gray-100 text-gray-900 px-8"
        >
            <div className="container mx-auto max-w-4xl">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center mb-4 text-blue-500">
                    About Me
                </h2>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Learn more about who I am, what I do, and my journey so far.
                </p>

                {/* About Content */}
                <div className="grid sm:grid-cols-2 gap-8 items-center">
                    {/* Left Column: Text */}
                    <div>
                        <p className="text-lg text-gray-700 mb-6 text-justify">
                            Hello! My name is <span className='text-blue-500'>Darshil Padmani</span>, and I am passionate about crafting meaningful and impactful digital experiences. My work revolves around blending creativity with technology to develop solutions that inspire and engage.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 text-justify">
                            Throughout my journey, I have contributed to various projects, including <span className='text-blue-500'>Full Stack, AR/VR applications, Data Science and interactive user interfaces</span>. I thrive on transforming ideas into reality and believe in creating solutions that leave a lasting positive impact.
                        </p>
                        <p className="text-lg text-gray-700 text-justify">
                            I thrive at the crossroads of technology and creativity. If you're working in tech or have exciting projects where I can contribute, let's connect and create something impactful together!
                        </p>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex justify-center">
                        <img
                            src="/images/me1.jpg"
                            alt="About Me"
                            className="w-64 h-64 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-blue-500 mb-6">
                        My Skills
                    </h3>
                    <div className="flex flex-wrap gap-4 ">
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            JavaScript
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            React.js
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Tailwind CSS
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Unity 3D
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Augmented Reality
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Virtual Reality
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Blender
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Three.js
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Python
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            C#
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Vuforia
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Oculus
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Data Analytics
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Data Cleaning
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Data Science
                        </span>
                        {/* Add more skills as needed */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
