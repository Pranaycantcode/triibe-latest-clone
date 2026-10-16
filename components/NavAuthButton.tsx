"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { logoutAction } from "@/app/actions/auth";

interface NavAuthButtonProps {
  onItemClick?: () => void;
  className?: string;
}

export function NavAuthButton({
  onItemClick,
  className = "",
}: NavAuthButtonProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if the triibe_session cookie exists
    const hasSession = document.cookie
      .split("; ")
      .some((item) => item.startsWith("triibe_session="));
    setIsAuthenticated(hasSession);
  }, []);

  if (isAuthenticated === null) {
    return <div className={`h-9 w-20 ${className}`} />;
  }

  if (!isAuthenticated) {
    return (
      <Link
        href="/login"
        onClick={onItemClick}
        className={`h-9 px-5 py-2 border border-white/40 text-white hover:border-white hover:bg-white/10 text-sm font-medium rounded transition-colors inline-flex items-center justify-center ${className}`}
      >
        Sign In
      </Link>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Link
        href="/mytriibe"
        onClick={onItemClick}
        className="h-9 px-5 py-2 bg-[#ffffff] font-medium text-black text-sm rounded hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
      >
        myTRIIBE
      </Link>
      <form action={logoutAction} className="inline-block">
        <button
          type="submit"
          onClick={onItemClick}
          className="text-xs text-white/70 hover:text-white transition-colors py-1 cursor-pointer"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}
