"use client";

import { useState, useRef, useEffect, type CSSProperties } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { FadeUp } from "@/components/about/FadeUp";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import TriibeGlobeWrapper from "@/components/TriibeGlobeWrapper";
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

export const metadata = {
  title: "Nonprofit for Next-Gen Founders | TRIIBE",
  description:
    "Learn about TRIIBE, a nonprofit for next-gen founders supporting student changemakers with resources, community, and long-term impact.",
  alternates: {
    canonical: "https://www.triibe.org/about",
  },
};

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
        {/* Black rounded rectangle */}
        <rect width="50" height="50" rx="10" fill="currentColor" />
        {/* White circular ring - thicker */}
        <circle
          cx="25"
          cy="25"
          r="10"
          fill="none"
          stroke="white"
          strokeWidth="6"
        />
        {/* White dot - moved away */}
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
  // {
  //   name: "Apple",
  //   url: "https://podcasts.apple.com/us/podcast/triibe-talk/id1855739237",
  //   svg: (
  //     <svg
  //       width="50px"
  //       fill="currentColor"
  //       height="50px"
  //       viewBox="0 0 24 24"
  //       role="img"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 0 1-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 0 0 2.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178a2.17 2.17 0 0 1 1.04 1.259c.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z" />
  //     </svg>
  //   ),
  // },
  // {
  //   name: "Amazon",
  //   url: "https://music.amazon.com/podcasts/da3070b6-5ec9-4ed0-9d8d-67a43f7fbb79/triibe-talk",
  //   svg: (
  //     <svg
  //       fill="currentColor"
  //       width="50px"
  //       height="50px"
  //       viewBox="0 0 32 32"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <title />

  //       <g id="Amazon">
  //         <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30Zm-11-5.79a11.06,11.06,0,0,0,6.74-2.28.51.51,0,0,0,.23-.4.46.46,0,0,0-.51-.49l-.42.12a13.72,13.72,0,0,1-6,1.35,14.45,14.45,0,0,1-7.1-2.44l-.37-.14c-.26,0-.39.13-.4.4a.47.47,0,0,0,.17.34A11.5,11.5,0,0,0,15.47,24.21Zm-1.71-4.58a4.61,4.61,0,0,0,3.55-1.56,3.18,3.18,0,0,0,.58.83c.42.43.71.64.9.64a.73.73,0,0,0,.37-.16,8.39,8.39,0,0,0,.7-.6l.7-.62a.47.47,0,0,0,.23-.33.39.39,0,0,0-.1-.27.26.26,0,0,1-.09-.17,7.25,7.25,0,0,1-.47-.75,23.73,23.73,0,0,1-.22-4.75c0-2.92-1.45-4.38-4.37-4.38C13,7.65,11.5,8.74,11,10.8c0,.29.12.43.34.43l2,.27a1,1,0,0,0,.42-.43A1.67,1.67,0,0,1,15.4,9.76,1.28,1.28,0,0,1,16.84,11l0,1.2q-6.23,0-6.23,4.15a3.16,3.16,0,0,0,.92,2.47A3.21,3.21,0,0,0,13.76,19.63ZM15,17.54A1.35,1.35,0,0,1,13.73,16c0-1.42,1-2.13,3.16-2.13v.62a7.43,7.43,0,0,1,0,1.07,3.1,3.1,0,0,1-.42,1.13,1.64,1.64,0,0,1-1.12.82Zm7.92,5.26c.46,0,.84-.48,1.16-1.41a4.06,4.06,0,0,0,.25-1.32c0-.5-.44-.76-1.31-.76-1.43.11-2.17.42-2.23,1,0,.23.12.34.37.34l1.42-.16c.33,0,.5.08.5.16a2.64,2.64,0,0,1-.18.84c-.11.33-.2.57-.25.71a.94.94,0,0,0-.09.29A.32.32,0,0,0,22.93,22.8Z" />
  //       </g>
  //     </svg>
  //   ),
  // },
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

