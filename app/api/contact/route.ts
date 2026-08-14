export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, channelUrl, message } = body;

    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const rows = [
      ["Name", name],
      ["Email", email],
      ["Company", company || "-"],
      ["Service", service],
      ["Budget", budget],
      ["Channel URL", channelUrl || "-"],
    ];

    const tableRows = rows
      .map(
        ([label, value]) =>
          `<tr>
            <td style="padding:10px 0;color:#94A3B8;width:140px;vertical-align:top;">${label}</td>
            <td style="padding:10px 0;color:#F8FAFC;font-weight:500;">${value}</td>
          </tr>`
      )
      .join("");

    await transporter.sendMail({
      from: `"Runtime Gurus Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "runtimeguru1@gmail.com",
      replyTo: email,
      subject: `New Inquiry: ${service} - ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#07070E;color:#F8FAFC;padding:32px;border-radius:12px;">
          <h2 style="color:#A855F7;margin-bottom:24px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
          <div style="margin-top:24px;padding:16px;background:#0F0F1A;border-radius:8px;border:1px solid #1E1E3A;">
            <p style="color:#94A3B8;margin-bottom:8px;font-size:14px;">Goals / Message:</p>
            <p style="color:#F8FAFC;white-space:pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Contact form error FULL:", msg);
    return NextResponse.json({ error: "Internal server error", detail: msg }, { status: 500 });
  }
}
