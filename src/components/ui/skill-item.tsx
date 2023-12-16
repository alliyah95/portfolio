import React from "react";

export type Props = {
    src: string;
    title: string;
};

const SkillItem = ({ src, title }: Props) => {
    return (
        <div className="m-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={`${title} Logo`}
                className="h-16 md:h-20 lg:h-24"
            />
        </div>
    );
};

export default SkillItem;
