import React from "react";
import { SectionInfo, SkillItem } from "@/components/ui";
import { skillItems } from "@/lib/skills";

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container text-center">
                <SectionInfo
                    heading="Skills & Technologies"
                    description="These are the languages and technologies that I primarily work with when building software."
                    descriptionMaxWidth="420px"
                />

                <div className="max-w-[548px] md:max-w-[642px] lg:max-w-[700px] mx-auto flex justify-center flex-wrap -m-2">
                    {skillItems.map((skillItem, ind) => (
                        <SkillItem
                            key={ind}
                            src={skillItem.src}
                            title={skillItem.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
