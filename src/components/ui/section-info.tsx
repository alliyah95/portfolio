import React from "react";

type SectionInfoProps = {
    heading: string;
    description?: string;
    descriptionMaxWidth?: string;
};

const SectionInfo = ({
    heading,
    description,
    descriptionMaxWidth = "560px",
}: SectionInfoProps) => {
    return (
        <div className="mb-7 md:mb-12 2xl:mb-16">
            <h2>{heading}</h2>
            <p
                style={{ maxWidth: descriptionMaxWidth }}
                className="mx-auto 2xl:text-lg"
            >
                {description}
            </p>
        </div>
    );
};

export default SectionInfo;
