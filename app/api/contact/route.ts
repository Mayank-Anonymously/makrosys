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
<div style="margin:0; padding:0; background:#f4f6f9; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#0b5cff; color:#ffffff; padding:20px; text-align:center;">
              <h2 style="margin:0;">Makrosys Solutions Pvt Ltd</h2>
              <p style="margin:5px 0 0;">New Lead Notification</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:25px; color:#333;">
              
              <h3 style="margin-top:0;">📩 New Inquiry Received</h3>
              <p style="margin-bottom:20px;">
                You’ve received a new lead from your website. Here are the details:
              </p>

              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
                <tr style="background:#f8f9fc;">
                  <td><strong>Name</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td>${email}</td>
                </tr>
                <tr style="background:#f8f9fc;">
                  <td><strong>Phone</strong></td>
                  <td>${phone || 'N/A'}</td>
                </tr>
                <tr>
                  <td><strong>Company</strong></td>
                  <td>${company || 'N/A'}</td>
                </tr>
                <tr style="background:#f8f9fc;">
                  <td><strong>Service</strong></td>
                  <td>${service || 'N/A'}</td>
                </tr>
              </table>

              <h4 style="margin-top:25px;">💬 Message</h4>
              <div style="background:#f8f9fc; padding:15px; border-radius:6px;">
                ${message.replace(/\\n/g, '<br>')}
              </div>

              <!-- CTA -->
              <div style="margin-top:25px; text-align:center;">
                <a href="mailto:${email}" 
                   style="background:#0b5cff; color:#ffffff; padding:12px 20px; text-decoration:none; border-radius:5px; display:inline-block;">
                   Reply to Lead
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f1f3f7; text-align:center; padding:15px; font-size:12px; color:#777;">
              © ${new Date().getFullYear()} Makrosys Solutions Pvt Ltd  
              <br/> Gurugram, India
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</div>
`
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
