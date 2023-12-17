import React from "react";
import { Contact, Hero, Projects, Skills } from "@/components/sections";

type Props = {};

const HomePage = (props: Props) => {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default HomePage;