function PhotoSlot({
  src,
  avifSrc,
  gridStyle,
}: {
  src: string;
  avifSrc?: string;
  gridStyle?: CSSProperties;
}) {
  const [failed, setFailed] = useState(false);
  const base: CSSProperties = {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    ...gridStyle,
  };
  if (failed) return <div style={{ ...base, background: "#EAF3DE" }} />;
  if (avifSrc) {
    return (
      <picture style={gridStyle}>
        <source srcSet={avifSrc} type="image/avif" />
        <img
          src={src}
          alt=""
          onError={() => setFailed(true)}
          style={{ ...base, objectFit: "cover", display: "block" }}
        />
      </picture>
    );
  }
  return (
    <img
      src={src}
      alt=""
      onError={() => setFailed(true)}
      style={{ ...base, objectFit: "cover", display: "block" }}
    />
  );
}

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

const ctaCards = [
  {
    title: "Join a cohort",
    body: "Are you a nonprofit founder? Apply to become a TRIIBE Fellow.",
    buttonText: "Apply",
    href: "https://www.triibe.org/apply",
    external: true,
  },
  /* {
    title: "Get involved",
    body: "Partner with TRIIBE to empower next-gen founders.",
    buttonText: "Contact us",
    href: "mailto:partnerships@triibe.org",
    external: false,
  }, */
  {
    title: "Fund our work",
    body: "Your donation helps next-gen founders take root today to advance tomorrow.",
    buttonText: "Donate",
    href: "https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz",
    external: true,
  },
];

