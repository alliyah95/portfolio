import React from "react";
import Image from "next/image";
import { BsChat, BsFileEarmark, BsChevronDown } from "react-icons/bs";
import { Button } from "@/components/ui";
import { GridBackground } from "@/components/grid";

const Hero = () => {
    return (
        <section
            id="about"
            className="hero-section min-h-[84vh] lg:min-h-screen flex flex-col justify-center items-center relative"
        >
            <GridBackground />
            <div className="container text-center">
                <div className="hero-info-container">
                    <Image
                        src="/images/hero-avatar.png"
                        width={400}
                        height={400}
                        alt="A woman with long black hair wearing a white top."
                        className="h-40 w-auto mb-6 2xl:h-60 2xl:mb-10 mx-auto"
                    />

                    <h1 className="text-purple-100 mb-5 md:mb-7 2xl:mb-9">
                        Alliyah Joyce Sarip
                    </h1>

                    <p className="sm:max-w-[462px] md:max-w-[560px] mx-auto 2xl:text-lg">
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

            <div className="hero-chevron relative -bottom-28 md:-bottom-44 2xl:-bottom-28 transition-all duration-200">
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
