"use client";

import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { SocialIcons } from ".";

type Props = {};

const Navbar = (props: Props) => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

    const handleNavList = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header>
            <nav className="nav">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div>
                            <button className="nav-btn" onClick={handleNavList}>
                                <BsList className="text-xl" />
                            </button>
                            <ul
                                className={`nav-list ${
                                    isMobileNavOpen ? "open" : ""
                                }`}
                            >
                                <li className="nav-item">
                                    <a href="#about" className="nav-link">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#skills" className="nav-link">
                                        Skills
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#projects" className="nav-link">
                                        Projects
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-link">
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
