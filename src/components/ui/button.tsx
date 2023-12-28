import React from "react";

type ButtonProps = {
    text: string;
    url: string;
    filled?: boolean;
    icon?: React.ReactNode;
    iconPosition: "left" | "right";
    fullWidth?: boolean;
    target?: "_blank" | "_self";
};

const Button = ({
    text,
    url,
    icon,
    filled = true,
    iconPosition,
    fullWidth = false,
    target = "_self",
}: ButtonProps) => {
    const widthType = fullWidth ? "w-full md:w-auto" : "";
    const buttonType = filled ? "btn--filled" : "btn--outlined";

    return (
        <a className={`cursor-pointer ${widthType}`} href={url} target={target}>
            <div className={`btn ${buttonType}`}>
                {iconPosition === "left" && icon}
                <div>{text}</div>
                {iconPosition === "right" && icon}
            </div>
        </a>
    );
};

export default Button;
