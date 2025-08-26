// src/app/api/newsletter/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "@/app/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = "c3a4e09d-9827-4d5a-83ab-9c8691e51138";

export async function POST(request) {
    try {
        // 1. Read both email and lang from the request body
        const { email, lang } = await request.json();

        // Create an instance of the email component to access its translations
        const emailComponent = WelcomeEmail({
            subscriberEmail: email,
            lang: lang,
        });
        const subject =
            WelcomeEmail.translations[lang]?.subject ||
            WelcomeEmail.translations.en.subject;

        // 2. Add contact to the Resend audience
        const { data: contactData, error: contactError } =
            await resend.contacts.create({
                email,
                audienceId,
            });

        if (contactError) {
            console.error("Error adding contact to audience:", contactError);
            return NextResponse.json({ error: contactError }, { status: 500 });
        }

        // 3. Send the welcome email
        const { data: emailData, error: emailError } = await resend.emails.send(
            {
                from: "SmartNode Solutions <contact@updates.smartnode.solutions>",
                to: [email],
                replyTo: "contact@smartnode.solutions",
                subject: subject, // Use the dynamic subject here
                react: emailComponent,
            }
        );

        if (emailError) {
            // Log the specific error from Resend
            console.error("Error sending welcome email:", emailError);
            return NextResponse.json({ error: emailError }, { status: 500 });
        }

        return NextResponse.json({ contactData, emailData }, { status: 200 });
    } catch (error) {
        console.error("Server-side error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
