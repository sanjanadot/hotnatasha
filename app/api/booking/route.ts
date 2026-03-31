import { NextRequest, NextResponse } from 'next/server';

interface BookingData {
  person_name: string;
  person_email: string;
  person_phone: string;
  escort_services: string;
  form_message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: BookingData = await request.json();

    // Validate required fields
    if (!data.person_name || !data.person_email || !data.person_phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send SMS notification
    // For now, we'll just log and return success

    console.log('New booking received:', data);

    // You can integrate with email services like:
    // - Nodemailer
    // - SendGrid
    // - AWS SES
    // - Resend

    // Example email integration (uncomment and configure):
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: 'sanjanadotsingh@gmail.com',
      subject: 'New Booking Request',
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${data.person_name}</p>
        <p><strong>Email:</strong> ${data.person_email}</p>
        <p><strong>Phone:</strong> ${data.person_phone}</p>
        <p><strong>Service:</strong> ${data.escort_services}</p>
        <p><strong>Message:</strong> ${data.form_message}</p>
      `,
    });
    */

    return NextResponse.json(
      { message: 'Booking submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to submit booking' },
      { status: 500 }
    );
  }
}
