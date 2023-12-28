import React from "react";
import { Metadata } from "next";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
    title: "Page not found",
};
{
}
const NotFound = () => {
    return (
        <section className="page-404">
            <div className="container text-center">
                <h1 className="mb-1 text-3xl lg:text-4xl">Page not found.</h1>
                <p>The entered URL does not exist on this site.</p>

                <div className="flex justify-center mt-4">
                    <Button
                        text="Back to my site"
                        fullWidth={true}
                        url="/"
                        icon={<RiArrowGoBackLine />}
                        iconPosition="left"
                    />
                </div>
            </div>
        </section>
    );
};

export default NotFound;
