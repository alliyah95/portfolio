"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

type GridCellProps = {
    delay: number;
};

const GridCell = ({ delay }: GridCellProps) => {
    return (
        <Fade triggerOnce={true} delay={delay}>
            <div className="max-h-full h-full w-full border border-purple-100/8 border-r-transparent border-b-transparent relative" />
        </Fade>
    );
};

export default GridCell;
