import React from "react";
import { Button, ProjectCard, SectionInfo } from "@/components/ui";
import { BsBoxArrowUpRight } from "react-icons/bs";

type Props = {};

const Projects = (props: Props) => {
    return (
        <>
            <section id="projects">
                <div className="container text-center">
                    <SectionInfo
                        heading="Projects"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ex lectus. Donec cursus odio tellus, quis 
                    vulputate nulla tempor in. Morbi vestibulum."
                    />

                    <div className="max-w-[1048px] mx-auto grid md:grid-cols-2 gap-7">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>

                    <div className="flex justify-center mt-7">
                        <Button
                            text="View all projects"
                            url="https://github.com/alliyah95"
                            filled={true}
                            icon={<BsBoxArrowUpRight />}
                            iconPosition="right"
                            fullWidth={true}
                            target="_blank"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
