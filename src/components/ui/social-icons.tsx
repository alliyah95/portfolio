import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

type SocialIconsProps = {
    changeColorOnHover: boolean;
};

const SocialIcons = ({ changeColorOnHover }: SocialIconsProps) => {
    const linkClassNames = changeColorOnHover ? "nav-link" : "";

    return (
        <ul className="flex space-x-2 md:space-x-3 justify-center text-lg">
            <li>
                <a
                    aria-label="GitHub profile"
                    href="https://github.com/alliyah95"
                    target="_blank"
                    className={linkClassNames}
                >
                    <BsGithub />
                </a>
            </li>
            <li>
                <a
                    aria-label="LinkedIn profile"
                    href="https://www.linkedin.com/in/alliyahjoyce/"
                    target="_blank"
                    className={linkClassNames}
                >
                    <BsLinkedin />
                </a>
            </li>
        </ul>
    );
};

export default SocialIcons;
