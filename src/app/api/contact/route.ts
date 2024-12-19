import { env } from "@/env";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = env.NEXT_PUBLIC_EMAIL;
const pass = env.NEXT_PUBLIC_EMAIL_PASSWORD;
const receiver = env.NEXT_PUBLIC_EMAIL_RECEIVER;

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"IMTG" <${user}>`,
      to: receiver,
      subject,
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse(JSON.stringify(error, null, 2), { status: 500 });
  }
}
