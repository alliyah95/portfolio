import React from "react";
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
                        descriptionMaxWidth="420px"
                    />

                    <div className="max-w-[940px] mx-auto grid md:grid-cols-2 gap-6">
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
