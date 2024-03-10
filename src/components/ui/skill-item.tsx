import React from "react";
import Image from "next/image";

export type SkillItemProps = {
    src: string;
    title: string;
};

const SkillItem = ({ src, title }: SkillItemProps) => {
    return (
        <div className="skill-item m-2 flex flex-col justify-center w-auto">
            <Image
                src={src}
                alt={`${title} Logo`}
                className="h-16 md:h-20 lg:h-24 w-auto"
                width={128}
                height={128}
            />
            <p className="skill-label">{title}</p>
        </div>
    );
};

export default SkillItem;
