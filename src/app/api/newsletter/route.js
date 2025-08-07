// src/app/api/newsletter/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

console.log(
    "RESEND_API_KEY is:",
    process.env.RESEND_API_KEY ? "Loaded" : "Not loaded"
);

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = "c3a4e09d-9827-4d5a-83ab-9c8691e51138";

export async function POST(request) {
    try {
        const { email } = await request.json();
        console.log("Received email:", email);

        const { data, error } = await resend.contacts.create({
            email,
            audienceId,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
