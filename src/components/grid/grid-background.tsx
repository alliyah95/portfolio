"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

const GridBackground = () => {
    return (
        <Fade triggerOnce={true} delay={100}>
            <div className="grid-background" />
        </Fade>
    );
};

export default GridBackground;
