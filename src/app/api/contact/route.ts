import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as Sentry from "@sentry/nextjs";

export const runtime = "nodejs";

// Simple rate-limiting utilizing an in-memory Map
// NOTE: This will NOT persist across serverless function invocations (e.g. on Vercel)
const rateLimitCache = new Map<string, number>();

export async function POST(request: Request) {
    try {
        // ✅ Instantiate Resend at runtime (NOT at build time)
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { success: false, error: "Missing RESEND_API_KEY on server." },
                { status: 500 }
            );
        }
        const resend = new Resend(apiKey);

        const ip = request.headers.get("x-forwarded-for") || "unknown_ip";
        const now = Date.now();
        const requestTime = rateLimitCache.get(ip);

        // Allow 1 request per 60 seconds per IP (Basic)
        if (requestTime && now - requestTime < 60000) {
            return NextResponse.json(
                { success: false, error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }
        rateLimitCache.set(ip, now);

        const body = await request.json();
        const { name, email, subject, message, companyWebsite } = body;

        // 1. Honeypot check
        if (companyWebsite && String(companyWebsite).trim() !== "") {
            // Silently discard bot submission
            return NextResponse.json({ success: true, message: "Message sent." });
        }

        // 2. Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: "Invalid email format." },
                { status: 400 }
            );
        }

        if (String(message).trim().length < 10) {
            return NextResponse.json(
                { success: false, error: "Message must be at least 10 characters." },
                { status: 400 }
            );
        }

        // 3. Send email
        const data = await resend.emails.send({
            from: "Mirai Stack <no-reply@mail.miraistack.co.za>",
            to: ["info@miraistack.co.za"],
            subject: `New Mirai Stack Contact: ${subject || "Website Message"}`,
            replyTo: email,
            html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject / Company:</strong> ${subject || "N/A"}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
        });

        // Resend throws on error sometimes, but keep your guard:
        if (data?.error) {
            console.error("Resend Error:", data.error);
            return NextResponse.json(
                { success: false, error: "Failed to send the email. Please try again later." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("API Error:", error);
        Sentry.captureException(error);
        return NextResponse.json(
            { success: false, error: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
