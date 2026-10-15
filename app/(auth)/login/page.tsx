'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { loginAction, type AuthState } from '@/app/actions/auth';

const initialState: AuthState = { error: null };

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 border border-neutral-200 rounded-2xl bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Welcome to myTRIIBE</h1>
        <p className="text-sm text-neutral-500 mt-1">Sign in with your credentials.</p>

        {state?.error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
            {state.error}
          </div>
        )}

        <form action={formAction} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="alex@example.org"
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white font-medium rounded-lg text-sm transition"
          >
            {isPending ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-neutral-500 mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-semibold text-neutral-900 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}