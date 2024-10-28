"use server";

import { Resend } from "resend";
import { ContactFormData } from "@/lib/schemas/contact.schema";
import { NewsletterFormData } from "@/lib/schemas/newsletter.schema";

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
      from: `DigiTech Edge<${process.env.RESEND_EMAIL}>`,
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

export async function subscribeToNewsletter(data: NewsletterFormData) {
  try {
    const { email } = data;
    const audienceId = process.env.AUDIENCE_ID;

    if (!audienceId) {
      throw new Error("Audience ID not configured");
    }

    // Check if contact exists
    const contacts = await resend.contacts.list({ audienceId });

    if (!contacts) {
      throw new Error("Failed to fetch contacts");
    }


    const existingContact = contacts?.data?.data?.find(
      (contact: { email: string }) => contact.email === email
    );

    if (existingContact) {
      return { 
        success: false, 
        error: "Email already subscribed to newsletter" 
      };
    }

    // Add new subscriber to audience
    await resend.contacts.create({
      email,
      audienceId,
      firstName: "",
      lastName: "",
    });

    // Send welcome email
    await resend.emails.send({
      from: `DigiTech Edge<${process.env.RESEND_EMAIL}>`,
      to: email,
      subject: "Welcome to DigiTech Edge Newsletter!",
      text: `
        Welcome to DigiTech Edge Newsletter!

        Thank you for subscribing to our newsletter. You'll receive updates about:
        - Latest technology trends and innovations
        - Company news and updates
        - Industry insights and best practices
        - Special offers and promotions

        Best regards,
        DigiTech Edge Team
      `
    });

    return { success: true };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return { success: false, error: "Failed to process subscription" };
  }
}
