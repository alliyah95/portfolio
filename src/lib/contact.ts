import { ZodType, z as zod } from "zod";
import { ContactFormData } from "@/lib/types";
import { nanoid } from "nanoid";

export const contactSchema: ZodType<ContactFormData> = zod.object({
    name: zod
        .string()
        .min(1, {
            message: "Please enter your name",
        })
        .refine((data) => data.trim() !== "", {
            message: "Please enter your name",
        }),
    email: zod.string().email({
        message: "Invalid email address",
    }),
    message: zod
        .string()
        .min(1, {
            message: "Message cannot be empty",
        })
        .refine((data) => data.trim() !== "", {
            message: "Message cannot be empty",
        }),
});

export const generateEmailId = () => {
    return `ID-${nanoid(6)}`;
};
