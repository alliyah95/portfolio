import { ProjectCardProps } from "@/components/ui/project-card";

export const projectList: ProjectCardProps[] = [
    {
        thumbnail: "/images/projects/brain-gain.png",
        title: "Brain Gain",
        description:
            "A tool that allows users to create, share, and study custom flashcards and tests.",
        tags: [
            "JavaScript",
            "React.js",
            "Express.js",
            "MongoDB",
            "TailwindCSS",
        ],
        url: "https://braingain.vercel.app/",
        gitHubRepo: "https://github.com/alliyah95/brain-gain",
    },
    {
        thumbnail: "/images/projects/spell-it.png",
        title: "Spell It",
        description:
            "A simple spelling application powered by Text-To-Speech (TTS) technology.",
        tags: ["TypeScript", "TailwindCSS"],
        url: "https://play-spell-it.vercel.app/",
        gitHubRepo: "https://github.com/alliyah95/spell-it",
    },
    {
        thumbnail: "/images/projects/thelescope.png",
        title: "Thelescope",
        description:
            "A record management system with a blockchain-integrated audit log.",
        tags: ["TypeScript", "React.js", "Solidity", "TailwindCSS", "Firebase"],
        gitHubRepo: "https://github.com/alliyah95/thelescope",
    },
    {
        thumbnail: "/images/projects/detoX.png",
        title: "detoX",
        description:
            "A browser extension hiding 2022 Philippine Election tweets with hate speech on Twitter/X.",
        tags: ["TypeScript", "React.js", "Webpack"],
        url: "https://chrome.google.com/webstore/detail/detox/efibkphbodijlgbhflloachnigfmgfdi",
        gitHubRepo: "https://github.com/alliyah95/detoX/",
    },
];
