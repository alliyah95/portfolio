import React from "react";

type Props = {
    heading: string;
    description?: string;
};

const SectionInfo = ({ heading, description }: Props) => {
    return (
        <div className="mb-7 md:mb-12 2xl:mb-16">
            <h2>{heading}</h2>
            <p className="max-w-[560px] mx-auto 2xl:text-lg">{description}</p>
        </div>
    );
};

export default SectionInfo;
