import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

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
      from: `Makrosys Solutions <${process.env.SMTP_USER}>`, // Sender address
      to: email, // List of receivers
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
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead Notification</title>
  <style>
    body { font-family: 'Outfit', 'Inter', Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f7; color: #1a1a2e; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(255, 65, 108, 0.15); margin-top: 40px; margin-bottom: 40px; border: 1px solid #eef2f6; }
    .header { background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%); padding: 60px 40px; text-align: center; color: #ffffff; }
    .logo-container { margin-bottom: 20px; }
    .logo-img { height: 45px; filter: brightness(0) invert(1); }
    .header h1 { margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff; }
    .header p { margin: 10px 0 0; opacity: 0.9; font-size: 15px; font-weight: 500; text-transform: uppercase; letter-spacing: 2px; }
    .content { padding: 40px; background: #ffffff; color: #1a1a2e; }
    .lead-status { display: inline-block; padding: 6px 14px; background: rgba(255, 65, 108, 0.1); color: #ff416c; border-radius: 50px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 30px; }
    .section-title { font-size: 16px; font-weight: 800; color: #1a1a2e; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; border-left: 4px solid #ff416c; padding-left: 15px; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
    .data-row { border-bottom: 1px solid #f0f0f5; }
    .data-row:last-child { border-bottom: none; }
    .data-label { padding: 12px 0; width: 140px; font-weight: 700; color: #888; font-size: 13px; vertical-align: middle; text-transform: uppercase; }
    .data-value { padding: 12px 0; color: #1a1a2e; font-size: 15px; font-weight: 600; vertical-align: middle; }
    .message-box { background: #fff5f6; padding: 30px; border-radius: 16px; margin-top: 20px; border: 1px solid #ffebeb; }
    .message-box h4 { margin: 0 0 15px; font-size: 13px; color: #ff416c; text-transform: uppercase; letter-spacing: 1px; }
    .message-box p { margin: 0; line-height: 1.8; color: #1a1a2e; font-size: 15px; font-weight: 500; }
    .cta-button { display: block; background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%); color: #ffffff !important; text-align: center; padding: 20px 30px; text-decoration: none; border-radius: 14px; font-weight: 800; font-size: 16px; margin-top: 40px; box-shadow: 0 12px 30px rgba(255, 65, 108, 0.3); text-transform: uppercase; letter-spacing: 1px; }
    .footer { background: #f8f9fc; color: #1a1a2e; padding: 40px; text-align: center; font-size: 12px; border-top: 1px solid #eef2f6; }
    .footer p { margin: 8px 0; opacity: 0.6; font-weight: 500; }
    .footer strong { color: #1a1a2e; opacity: 1; }
  </style>
</head>
<body>
  <div style="background-color: #f4f4f7; padding: 20px 0;">
    <div class="container">
      <div class="header">
        <div class="logo-container">
          <img src="cid:makrosys-logo" alt="Makrosys" class="logo-img">
        </div>
        <h1>New Partnership Inquiry</h1>
        <p>Lead Notification</p>
      </div>
      
      <div class="content">
        <div class="lead-status">🚀 Active Inbound Lead</div>
        
        <div class="section-title">Inquiry Details</div>
        
        <table class="data-table">
          <tr class="data-row">
            <td class="data-label">Contact Name</td>
            <td class="data-value">${name}</td>
          </tr>
          <tr class="data-row">
            <td class="data-label">Email Address</td>
            <td class="data-value"><a href="mailto:${email}" style="color: #ff416c; text-decoration: none; font-weight: 700;">${email}</a></td>
          </tr>
          <tr class="data-row">
            <td class="data-label">Phone Number</td>
            <td class="data-value">${phone || 'Not Provided'}</td>
          </tr>
          <tr class="data-row">
            <td class="data-label">Company Name</td>
            <td class="data-value">${company || 'Not Provided'}</td>
          </tr>
          <tr class="data-row">
            <td class="data-label">Service Type</td>
            <td class="data-value"><span style="background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%); color: #fff; padding: 4px 12px; border-radius: 6px; font-size: 11px; font-weight: 800; text-transform: uppercase;">${service || 'General Inquiry'}</span></td>
          </tr>
        </table>

        <div class="message-box">
          <h4>Business Request</h4>
          <p>${message}</p>
        </div>

        <a href="mailto:${email}" class="cta-button">Engage With Lead</a>
      </div>

      <div class="footer">
        <p><strong>MAKROSYS SOLUTIONS PVT LTD</strong></p>
        <p>Offshore Tech & CRM Partner for US Agencies</p>
        <p>B-2047 ZARA ROSSA, Sector 112, Gurugram, India</p>
        <p style="margin-top: 20px; font-size: 10px; opacity: 0.4;">This is a confidential lead notification generated by the Makrosys technical ecosystem.</p>
      </div>
    </div>
  </div>
</body>
</html>
`,
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(process.cwd(), 'public/images/logo.png'),
          cid: 'makrosys-logo'
        }
      ]
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
