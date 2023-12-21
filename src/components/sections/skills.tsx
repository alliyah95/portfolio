"use client";

import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import { SectionInfo, SkillItem } from "@/components/ui";
import { skillItems } from "@/lib/skills";

type Props = {};

const Skills = (props: Props) => {
    return (
        <section id="skills" className="skills-section">
            <div className="container text-center">
                <SectionInfo
                    heading="Skills & Technologies"
                    description="These are the languages and technologies that I primarily work with when building software."
                />

                <div className="max-w-[548px] md:max-w-[642px] lg:max-w-[700px] mx-auto flex justify-center flex-wrap -m-2">
                    <JackInTheBox
                        cascade={true}
                        damping={0.08}
                        triggerOnce={true}
                        delay={100}
                    >
                        {skillItems.map((skillItem, ind) => (
                            <SkillItem
                                key={ind}
                                src={skillItem.src}
                                title={skillItem.title}
                            />
                        ))}
                    </JackInTheBox>
                </div>
            </div>
        </section>
    );
};

export default Skills;
