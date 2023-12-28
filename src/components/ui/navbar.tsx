"use client";

import React, { useState, useEffect } from "react";
import { JackInTheBox } from "react-awesome-reveal";
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
                            <JackInTheBox
                                delay={600}
                                duration={1000}
                                triggerOnce={true}
                            >
                                <button
                                    className="nav-btn"
                                    onClick={handleNavList}
                                >
                                    <BsList className="text-2xl" />
                                </button>
                            </JackInTheBox>

                            <JackInTheBox
                                cascade={true}
                                damping={0.1}
                                delay={600}
                                duration={1000}
                                triggerOnce={true}
                            >
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
                            </JackInTheBox>
                        </div>
                        <SocialIcons changeColorOnHover={true} animate={true} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
