import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { signSession, setSessionCookie } from "@/lib/session";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const email = searchParams.get("email")?.toLowerCase();

  if (!token || !email) {
    return NextResponse.redirect(
      new URL("/login?error=invalid_link", request.url),
    );
  }

  try {
    const record = await prisma.verificationToken.findFirst({
      where: {
        identifier: email,
        token,
        expires: {
          gt: new Date(),
        },
      },
    });

    if (!record) {
      return NextResponse.redirect(
        new URL("/login?error=expired_link", request.url),
      );
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

    const sessionToken = await signSession({
      userId: user.id,
      email: user.email,
      name: user.name,
    });

    await setSessionCookie(sessionToken);

    return NextResponse.redirect(new URL("/mytriibe", request.url));
  } catch (error) {
    console.error("Magic link verification error:", error);
    return NextResponse.redirect(
      new URL("/login?error=server_error", request.url),
    );
  }
}
