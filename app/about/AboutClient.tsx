"use client";

import { useState, useRef, useEffect, type CSSProperties } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { FadeUp } from "@/components/about/FadeUp";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import TriibeGlobeWrapper from "@/components/TriibeGlobeWrapper";
import MemberModal, { type ModalMember } from "@/components/about/MemberModal";
import {
  csuite,
  associateBoard,
  legacyBoard,
  locations,
  ourTeam,
  /* honoraryMembers, */
} from "@/lib/about-data";
import TableOfContents from "@/components/about/TableOfContents";
import PersonCard from "@/components/about/PersonCard";
import LegacyMemberItem from "@/components/about/LegacyMemberItem";
import LocationCard from "@/components/about/LocationCard";
import DepartmentRow from "@/components/about/DepartmentRow";
import HonoraryItem from "@/components/about/HonoraryItem";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/thetriibe/",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@TRIIBEorg",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/triibe__talk",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 50 50">
        <rect width="50" height="50" rx="10" fill="currentColor" />
        <circle
          cx="25"
          cy="25"
          r="10"
          fill="none"
          stroke="white"
          strokeWidth="6"
        />
        <circle cx="40" cy="13" r="3" fill="white" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@triibetalk",
    svg: (
      <svg className="w-11 h-11" viewBox="0 0 50 50">
        <rect width="50" height="50" rx="10" fill="currentColor" />
        <g transform="translate(5,5) scale(1.8)">
          <path
            fill="white"
            d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/episode/2lROMoLsvu0rAhZvCMZsOn?si=78HhPPgbQjubWW7rDOrqOg",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Subscribe",
    url: "#",
    svg: (
      <svg className="w-15 h-15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    isSubscribe: true,
  },
];

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-[#002c19]">{title}</h2>
      {description && (
        <p className="text-[#002c19]/80 text-sm mt-2 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  const { count: count0, start: start0 } = useCountUp(100);
  const { count: count1, start: start1 } = useCountUp(653);
  const { count: count2, start: start2 } = useCountUp(23);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  // Central modal state
  const [selectedMember, setSelectedMember] = useState<ModalMember | null>(
    null,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          start0();
          setTimeout(() => start1(), 100);
          setTimeout(() => start2(), 200);
        }
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [animated, start0, start1, start2]);

  return (
    <main className="bg-white min-h-screen">
      <Header />

      <MemberModal
        member={selectedMember}
        isOpen={Boolean(selectedMember)}
        onClose={() => setSelectedMember(null)}
      />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp delay={0}>
            <h1
              className="font-extrabold text-[#002c19]"
              style={{
                fontSize: 32,
                lineHeight: 1.25,
                letterSpacing: "-0.5px",
                marginBottom: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: 700,
                  fontSize: 44,
                  color: "#002c19",
                }}
              >
                Everyone you see below is building
              </span>
              <img
                src="/images/TRIIBELOGOS/TRIIBE NAME.png"
                alt="TRIIBE"
                style={{
                  height: 48,
                  width: "auto",
                  display: "block",
                  marginTop: 36,
                  filter: "none",
                }}
              />
            </h1>
          </FadeUp>

          <FadeUp delay={150}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: 6,
                height: 340,
              }}
            >
              <div
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src="/images/about/about-photo-1.jpeg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                  alt="TRIIBE team"
                />
              </div>
              <div
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  gridColumn: 2,
                  gridRow: "span 2",
                }}
              >
                <img
                  src="/images/about/TRIIBE T.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                  alt="TRIIBE team"
                />
              </div>
              <div
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src="/images/about/about-photo-2.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                  alt="TRIIBE team"
                />
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={250}>
          <div
            ref={statsRef}
            className="flex justify-around"
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              marginTop: "2rem",
              borderTop: "0.5px solid #e8e8e8",
            }}
          >
            <div className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>
                {count0}
              </p>
              <p style={{ fontSize: 11, color: "#002c19cc" }}>
                Fellows supported
              </p>
            </div>
            <div className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>
                {count1}
              </p>
              <p style={{ fontSize: 11, color: "#002c19cc" }}>
                Years of non-profit leadership
              </p>
            </div>
            <div className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>
                {count2}
                <span
                  style={{
                    opacity: count2 === 23 ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  +
                </span>
              </p>
              <p style={{ fontSize: 11, color: "#002c19cc" }}>
                Countries covered
              </p>
            </div>
          </div>
        </FadeUp>

        <section className="pt-12 pb-8 md:px-12 lg:px-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mx-auto">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target={social.isSubscribe ? undefined : "_blank"}
                  rel={social.isSubscribe ? undefined : "noopener noreferrer"}
                  onClick={
                    social.isSubscribe
                      ? (e) => {
                          e.preventDefault();
                          setShowNewsletter(true);
                        }
                      : undefined
                  }
                  className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
                >
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow text-black group-hover:text-gray-600">
                    {social.svg}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <FadeUp delay={0}>
        <TableOfContents />
      </FadeUp>

      <div className="max-w-6xl mx-auto px-6">
        <section id="csuite" className="py-16 scroll-mt-28">
          <FadeUp delay={0}>
            <SectionHeader title="C-Suite & Board" />
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {csuite.map((person, i) => (
              <FadeUp key={person.name} delay={i * 100}>
                <div
                  onClick={() => setSelectedMember(person)}
                  className="cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedMember(person);
                    }
                  }}
                >
                  <PersonCard person={person} photoSize={120} />
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        <section
          id="associate"
          className="py-16 border-t border-gray-100 scroll-mt-28 px-4"
        >
          <FadeUp delay={0}>
            <SectionHeader
              title="Associate Board"
              description="Associate Board Members serve as a pipeline to the Board of Directors, contribute to the Corporation's standing committees, and provide perspective and recommendations on the direction of the Corporation."
            />
          </FadeUp>

          <FadeUp delay={100}>
            {/* 2 columns on mobile/tablet, 4 columns on desktop (lg:grid-cols-4) with wider max-width */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {associateBoard[0] && (
                <div className="col-span-2 lg:col-span-4 flex justify-center mb-1 sm:mb-2">
                  <div
                    className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-xs lg:w-1/4 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                    onClick={() => setSelectedMember(associateBoard[0])}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedMember(associateBoard[0]);
                      }
                    }}
                  >
                    <PersonCard person={associateBoard[0]} photoSize={80} />
                  </div>
                </div>
              )}

              {associateBoard.slice(1).map((person) => (
                <div
                  key={person.name}
                  className="w-full cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                  onClick={() => setSelectedMember(person)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedMember(person);
                    }
                  }}
                >
                  <PersonCard person={person} photoSize={80} />
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        <section
          id="legacy"
          className="py-16 border-t border-gray-100 scroll-mt-28 px-4"
        >
          <FadeUp delay={0}>
            <SectionHeader
              title="Legacy Board"
              description="Legacy Board members serve as ambassadors, connectors, and advisors, providing institutional credibility, senior-level counsel, and access to networks that advance its mission."
            />
          </FadeUp>

          <FadeUp delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="col-span-2 md:col-span-3 lg:col-span-4 flex justify-center mb-2 lg:mb-4">
                <div
                  className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-xs lg:w-1/4 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                  onClick={() => setSelectedMember(legacyBoard[0])}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedMember(legacyBoard[0]);
                    }
                  }}
                >
                  <LegacyMemberItem person={legacyBoard[0]} />
                </div>
              </div>

              {legacyBoard.slice(1).map((person) => (
                <div
                  key={person.name}
                  className="w-full cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                  onClick={() => setSelectedMember(person)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedMember(person);
                    }
                  }}
                >
                  <LegacyMemberItem person={person} />
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        <section
          id="locations"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <FadeUp delay={0}>
            <TriibeGlobeWrapper />
          </FadeUp>
        </section>

        <section className="pt-2 pb-12 px-4 md:px-25 lg:px-0">
          <div className="max-w-200 mx-auto">
            <div className="max-w-7xl mx-auto transition-all duration-300 hover:scale-105">
              <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-2xl md:text-2xl font-medium text-[#002c19]">
                  Start your own branch
                </p>

                <Link
                  href="/branch"
                  className="inline-flex items-center justify-center bg-[#002c19] text-white hover:bg-[#1C5945] px-10 rounded-xl min-w-[220px] h-[54px] font-semibold text-base transition-all duration-300 whitespace-nowrap"
                >
                  Branch guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="team"
          className="py-16 border-t border-gray-100 scroll-mt-28 px-4"
        >
          <FadeUp delay={0}>
            <SectionHeader title="Our Team" description="" />
          </FadeUp>

          <FadeUp delay={100}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {ourTeam.map((person) => (
                <div
                  key={person.name}
                  className="w-full cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                  onClick={() => setSelectedMember(person)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedMember(person);
                    }
                  }}
                >
                  <LegacyMemberItem person={person} />
                </div>
              ))}
            </div>
          </FadeUp>
        </section>
      </div>

      <Footer />

      {showNewsletter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-10 max-w-md w-full relative">
            <button
              onClick={() => setShowNewsletter(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center mb-8">
              <Image
                src="/images/media/TriibeHero.svg"
                alt="TRIIBE"
                width={64}
                height={64}
                className="h-16 w-auto mx-auto mb-6"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-[#002c19] mb-4">
                Subscribe to the TRIIBUNE!
              </h3>
              <p className="text-base text-[#002c19]/80">
                Monthly updates on our impact, new projects, and ways to get
                involved!
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowNewsletter(false);
              }}
              className="space-y-4"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-base"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 text-base font-medium text-white bg-[#004d40] hover:bg-[#00352a] transition-colors rounded-lg"
              >
                Subscribe!
              </button>
              <button
                type="button"
                onClick={() => setShowNewsletter(false)}
                className="w-full text-base text-[#002c19]/80 hover:text-[#002c19]/80 transition-colors"
              >
                No, thank you
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
