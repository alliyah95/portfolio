import React from "react";

type Props = {
    text: string;
    url: string;
    filled?: boolean;
    icon?: React.ReactNode;
};

const Button = ({ text, url, filled = true }: Props) => {
    const buttonClasses = filled
        ? "bg-purple-100 hover:bg-purple-200 text-white-200"
        : "bg-transparent text-purple-200 border border-purple-100";
    return (
        <a className={`${buttonClasses}  cursor-pointer`}>
            <div className="py-2 md:py-4 px-10 md:px-12">
                <p>{text}</p>
            </div>
        </a>
    );
};

export default Button;
