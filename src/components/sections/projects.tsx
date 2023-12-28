"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Button, ProjectCard, SectionInfo } from "@/components/ui";
import { projectList } from "@/lib/projects";

const Projects = () => {
    return (
        <>
            <section id="projects">
                <div className="container text-center">
                    <SectionInfo
                        heading="Projects"
                        description="Check out some of the projects that I've built using the abovementioned technologies."
                    />

                    <div className="max-w-[940px] mx-auto grid md:grid-cols-2 gap-6">
                        <Fade
                            triggerOnce={true}
                            cascade={true}
                            damping={0.2}
                            delay={100}
                        >
                            {projectList.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    thumbnail={project.thumbnail}
                                    title={project.title}
                                    description={project.description}
                                    tags={project.tags}
                                    url={project.url}
                                    gitHubRepo={project.gitHubRepo}
                                />
                            ))}
                        </Fade>
                    </div>

                    <Fade triggerOnce={true}>
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
                    </Fade>
                </div>
            </section>
        </>
    );
};

export default Projects;
