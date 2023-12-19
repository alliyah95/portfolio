import React from "react";
import { ContactForm } from "@/components/contact";

type Props = {};

const Contact = (props: Props) => {
    const devMail = process.env.DEV_EMAIL_ADDRESS;

    return (
        <section
            id="contact"
            className="px-7 md:px-9 xl:px-10 pt-12 pb-20 md:pt-16 xl:py-24"
        >
            <div className="container text-center">
                <div className="mb-7 md:mb-12 2xl:mb-16">
                    <h2>Get in Touch</h2>
                    <p className="max-w-[640px] mx-auto">
                        Whether you &#39;re interested in a collaboration, have
                        a project in mind, or just want to say hi, feel free to
                        reach out. Fill out the form below or drop me a message
                        at{" "}
                        <a
                            href={`mailto:${devMail}`}
                            className="text-purple-100 underline"
                        >
                            contact@alliyah.dev
                        </a>
                        .
                    </p>
                </div>

                <div className="max-w-[600px] mx-auto">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
