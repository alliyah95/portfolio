import React from "react";
import { ContactFormData } from "@/lib/types";

const UserEmailTemplate = ({ name }: Partial<ContactFormData>) => {
    return (
        <div className="response-email">
            <h1>Hello, {name}!</h1>
            <p>
                Thank you for reaching out through my contact form. I appreciate
                your interest. I have received your message and will get back to
                you as soon as possible.
            </p>
            <p>
                If you have any urgent inquiries, feel free to connect with me
                on <strong>contact@alliyah.dev</strong>.
            </p>
            <br />
            <p>Best regards,</p>
            <p>Alliyah Joyce Sarip</p>
        </div>
    );
};

export default UserEmailTemplate;
