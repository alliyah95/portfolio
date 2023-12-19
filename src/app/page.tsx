import React from "react";
import { Contact, Footer, Hero, Projects, Skills } from "@/components/sections";
import { Navbar } from "@/components/ui";

type Props = {};

const HomePage = (props: Props) => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
