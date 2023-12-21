"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { ContactForm } from "@/components/contact";

type Props = {};

const Contact = (props: Props) => {
    return (
        <section
            id="contact"
            className="px-7 md:px-9 xl:px-10 pt-12 pb-20 md:pt-16 xl:py-24"
        >
            <div className="container text-center">
                <Fade triggerOnce={true} fraction={0.2} delay={200}>
                    <div className="mb-7 md:mb-12 2xl:mb-16">
                        <h2>Get in Touch</h2>
                        <p className="max-w-[590px] mx-auto 2xl:text-lg">
                            Interested in a collaboration or have a project in
                            mind? Feel free to reach out. Fill out the form
                            below or drop me a message at{" "}
                            <a
                                href="mailto:contact@alliyah.dev"
                                className="text-purple-100 underline underline-offset-2"
                            >
                                contact@alliyah.dev
                            </a>
                            .
                        </p>
                    </div>
                </Fade>
                <Fade triggerOnce={true} delay={300}>
                    <div className="max-w-[600px] mx-auto">
                        <ContactForm />
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Contact;
