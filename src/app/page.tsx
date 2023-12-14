import React from "react";
import { Hero, Projects } from "@/components/sections";

type Props = {};

const HomePage = (props: Props) => {
    return (
        <>
            <Hero />
            <Projects />
        </>
    );
};

export default HomePage;
