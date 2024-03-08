"use client";

import React from "react";
import Image from "next/image";
import { BsChat, BsFileEarmark, BsChevronDown } from "react-icons/bs";
import { Fade, JackInTheBox } from "react-awesome-reveal";
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
                    <Fade
                        triggerOnce={true}
                        duration={300}
                        className="flex justify-center"
                    >
                        <Image
                            src="/images/hero-avatar.png"
                            width={400}
                            height={400}
                            alt="A woman with long black hair wearing a white top."
                            className="h-40 w-auto mb-6 2xl:h-60 2xl:mb-10"
                        />
                    </Fade>

                    <Fade triggerOnce={true} delay={300} duration={700}>
                        <h1 className="text-purple-100 mb-5 md:mb-7 2xl:mb-9">
                            Alliyah Joyce Sarip
                        </h1>
                    </Fade>

                    <Fade triggerOnce={true} duration={500} delay={500}>
                        <p className="sm:max-w-[462px] md:max-w-[560px] mx-auto 2xl:text-lg">
                            A{" "}
                            <span className="font-bold">
                                Software Developer
                            </span>{" "}
                            specializing in building full-stack web applications
                            using the MERN Stack.
                        </p>
                    </Fade>
                </div>
                <div className="mt-6 flex justify-center space-x-2 md:space-x-4 md:max-w-[640px] mx-auto">
                    <Fade
                        cascade={true}
                        damping={0.1}
                        delay={600}
                        duration={1000}
                        triggerOnce={true}
                    >
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
                    </Fade>
                </div>
            </div>
            <JackInTheBox delay={600} duration={1000} triggerOnce={true}>
                <div className="hero-chevron relative -bottom-28 md:-bottom-44 transition-all duration-200">
                    <div className="animate-bounce">
                        <a href="#skills" className="cursor-pointer">
                            <BsChevronDown className="text-xl md:text-2xl text-purple-100" />
                        </a>
                    </div>
                </div>
            </JackInTheBox>
        </section>
    );
};

export default Hero;
