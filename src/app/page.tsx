import React from "react";
import { Metadata } from "next";
import { Contact, Footer, Hero, Projects, Skills } from "@/components/sections";
import { Navbar } from "@/components/ui";

import {
    defaultSeo,
    siteMetadata,
    twitterMetadata,
    openGraphMetadata,
} from "@/lib/seo";

export const metadata: Metadata = {
    ...defaultSeo,
    ...siteMetadata,
    openGraph: {
        ...defaultSeo,
        ...openGraphMetadata,
    },
    twitter: {
        ...defaultSeo,
        ...twitterMetadata,
    },
};

const HomePage = () => {
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
