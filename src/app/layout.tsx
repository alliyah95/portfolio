import React from "react";
import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import { Prata } from "next/font/google";

export const metadata: Metadata = {
    title: "Alliyah Joyce Sarip",
    description:
        "A Software Engineer based in the Philippines, specializing in building full-stack web applications",
};

const grotesk = localFont({
    src: [
        {
            path: "../../public/fonts/NHaasGroteskTXPro-55Rg.ttf",
            weight: "400",
        },
        {
            path: "../../public/fonts/NHaasGroteskTXPro-75Bd.ttf",
            weight: "700",
        },
    ],
    variable: "--font-grotesk",
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
                className={`${grotesk.variable} ${prata.variable} font-grotesk`}
            >
                {props.children}
            </body>
        </html>
    );
};

export default RootLayout;
