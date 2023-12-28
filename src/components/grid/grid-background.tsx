"use client";

import React, { useState } from "react";
import { GridCell } from ".";

const GridBackground = () => {
    const [rows, setRows] = useState<number>(9);
    const [cols, setCols] = useState<number>(9);

    return (
        <div className="absolute inset-0 -z-10 h-screen overflow-hidden">
            <div className="h-full w-full grid grid-rows-6 grid-cols-3 sml:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 gap-1">
                {[...Array(rows * cols)].map((_, index) => (
                    <GridCell key={index} delay={index * 25} />
                ))}
            </div>
        </div>
    );
};

export default GridBackground;
