import React from "react";
import { Button } from "@/components/ui";
import { BsChat, BsFileEarmark, BsChevronDown } from "react-icons/bs";

type Props = {};

const Hero = (props: Props) => {
    return (
        <section
            id="about"
            className="hero-section min-h-[84vh] lg:min-h-screen flex flex-col justify-center items-center"
        >
            <div className="container text-center">
                <div className="hero-info-container">
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
                        url="#contact"
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
            <div className="hero-chevron relative -bottom-28 md:-bottom-44 transition-all duration-200">
                <div className="animate-bounce">
                    <a href="#skills" className="cursor-pointer">
                        <BsChevronDown className="text-xl md:text-2xl text-purple-100" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
