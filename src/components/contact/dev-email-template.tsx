import React from "react";
import { ContactFormData } from "@/lib/types";

const DevEmailTemplate = ({ name, email, message }: ContactFormData) => {
    return (
        <div>
            <h1>Portfolio Contact Form Submission</h1>

            <div>
                <h3>From:</h3>
                <p>{name}</p>
            </div>

            <div>
                <h3>Email address:</h3>
                <p>{email}</p>
            </div>

            <div>
                <h3>Message:</h3>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default DevEmailTemplate;
