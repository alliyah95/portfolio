import React from "react";
import "./globals.css";
import localFont from "next/font/local";
import { Prata } from "next/font/google";

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

type RootLayoutProps = {
    children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
    return (
        <html lang="en">
            <body
                className={`${helvetica.variable} ${prata.variable} font-helvetica`}
            >
                {props.children}
            </body>
        </html>
    );
};

export default RootLayout;
