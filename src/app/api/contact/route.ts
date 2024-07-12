import { env } from "@/env";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// const user = env.EMAIL;
// const pass = env.PASSWORD;
// const receiver = env.EMAIL_RECEIVER

const user = "contato@imtg.com.br";
const pass = "u1imArs&";
const receiver = "alexandre.x.f00@gmail.com";

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
      from: "IMTG",
      to: receiver,
      subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to send message.", { status: 500 });
  }
}
