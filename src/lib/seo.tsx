import { Metadata } from "next";

export const defaultSeo = {
    title: "Alliyah Joyce Sarip",
    description:
        "A Software Developer specializing in building full-stack web applications.",
};

export const siteMetadata: Metadata = {
    keywords: [
        "Alliyah Joyce Sarip",
        "Software Developer",
        "Web Developer",
        "Software Engineer",
        "Full-Stack Developer",
    ],
};

export const twitterMetadata = {
    card: "summary_large_image",
    creator: "Alliyah Joyce Sarip",
    images: [
        {
            url: "/api/og",
            width: 1200,
            height: 630,
        },
    ],
};

export const openGraphMetadata = {
    url: "https://alliyah.dev/",
    siteName: "Alliyah Joyce Sarip",
    images: [
        {
            url: "/api/og",
            width: 1200,
            height: 630,
        },
    ],
    type: "website",
    locale: "en_US",
};
