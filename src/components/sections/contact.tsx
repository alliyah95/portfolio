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
                    <p className="max-w-[590px] mx-auto 2xl:text-lg">
                        Interested in a collaboration or have a project in mind?
                        Feel free to reach out. Fill out the form below or drop
                        me a message at{" "}
                        <a
                            href={`mailto:${devMail}`}
                            className="text-purple-100 underline underline-offset-2"
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
