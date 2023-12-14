import React from "react";
import { ProjectCard, SectionInfo } from "@/components/ui";
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";

type Props = {};

const Projects = (props: Props) => {
    return (
        <>
            <section>
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
                </div>
            </section>
            <a
                className="block bg-purple-100 hover:bg-purple-200 transition-all duration-300 text-white-100 py-6 lg:py-8 -mt-10 lg:-mt-6"
                href="https://github.com/alliyah95"
                target="_blank"
            >
                <div className="container text-center ">
                    <div className="flex items-center justify-center space-x-2">
                        <div>See more projects</div>
                        <BsBoxArrowUpRight />
                    </div>
                </div>
            </a>
        </>
    );
};

export default Projects;
