import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email, company, message } = await request.json();

        const { data, error } = await resend.emails.send({
            // The 'from' address must be on a domain you've verified with Resend.
            from: "Contact Form <contact@updates.smartnode.solutions>",

            // The 'to' address is your personal email where you want to receive the submissions.
            to: ["contact@smartnode.solutions"],

            subject: "New Contact Form Submission",
            html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
