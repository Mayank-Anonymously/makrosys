import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Create a transporter using SMTP
    // You should put these credentials in your .env.local file

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // e.g., smtp.gmail.com
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true' || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // 👈 FIX FOR SELF-SIGNED SSL (use with caution in prod)
      },
    });

    // Verify connection configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP Verification Error:', verifyError);
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Set up email data
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER, // Sender address
      to: process.env.SMTP_TO || 'hello@makrosyssolutions.com', // List of receivers
      subject: `New Lead: ${service ? service : 'General Inquiry'} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Company: ${company || 'N/A'}
        Service Interested In: ${service || 'N/A'}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Lead Submitted</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <h4>Message:</h4>
        <p>${message.replace(/\\n/g, '<br>')}</p>
      `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
