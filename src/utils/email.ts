"use server";

import { Resend } from "resend";
import { ContactFormData } from "@/lib/schemas/contact.schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  try {
    const { firstName, lastName, email, message } = data;

    const emailContent = `
      New Contact Form Submission from DigiTech Edge Website

      Sender Details:
      ---------------
      Full Name: ${firstName} ${lastName}
      Email Address: ${email}

      Message Content:
      ---------------
      ${message}

      This message was sent via the contact form on the DigiTech Edge website.
      Please respond to the sender at: ${email}
    `;

    await resend.emails.send({
      from: "DigiTech Edge<onboarding@resend.dev>",
      to: "digitechedgesolutions@gmail.com",
      // to:'isinesam@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      text: emailContent,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
