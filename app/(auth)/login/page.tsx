"use client";

import { Suspense, useActionState, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  sendLoginCodeAction,
  verifyCodeAction,
  ActionState,
} from "@/app/actions/passwordless";

function LoginForm() {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error");

  const [step, setStep] = useState<"ENTER_EMAIL" | "ENTER_CODE">("ENTER_EMAIL");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const [sendState, sendAction, isSending] = useActionState<
    ActionState,
    FormData
  >(
    async (prev, formData) => {
      const res = await sendLoginCodeAction(prev, formData);
      if (res.success && res.email) {
        setSubmittedEmail(res.email);
        setStep("ENTER_CODE");
      }
      return res;
    },
    { error: null },
  );

  const [verifyState, verifyAction, isVerifying] = useActionState<
    ActionState,
    FormData
  >(verifyCodeAction, { error: null });

  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      {urlError && step === "ENTER_EMAIL" && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-700">
          {urlError === "expired_link"
            ? "That sign-in link has expired or has already been used. Please request a new one."
            : "Invalid sign-in link. Please enter your email again."}
        </div>
      )}

      {step === "ENTER_EMAIL" && (
        <div>
          <form action={sendAction} className="space-y-4">
            {sendState.error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-700">
                {sendState.error}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#002c19] mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="name@example.com"
                className="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full h-11 px-6 rounded-lg bg-[#002c19] hover:bg-[#1C5945] text-white text-sm font-semibold transition-colors disabled:opacity-60 cursor-pointer flex items-center justify-center"
            >
              {isSending ? (
                <span className="inline-block animate-pulse">
                  Sending link...
                </span>
              ) : (
                "Continue with Email"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            We&apos;ll email you a one-time sign-in link and code.
          </p>
        </div>
      )}

      {step === "ENTER_CODE" && (
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#002c19]/10 text-[#002c19] mb-3">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-[#002c19]">
              Check your inbox
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              We sent a sign-in note and code to <br />
              <span className="font-semibold text-[#002c19]">
                {submittedEmail}
              </span>
            </p>
          </div>

          <form action={verifyAction} className="space-y-4">
            <input type="hidden" name="email" value={submittedEmail} />

            {verifyState.error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-700 text-center">
                {verifyState.error}
              </div>
            )}

            <div>
              <label
                htmlFor="code"
                className="block text-xs font-semibold uppercase tracking-wider text-center text-gray-500 mb-2"
              >
                Enter 6-digit code
              </label>
              <input
                id="code"
                name="code"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                required
                placeholder="123456"
                autoFocus
                className="w-full h-12 text-center text-2xl tracking-[0.5em] font-mono rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full h-11 px-6 rounded-lg bg-[#002c19] hover:bg-[#1C5945] text-white text-sm font-semibold transition-colors disabled:opacity-60 cursor-pointer flex items-center justify-center"
            >
              {isVerifying ? (
                <span className="inline-block animate-pulse">Verifying...</span>
              ) : (
                "Verify & Sign In"
              )}
            </button>
          </form>

          <div className="pt-2 text-center flex flex-col items-center gap-2">
            <p className="text-xs text-gray-500">
              Didn&apos;t receive the email?{" "}
              <button
                type="button"
                onClick={() => setStep("ENTER_EMAIL")}
                className="font-medium text-[#002c19] hover:underline cursor-pointer"
              >
                Resend or change email
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col justify-center items-center px-4 py-12">
      <div className="mb-8 text-center flex flex-col items-center">
        <Link
          href="/"
          className="inline-block transition-transform hover:scale-105"
        >
          <Image
            src="/images/home/header1.png"
            alt="TRIIBE"
            width={64}
            height={64}
            priority
            className="w-12 h-auto mx-auto"
          />
        </Link>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#002c19]">
          Sign in to TRIIBE
        </h1>
        <p className="mt-1 text-sm text-[#002c19]/70">
          Access your member dashboard, grants, and calendar
        </p>
      </div>

      <Suspense
        fallback={
          <div className="w-full max-w-md h-64 bg-white border border-gray-200 rounded-2xl animate-pulse" />
        }
      >
        <LoginForm />
      </Suspense>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-xs text-gray-500 hover:text-[#002c19] transition-colors"
        >
          ← Back to TRIIBE Homepage
        </Link>
      </div>
    </div>
  );
}
