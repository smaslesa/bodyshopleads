import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, firstName, lastName, shop, email, phone, message } = formData;
    
    // Handle both old format (name) and new format (firstName + lastName)
    const fullName = name || (firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName);

    // Validate required fields
    if (!fullName || !email || !shop) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and shop name are required' },
        { status: 400 }
      );
    }

    // Send notification email to you
    const notificationEmail = await resend.emails.send({
      from: 'hello@bodyshopleads.com',
      to: ['smaslesa@gmail.com'], // Your actual email
      subject: `🚗 New Lead: ${shop} - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">🚗 New Body Shop Lead!</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Details:</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Shop Name:</strong> ${shop}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>

          ${message ? `
            <div style="background: #fff; padding: 20px; border-left: 4px solid #ea580c; margin: 20px 0;">
              <h4 style="margin-top: 0; color: #374151;">Message:</h4>
              <p style="line-height: 1.6;">${message}</p>
            </div>
          ` : ''}

          <div style="background: #1e3a8a; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <h3 style="margin: 0;">📞 Call them within 24 hours!</h3>
            <p style="margin: 10px 0 0 0;">Hot leads convert best with quick follow-up.</p>
          </div>
        </div>
      `,
    });

    // Send welcome email to the lead
    const welcomeEmail = await resend.emails.send({
      from: 'hello@bodyshopleads.com',
      to: [email],
      subject: `Thanks ${fullName}! We'll call you within 24 hours`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #1e3a8a 0%, #374151 100%); color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">🚗 Body Shop Leads</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Premium Website Solutions for Auto Body Shops</p>
          </div>
          
          <div style="padding: 30px; background: white; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #1e3a8a; margin-top: 0;">Hi ${fullName}! 👋</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Thanks for your interest in getting <strong>${shop}</strong> a professional website that brings in more customers!
            </p>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #0c4a6e;">⏰ What happens next:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #374151;">
                <li><strong>We'll call you within 24 hours</strong> to discuss your needs</li>
                <li>Show you exactly how our websites get body shops more customers</li>
                <li>Give you a custom quote for ${shop}</li>
                <li>Answer any questions you have</li>
              </ul>
            </div>

            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <p style="margin: 0; color: #92400e;">
                <strong>💡 Quick Tip:</strong> Body shops with professional websites get 3x more calls than those without. 
                Your competitors are already online - don't let them steal your customers!
              </p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #6b7280; font-size: 14px;">
                Questions? Reply to this email or call us at <strong>(702) 518-7072</strong>
              </p>
            </div>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 12px;">
              <p>Body Shop Leads - Premium Website Solutions</p>
              <p>Helping auto body shops grow their business online since 2024</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks! We'll call you within 24 hours",
      notificationId: notificationEmail.data?.id,
      welcomeId: welcomeEmail.data?.id,
    });

  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
