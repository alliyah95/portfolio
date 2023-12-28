"use client";

import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { JackInTheBox } from "react-awesome-reveal";

type SocialIconsProps = {
    changeColorOnHover: boolean;
    animate?: boolean;
};

const SocialIcons = ({
    changeColorOnHover,
    animate = false,
}: SocialIconsProps) => {
    const linkClassNames = changeColorOnHover ? "nav-link" : "";

    const content = (
        <ul className="flex space-x-2 md:space-x-3 justify-center text-lg">
            <li>
                <a
                    href="https://github.com/alliyah95"
                    target="_blank"
                    className={linkClassNames}
                >
                    <BsGithub />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/alliyahjoyce/"
                    target="_blank"
                    className={linkClassNames}
                >
                    <BsLinkedin />
                </a>
            </li>
        </ul>
    );

    if (animate) {
        return (
            <div>
                <JackInTheBox
                    cascade={true}
                    damping={0.1}
                    delay={600}
                    duration={1000}
                    triggerOnce={true}
                >
                    {content}
                </JackInTheBox>
            </div>
        );
    }

    return content;
};

export default SocialIcons;
