import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-100 text-gray-900 px-8" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">
                    Contact Me
                </h2>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Have a question or want to work together? Feel free to reach out!
                </p>

                {/* Contact Form and Details */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Contact Form */}
                    <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
                        <form
                            action="https://formspree.io/f/xvgzgdqe" // Replace with your Formspree endpoint
                            method="POST"
                            className="flex flex-col gap-4"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                required
                                className="px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                            Get In Touch
                        </h3>
                        <p className="text-gray-600 mb-6">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="flex flex-col gap-4">
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <span>
                                    <i className="fas fa-envelope icon-black"></i>
                                </span>
                                <a
                                    href="mailto:your-email@example.com"
                                    className="text-gray-700 hover:text-blue-500"
                                >
                                    darshilpadmani27@gmail.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <span>
                                    <i className="fas fa-phone-alt icon-black"></i>
                                </span>
                                <a
                                    href="tel:+9265244617"
                                    className="text-gray-700 hover:text-blue-500"
                                >
                                    +91 9265244617
                                </a>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <span>
                                    <i className="fas fa-map-marker-alt icon-black"></i>
                                </span>
                                <p className="text-gray-700">Gandhinagar, India</p>
                            </div>


                            {/* Social Media */}
                            <div className="mt-6 flex gap-6">
                                <a
                                    href="https://github.com/DarshilPadmani"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-blue-500 text-xl"
                                >
                                    <i className="fab fa-github text-black"></i>
                                </a>
                                <a
                                    href="https://linkedin.com/in/darshil-padmani"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-blue-500 text-xl"
                                >
                                    <i className="fab fa-linkedin text-blue-500"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/darshil__padmani/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-blue-500 text-xl"
                                >
                                    <i className="fab fa-instagram text-pink-700"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
