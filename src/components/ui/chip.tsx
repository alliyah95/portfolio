import React from "react";

type Props = {
    text: string;
};

const Chip = ({ text }: Props) => {
    return <div className="chip">{text}</div>;
};

export default Chip;
