import React from "react";

type Props = {
    text: string;
    url: string;
    filled?: boolean;
    icon?: React.ReactNode;
    iconPosition: "left" | "right";
    fullWidth?: boolean;
};

const Button = ({
    text,
    url,
    icon,
    filled = true,
    iconPosition,
    fullWidth = false,
}: Props) => {
    const widthType = fullWidth ? "w-full md:w-auto" : "";
    const buttonType = filled ? "btn--filled" : "btn--outlined";

    return (
        <a className={`cursor-pointer ${widthType}`} href={url} target="_blank">
            <div className={`btn ${buttonType}`}>
                {iconPosition === "left" && icon}
                <div>{text}</div>
                {iconPosition === "right" && icon}
            </div>
        </a>
    );
};

export default Button;
