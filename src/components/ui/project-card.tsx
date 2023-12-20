import React from "react";
import Image from "next/legacy/image";
import { Chip } from "@/components/ui";

export type Props = {
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
}: Props) => {
    return (
        <div className="project-card border border-purple-100 rounded-sm">
            <div className="relative project-card-img-container">
                <Image
                    src={thumbnail}
                    alt={`${title} Thumbnail`}
                    width={560}
                    height={372}
                    layout="responsive"
                />
                <div className="project-links bg-purple-100 py-2 px-4 text-white-200">
                    <div className="flex space-x-2 justify-end lg:justify-start">
                        <a
                            target="_blank"
                            href={gitHubRepo}
                            className="cursor-pointer hover:underline hover:underline-offset-4"
                        >
                            View Repo
                        </a>
                        {url && (
                            <>
                                <div>•</div>
                                <a
                                    target="_blank"
                                    href={url}
                                    className="cursor-pointer hover:underline hover:underline-offset-4"
                                >
                                    Live URL
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="border-t border-t-purple-100 relative lg:z-30">
                <div className="text-start px-5 pt-5 lg:pt-7 lg:px-7 flex flex-col bg-white-200">
                    <h3 className="mb-1">{title}</h3>
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
