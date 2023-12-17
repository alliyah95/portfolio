import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="bg-purple-100 py-8 md:py-12 px-7 md:px-9 xl:px-10">
            <div className="container text-white-200">
                <div className="font-prata text-3xl md:text-4xl mb-4 text-center md:text-start">
                    <a href="#">alliyah</a>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:justify-between">
                    <p className="text-center">
                        &copy; 2023 Alliyah Joyce Sarip. All Rights Reserved.
                    </p>
                    <div className="flex space-x-2 justify-center text-lg mb-2">
                        <a href="https://github.com/alliyah95" target="_blank">
                            <BsGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alliyahjoyce/"
                            target="_blank"
                        >
                            <BsLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
