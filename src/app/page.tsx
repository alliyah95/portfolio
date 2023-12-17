import React from "react";
import { Contact, Footer, Hero, Projects, Skills } from "@/components/sections";

type Props = {};

const HomePage = (props: Props) => {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default HomePage;
