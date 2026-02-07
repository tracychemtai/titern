import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with the API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // 1. Check if the API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY in environment variables");
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 });
    }

    const { name, email, description } = await req.json();

    // 2. Send the email
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      // For testing: This MUST be the email Tracy used to sign up for Resend
      to: ['tracychemtai@gmail.com'], 
      replyTo: email, // This allows Tracy to reply directly to the user
      subject: `New Inquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #333;">New Project Inquiry</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>User Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${description}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });

  } catch (error: any) {
    console.error("Resend API Error:", error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Failed to send email' 
    }, { status: 500 });
  }
}