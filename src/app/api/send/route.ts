import { NextResponse } from "next/server";
import { Resend } from "resend";
import { DevEmailTemplate, UserEmailTemplate } from "@/components/contact";
import { ContactFormData } from "@/lib/types";
import { generateEmailId } from "@/lib/contact";

const resend = new Resend(process.env.RESEND_API_KEY);
const devWorkEmail = process.env.DEV_EMAIL_ADDRESS as string;
const devPersonalEmail = process.env.DEV_PERSONAL_EMAIL as string;

export async function POST(request: Request) {
    const { name, email, message }: ContactFormData = await request.json();
    const emailId = generateEmailId();

    const origin = request.headers.get("origin");

    try {
        // send email to me <alliyah>
        const dataDev = await resend.emails.send({
            from: `Alliyah <${devWorkEmail}>`,
            to: devPersonalEmail,
            subject: `Contact Form Submission - ${name} | ${emailId}`,
            react: DevEmailTemplate({ name, email, message }),
        });

        // send confirmation email to user
        if (dataDev && !dataDev.error) {
            await resend.emails.send({
                from: `Alliyah Joyce Sarip <${devWorkEmail}>`,
                to: email,
                subject: `Contact Form Submission | ${emailId}`,
                react: UserEmailTemplate({ name }),
            });

            return new NextResponse(JSON.stringify({ error: "Message sent" }), {
                headers: {
                    "Access-Control-Allow-Origin": origin || "*",
                },
                status: 200,
            });
        }

        return new NextResponse(
            JSON.stringify({ error: "Internal Server Error" }),
            {
                headers: {
                    "Access-Control-Allow-Origin": origin || "*",
                },
                status: 500,
            }
        );
    } catch (error) {
        return Response.json({ error });
    }
}
