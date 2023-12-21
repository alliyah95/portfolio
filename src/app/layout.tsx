import React from "react";
import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import { Prata } from "next/font/google";
import {
    defaultSeo,
    siteMetadata,
    twitterMetadata,
    openGraphMetadata,
} from "@/lib/seo";

export const metadata: Metadata = {
    ...defaultSeo,
    ...siteMetadata,
    openGraph: {
        ...defaultSeo,
        ...openGraphMetadata,
    },
    twitter: {
        ...defaultSeo,
        ...twitterMetadata,
    },
};

const helvetica = localFont({
    src: [
        {
            path: "../../public/fonts/HelveticaNeue-Light.otf",
            weight: "400",
        },
        {
            path: "../../public/fonts/HelveticaNeue-Bold.otf",
            weight: "700",
        },
    ],
    variable: "--font-helvetica",
    display: "swap",
});

const prata = Prata({
    subsets: ["latin"],
    variable: "--font-prata",
    weight: "400",
    display: "swap",
});

type Props = {
    children: React.ReactNode;
};

const RootLayout = (props: Props) => {
    return (
        <html lang="en">
            <body
                className={`${helvetica.variable} ${prata.variable} font-helvetica dark`}
            >
                {props.children}
            </body>
        </html>
    );
};

export default RootLayout;
