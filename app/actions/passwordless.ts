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

  if (!email || !code || code.length !== 6) {
    return { error: "Please enter a valid 6-digit verification code.", email };
  }

  try {
    const record = await prisma.verificationToken.findFirst({
      where: {
        identifier: email,
        code,
        expires: {
          gt: new Date(),
        },
      },
    });

    if (!record) {
      return {
        error: "Incorrect code. Please check your email and try again.",
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
