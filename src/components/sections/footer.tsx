import React from "react";
import { SocialIcons } from "@/components/ui";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="bg-purple-100 py-8 md:py-12 px-7 md:px-9 xl:px-10">
            <div className="container text-white-200">
                <div className="font-prata text-3xl md:text-4xl mb-4 text-center md:text-start">
                    <a href="#">alliyah</a>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:justify-between">
                    <p className="text-center mt-2 md:mt-0">
                        &copy; 2023 Alliyah Joyce Sarip. All Rights Reserved.
                    </p>
                    <SocialIcons changeColorOnHover={false} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
