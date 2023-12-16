import React from "react";
import { Hero, Projects, Skills } from "@/components/sections";

type Props = {};

const HomePage = (props: Props) => {
    return (
        <>
            <Hero />
            <Projects />
            <Skills />
        </>
    );
};

export default HomePage;
