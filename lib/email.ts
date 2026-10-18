import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

interface SendAuthEmailOptions {
  email: string;
  magicLink: string;
  code: string;
}

export async function sendPasswordlessEmail({
  email,
  magicLink,
  code,
}: SendAuthEmailOptions) {
  const fromEmail = process.env.EMAIL_FROM || "TRIIBE <onboarding@resend.dev>";

  return await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: `Your TRIIBE verification code is ${code}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f7f7; margin: 0; padding: 40px 16px;">
          <div style="max-width: 480px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e5e5; padding: 40px 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            
            <div style="margin-bottom: 24px; text-align: left;">
              <span style="font-size: 20px; font-weight: bold; color: #002c19; letter-spacing: 1px;">TRIIBE</span>
            </div>

            <h1 style="font-size: 20px; font-weight: 600; color: #111111; margin: 0 0 12px 0;">Sign in to TRIIBE</h1>
            <p style="font-size: 14px; color: #555555; line-height: 1.5; margin: 0 0 28px 0;">
              Click the button below to sign in directly, or enter the temporary 6-digit code on the sign-in screen.
            </p>

            
            <div style="text-align: center; margin: 28px 0;">
              <a href="${magicLink}" target="_blank" style="display: inline-block; background-color: #002c19; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 32px; border-radius: 6px;">
                Sign In to TRIIBE
              </a>
            </div>

            <div style="text-align: center; margin: 24px 0 12px 0;">
              <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #888888; font-weight: 600;">Or enter this code</span>
            </div>

            
            <div style="background-color: #f2f4f2; border-radius: 8px; padding: 16px; text-align: center; letter-spacing: 6px; font-size: 28px; font-weight: 700; color: #002c19; font-family: monospace;">
              ${code}
            </div>

            <p style="font-size: 12px; color: #888888; margin-top: 28px; line-height: 1.4;">
              This link and code will expire in 15 minutes. If you did not request this login, you can safely ignore this email.
            </p>
          </div>
        </body>
      </html>
    `,
  });
}
