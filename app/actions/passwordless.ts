"use server";

import crypto from "crypto";
import prisma from "@/lib/prisma";
import { sendPasswordlessEmail } from "@/lib/email";
import { getBaseUrl } from "@/lib/url";
import { signSession, setSessionCookie } from "@/lib/session";
import { redirect } from "next/navigation";

export interface ActionState {
  error: string | null;
  success?: boolean;
  email?: string;
}

export async function sendLoginCodeAction(
  _prevState: ActionState | null,
  formData: FormData,
): Promise<ActionState> {
  const email = (formData.get("email") as string)?.trim().toLowerCase();

  if (!email || !email.includes("@")) {
    return { error: "Please enter a valid email address." };
  }

  try {
    const token = crypto.randomBytes(32).toString("hex");
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.verificationToken.deleteMany({
      where: { identifier: email },
    });

    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token,
        code,
        expires,
      },
    });

    const baseUrl = await getBaseUrl();
    const magicLink = `${baseUrl}/api/auth/verify?token=${token}&email=${encodeURIComponent(email)}`;

    const { error: resendError } = await sendPasswordlessEmail({
      email,
      magicLink,
      code,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return {
        error:
          "Failed to send verification email. Please verify your email configuration.",
      };
    }

    return { error: null, success: true, email };
  } catch (err: any) {
    console.error("Passwordless dispatch error:", err);
    return { error: "An unexpected error occurred. Please try again." };
  }
}

export async function verifyCodeAction(
  _prevState: ActionState | null,
  formData: FormData,
): Promise<ActionState> {
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const code = (formData.get("code") as string)?.trim();
  let shouldRedirect = false;

  const MAX_ATTEMPTS = 5;

  if (!email || !code || code.length !== 6) {
    return { error: "Please enter a valid 6-digit verification code.", email };
  }

  try {
    const record = await prisma.verificationToken.findFirst({
      where: {
        identifier: email,
        expires: {
          gt: new Date(),
        },
      },
    });

    if (!record) {
      return {
        error:
          "This code has expired or has already been used. Please request a new one.",
        email,
      };
    }

    if (record.attempts >= MAX_ATTEMPTS - 1 && record.code !== code) {
      await prisma.verificationToken.delete({
        where: { id: record.id },
      });

      return {
        error:
          "Too many incorrect attempts. For security, please request a new login code.",
        email,
      };
    }

    if (record.code !== code) {
      const updated = await prisma.verificationToken.update({
        where: { id: record.id },
        data: {
          attempts: {
            increment: 1,
          },
        },
      });

      const remaining = MAX_ATTEMPTS - updated.attempts;
      return {
        error: `Incorrect code. ${remaining} attempt${remaining === 1 ? "" : "s"} remaining.`,
        email,
      };
    }

    await prisma.verificationToken.delete({
      where: { id: record.id },
    });

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { email },
      });
    }

    const token = await signSession({
      userId: user.id,
      email: user.email,
      name: user.name,
    });

    await setSessionCookie(token);
    shouldRedirect = true;
  } catch (err: any) {
    console.error("Code verification error:", err);
    return { error: "Verification failed. Please try again.", email };
  }

  if (shouldRedirect) {
    redirect("/mytriibe");
  }

  return { error: null };
}
