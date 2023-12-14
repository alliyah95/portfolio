import React from "react";
import { Button } from "@/components/ui";

type Props = {};

const Hero = (props: Props) => {
    return (
        <section className="min-h-[70vh] lg:min-h-screen flex justify-center items-center">
            <div className="container text-center">
                <div>
                    <p className="mb-3 md:mb-4 2xl:mb-6 2xl:text-xl">
                        Hi there! I am
                    </p>
                    <h1 className="font-prata text-purple-100 mb-5 md:mb-7 2xl:mb-9">
                        Alliyah Joyce Sarip
                    </h1>
                    <p className="sm:max-w-[462px] md:max-w-[640px] mx-auto 2xl:text-lg">
                        I&apos;m a{" "}
                        <span className="font-bold">Software Engineer</span> who
                        specializes in building full-stack web applications
                        using JavaScript, TypeScript, React.js, Express.js,
                        MongoDB, and Tailwind CSS.
                    </p>
                </div>
                <div className="mt-6 flex justify-center gap-2 md:gap-4 md:max-w-[640px] mx-auto">
                    <Button text="Get in Touch" url="#" filled={false} />
                    <Button text="Resume" url="#" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
