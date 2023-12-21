"use client";

import React, { useState } from "react";
import { PiPaperPlaneRight } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData } from "@/lib/types";
import { contactSchema } from "@/lib/contact";
import { Spinner } from "@/components/ui";

type Props = {};

const buttonStatusList = {
    default: (
        <>
            <div>Send message</div>
            <PiPaperPlaneRight />
        </>
    ),
    loading: (
        <>
            <div>Sending message</div>
            <Spinner />
        </>
    ),
    success: <div>Message sent!</div>,
    error: <div>Error! Try again.</div>,
} as const;

const ContactForm = (props: Props) => {
    const [buttonStatus, setButtonStatus] = useState<React.ReactNode>(
        buttonStatusList.default
    );
    const [isTimeoutDone, setIsTimeoutDone] = useState<boolean>(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

    const handleForm = async (data: ContactFormData): Promise<void> => {
        if (!isTimeoutDone) {
            return;
        }

        setIsTimeoutDone(false);
        setButtonStatus(buttonStatusList.loading);

        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok || response.status === 500) {
            setButtonStatus(buttonStatusList.error);
        } else {
            setButtonStatus(buttonStatusList.success);
        }

        setTimeout(() => {
            setButtonStatus(buttonStatusList.default);
            setIsTimeoutDone(true);
        }, 6000);
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
            <div className="mt-7 flex justify-center">
                <button
                    type="submit"
                    className="btn btn--filled w-full md:w-auto justify-center items-center"
                    disabled={
                        Object.keys(errors).length > 0 ||
                        (buttonStatus !== undefined &&
                            buttonStatus !== buttonStatusList.default)
                    }
                >
                    {buttonStatus}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
