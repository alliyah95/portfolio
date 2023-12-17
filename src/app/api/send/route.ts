import { DevEmailTemplate, UserEmailTemplate } from "@/components/contact";
import { Resend } from "resend";
import { ContactFormData } from "@/lib/types";
import { generateEmailId } from "@/lib/contact";

const resend = new Resend(process.env.RESEND_API_KEY);
const devWorkEmail = process.env.DEV_EMAIL_ADDRESS as string;
const devPersonalEmail = process.env.DEV_PERSONAL_EMAIL as string;

export async function POST(request: Request) {
    const { name, email, message }: ContactFormData = await request.json();
    const emailId = generateEmailId();

    try {
        // send email to me <alliyah>
        const dataDev = await resend.emails.send({
            from: `Alliyah <${devWorkEmail}>`,
            to: devPersonalEmail,
            subject: `Contact Form Submission - ${name} | ${emailId}`,
            react: DevEmailTemplate({ name, email, message }),
        });

        // send confirmation email to user
        const dataUser = await resend.emails.send({
            from: `Alliyah Joyce Sarip <${devWorkEmail}>`,
            to: email,
            subject: `Contact Form Submission | ${emailId}`,
            react: UserEmailTemplate({ name }),
        });

        return Response.json(dataDev);
    } catch (error) {
        return Response.json({ error });
    }
}
