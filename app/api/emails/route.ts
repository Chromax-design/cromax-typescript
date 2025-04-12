import SendMailTemplate from "@/emails/SendMailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;
    const emailData = { fullName: `${firstName} ${lastName}`, senderEmail: email, subjectText: subject, message: message }

    const data = await resend.emails.send({
      from: "Cromax Photography <onboarding@resend.dev>",
      to: "chromax.design@gmail.com",
      subject: subject,
      react: SendMailTemplate(emailData)
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}



