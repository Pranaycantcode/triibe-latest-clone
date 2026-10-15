'use server';

import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { signSession, setSessionCookie, clearSessionCookie } from '@/lib/session';
import { redirect } from 'next/navigation';

export interface AuthState {
  error: string | null;
}

export async function registerAction(
  _prevState: AuthState | null,
  formData: FormData
): Promise<AuthState> {
  const name = formData.get('name') as string;
  const email = (formData.get('email') as string)?.trim().toLowerCase();
  const password = formData.get('password') as string;

  if (!email || !password || password.length < 6) {
    return { error: 'Please provide a valid email and a password of at least 6 characters.' };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: 'An account with this email already exists.' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: name || null,
    },
  });

  const token = await signSession({
    userId: newUser.id,
    email: newUser.email,
    name: newUser.name,
  });

  await setSessionCookie(token);
  redirect('/mytriibe');
}

export async function loginAction(
  _prevState: AuthState | null,
  formData: FormData
): Promise<AuthState> {
  const email = (formData.get('email') as string)?.trim().toLowerCase();
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Please enter both email and password.' };
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: 'Invalid email or password.' };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return { error: 'Invalid email or password.' };
  }

  const token = await signSession({
    userId: user.id,
    email: user.email,
    name: user.name,
  });

  await setSessionCookie(token);
  redirect('/mytriibe');
}

export async function logoutAction() {
  await clearSessionCookie();
  redirect('/login');
}