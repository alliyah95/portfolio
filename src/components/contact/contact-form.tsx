"use client";

import React from "react";
import { BsSend, BsArrowRightSquare } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData } from "@/lib/types";
import { contactSchema } from "@/lib/contact";

type Props = {};

const ContactForm = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

    const handleForm = async (data: ContactFormData): Promise<void> => {
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        reset();
    };

    return (
        <form className="" onSubmit={handleSubmit(handleForm)}>
            <div className="space-y-3 md:space-y-5">
                <div>
                    <input
                        type="text"
                        placeholder="Name*"
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="error-msg">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email address*"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="error-msg">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <textarea placeholder="Message*" {...register("message")} />
                    {errors.message && (
                        <p className="error-msg">{errors.message.message}</p>
                    )}
                </div>
            </div>
            <div className="mt-4 md:mt-8 flex justify-center">
                <button
                    type="submit"
                    className="btn btn--filled w-full md:w-auto py-3 justify-center"
                    disabled={Object.keys(errors).length > 0}
                >
                    <div>Send Message</div>
                    <BsArrowRightSquare className="text-xl" />
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
