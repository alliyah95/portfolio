import React from "react";

type ChipProps = {
    text: string;
};

const Chip = ({ text }: ChipProps) => {
    return <div className="chip">{text}</div>;
};

export default Chip;
