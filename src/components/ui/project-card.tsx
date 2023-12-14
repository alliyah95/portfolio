import React from "react";
import Image from "next/image";
import { Chip } from "@/components/ui";

type Props = {};

const ProjectCard = (props: Props) => {
    return (
        <a className="bg-white-100 cursor-pointer" href="#">
            <div>
                <Image
                    src="/images/projects/sample-project-thumbnail.png"
                    alt="thumbnail"
                    width={480}
                    height={260}
                    layout="responsive"
                />
            </div>
            <div className="text-start p-4 lg:p-7 flex flex-col">
                <div className="mb-4 md:mb-6">
                    <h3 className="mb-1">Project Name</h3>
                    <p className="leading-tight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris vel ex lectus. Donec cursus odio tellus, quis{" "}
                    </p>
                </div>

                <div className="mt-auto flex flex-wrap -m-1">
                    <Chip /> <Chip /> <Chip /> <Chip />
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
