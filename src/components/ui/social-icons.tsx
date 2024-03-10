import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

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
        return <div>{content}</div>;
    }

    return content;
};

export default SocialIcons;
