import SendMailTemplate from "@/emails/SendMailTemplate";
import SendResponseTemplate from "@/emails/SendResponseTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendResponse = async (firstName: string, email: string) => {
  try {
    const data = await resend.emails.send({
      from: "Cromax Photography <onboarding@resend.dev>",
      to: email,
      subject: 'Thanks for your message',
      react: SendResponseTemplate(firstName)
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}

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
    await sendResponse(firstName, email);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}



