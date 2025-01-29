import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const location = useLocation();

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > lastScrollY) {
                        setIsScrollingUp(false); // Scrolling down
                    } else {
                        setIsScrollingUp(true); // Scrolling up
                    }
                    lastScrollY = window.scrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { id: "home", label: "Home", href: "#home" },
        { id: "about", label: "About", href: "#about" },
        { id: "projects", label: "Projects", href: "#projects" },
        { id: "blog", label: "Blog", href: "https://medium.com/@darshilpadmani27" },
        { id: "contact", label: "Contact", href: "#contact" },
    ];

    const getNavLinkClass = (href) =>
        location.hash === href
            ? "relative font-semibold text-blue-500 transition-colors nav-links"
            : "relative font-semibold text-gray-500 hover:text-blue-500 transition-colors nav-links";

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 ${isScrollingUp ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="flex items-center justify-between p-4">
                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <a href="/">
                        <img
                            src="src/assets/images/virtuix.png"
                            alt="Logo"
                            className="h-6 w-auto md:h-8"
                            style={{ maxHeight: "1rem" }}
                        />
                    </a>
                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-8 text-lg px-8">
                        {navLinks.map(({ id, label, href }) => (
                            <a
                                key={id}
                                href={href}
                                className={getNavLinkClass(href)}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className={`md:hidden bg-white shadow-lg transition-transform duration-300 fixed top-0 left-0 w-3/4 h-screen z-50`}
                    >
                        <nav className="flex flex-col space-y-4 py-8 px-6">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-4 right-4 text-gray-700"
                            >
                                x
                            </button>
                            {navLinks.map(({ id, label, href }) => (
                                <a
                                    key={id}
                                    href={href}
                                    className="text-gray-500 hover:text-blue-500 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
