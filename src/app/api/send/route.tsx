import { NextResponse } from 'next/server';
import { DevEmailTemplate, UserEmailTemplate } from '@/components/contact';
import { ContactFormData } from '@/lib/types';
import { generateEmailId } from '@/lib/contact';
import { RESEND, DEV_WORK_EMAIL, DEV_PERSONAL_EMAIL } from '@/lib/constants';

export async function POST(request: Request) {
  const { name, email, message }: ContactFormData = await request.json();
  const emailId = generateEmailId();
  const origin = request.headers.get('origin');

  try {
    // send email to me <alliyah>
    const dataDev = await RESEND.emails.send({
      from: `Alliyah <${DEV_WORK_EMAIL}>`,
      to: DEV_PERSONAL_EMAIL,
      subject: `Contact Form Submission - ${name} | ${emailId}`,
      react: DevEmailTemplate({ name, email, message }),
    });

    // send confirmation email to user
    if (dataDev && !dataDev.error) {
      await RESEND.emails.send({
        from: `Alliyah Joyce Sarip <${DEV_WORK_EMAIL}>`,
        to: email,
        subject: `Contact Form Submission | ${emailId}`,
        react: UserEmailTemplate({ name }),
      });

      return new NextResponse(
        JSON.stringify({ success: 'Message successfully sent' }),
        {
          headers: {
            'Access-Control-Allow-Origin': origin || '*',
          },
          status: 200,
        }
      );
    }

    return new NextResponse(
      JSON.stringify({ error: 'Internal Server Error' }),
      {
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
        },
        status: 500,
      }
    );
  } catch (error) {
    return Response.json({ error });
  }
}