export default function AboutPage() {
  const { count: count0, start: start0 } = useCountUp(100);
  const { count: count1, start: start1 } = useCountUp(653);
  const { count: count2, start: start2 } = useCountUp(23);
  /* const { count: count3, start: start3 } = useCountUp(7); */
  const [showNewsletter, setShowNewsletter] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          start0();
          setTimeout(() => start1(), 100);
          setTimeout(() => start2(), 200);
          /* setTimeout(() => start3(), 300); */
        }
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animated]);

  return (
    <main className="bg-white min-h-screen">
      <Header />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
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

          {/* Right column, asymmetric photo mosaic */}
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

        {/* Stats bar */}
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
                    opacity: count2 === 90 ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  +
                </span>
              </p>
              <p style={{ fontSize: 11, color: "#002c19cc" }}>Countries covered</p>
            </div>
            {/* <div className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>
                {count3}
              </p>
              <p style={{ fontSize: 11, color: "#002c19cc" }}>
                Locations worldwide
              </p>
            </div> */}
          </div>
        </FadeUp>

        {/* Social Links */}
        <section className="pt-12 pb-8   md:px-12 lg:px-50 ">
          <div className="max-w-4xl mx-auto px-6">
            {/* <h3 className="text-2xl font-bold text-center text-[#002c19] mb-8">
              Connect with us
            </h3> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6  mx-auto">
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
                  {/* <span className="text-sm font-medium text-gray-700">
                                {social.name}
                              </span> */}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How TRIIBE works */}
        {/* <FadeUp delay={0}>
          <div
            style={{
              paddingTop: "3rem",
              paddingBottom: "3rem",
              borderTop: "0.5px solid #e8e8e8",
            }}
          >
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#111",
                marginBottom: "2rem",
                display: "block",
              }}
            >
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "2.5rem",
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    color: "#333",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  Our 3-year Fellowship ensures founders don't burn out while
                  transitioning from a "youth" nonprofit to an established one.
                </p>
                <a
                  href="https://www.triibe.org/fellowship"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#1A6B3C",
                    color: "white",
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "10px 20px",
                    borderRadius: 8,
                    border: "none",
                    display: "inline-block",
                    textDecoration: "none",
                    marginTop: "auto",
                  }}
                >
                  TRIIBE Fellowship
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    color: "#333",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  TRIIBE Talks highlight next-gen nonprofit founders alongside
                  peers over 30, because age doesn't determine the quality of a
                  voice.
                </p>
                <a
                  href="https://www.triibe.org/talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#1A6B3C",
                    color: "white",
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "10px 20px",
                    borderRadius: 8,
                    border: "none",
                    display: "inline-block",
                    textDecoration: "none",
                    marginTop: "auto",
                  }}
                >
                  TRIIBE Talks
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    color: "#333",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  The TRIIBE I00 is the definitive global list of nonprofit
                  founders under 30 to know.
                </p>
                <a
                  href="https://www.triibe.org/100"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#1A6B3C",
                    color: "white",
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "10px 20px",
                    borderRadius: 8,
                    border: "none",
                    display: "inline-block",
                    textDecoration: "none",
                    marginTop: "auto",
                  }}
                >
                  TRIIBE I00
                </a>
              </div>
            </div>
          </div>
        </FadeUp> */}
      </div>

      {/* ── Sticky Table of Contents ──────────────────────────────── */}
      <FadeUp delay={0}>
        <TableOfContents />
      </FadeUp>

      {/* ── Sections ─────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        {/* C-Suite & Board */}
        <section id="csuite" className="py-16 scroll-mt-28">
          <FadeUp delay={0}>
            <SectionHeader title="C-Suite & Board" />
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {csuite.map((person, i) => (
              <FadeUp key={person.name} delay={i * 100}>
                <PersonCard person={person} photoSize={120} />
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Associate Board */}
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
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {associateBoard[0] && (
                <div className="col-span-2 flex justify-center mb-1 sm:mb-2">
                  <div className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-xs lg:w-1/4">
                    <PersonCard person={associateBoard[0]} photoSize={80} />
                  </div>
                </div>
              )}

              {associateBoard.slice(1).map((person, i) => (
                <div key={person.name} className="w-full">
                  <PersonCard person={person} photoSize={80} />
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* Legacy Board */}
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
            {/* Combined Single Grid Container for all members */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              
              <div className="col-span-2 md:col-span-3 lg:col-span-4 flex justify-center mb-2 lg:mb-4">
                <div className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-xs lg:w-1/4">
                  <LegacyMemberItem person={legacyBoard[0]} />
                </div>
              </div>

              {/* The remaining board members automatically forming rows of 2 on mobile */}
              {legacyBoard.slice(1).map((person) => (
                <div key={person.name} className="w-full">
                  <LegacyMemberItem person={person} />
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* Locations */}
        <section
          id="locations"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <FadeUp delay={0}>
            {/* <SectionHeader
              title="Locations"
              description="TRIIBE, like our name, is decentralized by design. Each location is led by a managing director, with a team and advisory board. Advisory Board members serve as regional ambassadors, connectors, and advisors, providing institutional credibility, senior-level counsel, and access to local networks that advance its mission."
            /> */}

            <TriibeGlobeWrapper />

            <span
              style={{
                fontSize: 14,
                color: "#888",
                fontStyle: "italic",
                marginBottom: "2rem",
                display: "block",
              }}
            ></span>
          </FadeUp>
          {/* <div className="space-y-4">
            {locations.map((loc, i) => (
              <FadeUp key={loc.location} delay={i * 80}>
                <LocationCard entry={loc} />
              </FadeUp>
            ))}
          </div> */}
        </section>

        <section className="pt-2 pb-12 px-4 md:px-25 lg:px-0">
          <div className="max-w-300 mx-auto">
            <div className="max-w-7xl mx-auto transition-all duration-300 hover:scale-105">
              <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-2xl md:text-2xl font-medium text-[#002c19]">
                  Start your own branch
                </p>

                <Link
                  href="/branch"
                  className="inline-flex items-center justify-center bg-[#002c19] text-white hover:bg-[#1C5945] px-10 py-3 rounded-xl min-w-[220px] h-[44px] font-semibold text-base transition-all duration-300 whitespace-nowrap"
                >
                  Branch guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
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
                <div key={person.name} className="w-full">
                  <LegacyMemberItem person={person} />
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* 
        <section
          id="honorary"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <FadeUp delay={0}>
            <SectionHeader
              title="Honorary Members"
              description="Additional contributors who have shaped the TRIIBE community."
            />
          </FadeUp>
          <FadeUp delay={100}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-10">
              {honoraryMembers.map((member) => (
                <HonoraryItem key={member.name} member={member} />
              ))}
            </div>
          </FadeUp>
        </section> */}
      </div>

      {/* ── 3-CTA Section ────────────────────────────────────────── */}
      {/* <section
        style={{
          backgroundColor: "#0D2B1E",
          paddingTop: 80,
          paddingBottom: 80,
          width: "100%",
        }}
      >
         <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
            {ctaCards.map((card) => (
              <div
                key={card.title}
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: 14,
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 220,
                }}
              >
                <h3
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 22,
                    margin: 0,
                    marginBottom: 16,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="block w-full text-center bg-white text-[#0D2B1E] hover:bg-[#f0f0f0] transition-colors"
                  style={{
                    marginTop: "1.5rem",
                    padding: "14px 0",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {card.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />

      {/* Newsletter Popup */}
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
