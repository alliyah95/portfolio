import React from "react";
import { SectionInfo, SkillItem } from "@/components/ui";
import { skillItems } from "@/lib/skills";

type Props = {};

const Skills = (props: Props) => {
    return (
        <section>
            <div className="container text-center">
                <SectionInfo
                    heading="Skills"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ex lectus. Donec cursus odio tellus, quis 
                                        vulputate nulla tempor in. Morbi vestibulum."
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
