"use client";

import React, { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import { SocialIcons } from "@/components/ui";

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const handleNavList = (): void => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const handleNavItemClick = (): void => {
        setIsMobileNavOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className={`nav ${isScrolled ? "nav--scrolled" : ""}`}>
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div>
                            <button
                                className="nav-btn"
                                onClick={handleNavList}
                                aria-label="Navigation menu"
                            >
                                <BsList className="text-2xl" />
                            </button>

                            <ul
                                className={`nav-list ${
                                    isMobileNavOpen ? "nav--open" : ""
                                }`}
                            >
                                <li className="nav-item">
                                    <a
                                        href="#about"
                                        className="nav-link"
                                        onClick={handleNavItemClick}
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="#skills"
                                        className="nav-link"
                                        onClick={handleNavItemClick}
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="#projects"
                                        className="nav-link"
                                        onClick={handleNavItemClick}
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="#contact"
                                        className="nav-link"
                                        onClick={handleNavItemClick}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <SocialIcons changeColorOnHover={true} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
