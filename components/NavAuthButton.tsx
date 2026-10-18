"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavAuthButtonProps {
  onItemClick?: () => void;
}

export function NavAuthButton({ onItemClick }: NavAuthButtonProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted) setIsAuthenticated(Boolean(data?.authenticated));
        } else {
          if (isMounted) setIsAuthenticated(false);
        }
      } catch {
        if (isMounted) setIsAuthenticated(false);
      }
    }

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [pathname]);

  if (isAuthenticated === null) {
    return (
      <div className="h-9 w-20 rounded border border-white/20 animate-pulse bg-white/5" />
    );
  }

  if (isAuthenticated) {
    if (pathname.startsWith("/mytriibe")) {
      return null;
    }

    return (
      <Link
        href="/mytriibe"
        onClick={onItemClick}
        className="h-9 px-5 py-2 border border-white/40 font-normal text-white text-sm text-center rounded hover:bg-white/10 transition-colors inline-flex items-center cursor-pointer"
      >
        My TRIIBE
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      onClick={onItemClick}
      className="h-9 px-5 py-2 border border-white/40 font-normal text-white text-sm text-center rounded hover:bg-white/10 transition-colors inline-flex items-center cursor-pointer"
    >
      Sign In
    </Link>
  );
}
