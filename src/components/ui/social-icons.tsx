import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

type Props = {
    changeColorOnHover: boolean;
};

const SocialIcons = ({ changeColorOnHover }: Props) => {
    const linkClassNames = changeColorOnHover ? "nav-link" : "";

    return (
        <div>
            {" "}
            <div className="flex space-x-2 md:space-x-3 justify-center text-lg">
                <a
                    href="https://github.com/alliyah95"
                    target="_blank"
                    className={linkClassNames}
                >
                    <BsGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/alliyahjoyce/"
                    target="_blank"
                    className={linkClassNames}
                >
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
};

export default SocialIcons;
