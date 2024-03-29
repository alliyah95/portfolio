import React from "react";
import Image from "next/image";
import { Chip } from "@/components/ui";

export type ProjectCardProps = {
    thumbnail: string;
    title: string;
    description: string;
    tags: string[];
    url?: string;
    gitHubRepo: string;
};

const ProjectCard = ({
    thumbnail,
    title,
    description,
    tags,
    url,
    gitHubRepo,
}: ProjectCardProps) => {
    return (
        <div className="project-card border border-purple-100 rounded-sm h-full">
            <div className="relative project-card-img-container">
                <Image
                    src={thumbnail}
                    alt={`${title} Thumbnail`}
                    width={1120}
                    height={744}
                    className="w-full h-auto"
                />
                <div className="project-links bg-purple-100 py-2 px-4 text-white-200">
                    <div className="flex space-x-2 justify-end">
                        <a
                            target="_blank"
                            href={gitHubRepo}
                            className="project-link"
                        >
                            View Repo
                        </a>
                        {url && (
                            <>
                                <div>•</div>
                                <a
                                    target="_blank"
                                    href={url}
                                    className="project-link"
                                >
                                    Live Demo
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="border-t border-t-purple-100 relative lg:z-30">
                <div className="text-start px-5 pt-5 lg:pt-7 lg:px-7 bg-white-200">
                    <h3 className="project-title">{title}</h3>
                    <p className="leading-tight">{description}</p>
                </div>
                <div className="pt-4 lg:pt-5 px-5 pb-5 lg:pb-7 mt-auto flex flex-wrap -m-0.5">
                    {tags.map((tag, index) => (
                        <Chip key={index} text={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
