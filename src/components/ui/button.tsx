import React from "react";

type Props = {
    text: string;
    url: string;
    filled?: boolean;
    icon?: React.ReactNode;
};

const Button = ({ text, url, icon, filled = true }: Props) => {
    const buttonClasses = filled ? "btn--filled" : "btn--outlined";

    return (
        <a className="cursor-pointer" href={url} target="_blank">
            <div className={`btn ${buttonClasses}`}>
                {icon}
                <div>{text}</div>
            </div>
        </a>
    );
};

export default Button;
