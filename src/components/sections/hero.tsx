import React from "react";
import { Button } from "@/components/ui";
import { BsChat, BsFileEarmark } from "react-icons/bs";

type Props = {};

const Hero = (props: Props) => {
    return (
        <section className="min-h-[50vh] lg:min-h-screen flex justify-center items-center">
            <div className="container text-center">
                <div>
                    <p className="mb-3 md:mb-4 2xl:mb-6 2xl:text-xl">
                        Hi there! I am
                    </p>
                    <h1 className="text-purple-100 mb-5 md:mb-7 2xl:mb-9">
                        Alliyah Joyce Sarip
                    </h1>
                    <p className="sm:max-w-[462px] md:max-w-[640px] mx-auto 2xl:text-lg">
                        A <span className="font-bold">Software Developer</span>{" "}
                        specializing in building full-stack web applications
                        using the MERN Stack.
                    </p>
                </div>
                <div className="mt-6 flex justify-center space-x-2 md:space-x-4 md:max-w-[640px] mx-auto">
                    <Button
                        text="Get in Touch"
                        url="#"
                        filled={false}
                        icon={<BsChat />}
                        iconPosition="left"
                    />
                    <Button
                        text="Resume"
                        url="#"
                        icon={<BsFileEarmark />}
                        iconPosition="left"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
