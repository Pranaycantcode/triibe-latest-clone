"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Founder } from "@/lib/triibe100/founders";

export default function FounderCard({ founder }: { founder: Founder }) {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isPlaceholder = founder.name === "COMING_SOON_PLACEHOLDER";

  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined" && window.location.hash === `#founder-${founder.id}`) {
        setIsOpen(true);
        setTimeout(() => {
          ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 150);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [founder.id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const delay = (founder.id % 10) * 60;

  return (
    <>
      <style>{`
        .founder-modal {
          width: min(900px, 92vw);
        }

        .founder-modal-image {
          width: 48%;
          min-height: 440px;
        }

        .founder-modal-content {
          width: 52%;
          padding: 56px 52px;
        }

        .founder-modal-description {
          max-height: 250px;
        }

        @media (max-width: 768px) {
          .founder-modal {
            width: calc(100vw - 24px);
            height: calc(100vh - 24px);
            max-height: calc(100vh - 24px);
            display: grid !important;
            grid-template-columns: 1fr;
            grid-template-rows: 42% 58%;
          }

          .founder-modal-image {
            width: 100%;
            height: 100%;
            min-height: 0;
          }

          .founder-modal-content {
            width: 100%;
            height: 100%;
            min-height: 0;
            padding: 28px 24px 24px;
            justify-content: flex-start !important;
            overflow-y: auto;
            box-sizing: border-box;
          }

          .founder-modal-content h2 {
            font-size: 28px !important;
          }

          .founder-modal-content > p {
            font-size: 16px !important;
          }

          .founder-modal-description {
            max-height: none !important;
            overflow: visible !important;
            padding-right: 0 !important;
          }

          .founder-modal-description p {
            font-size: 15px !important;
          }
        }

        @media (max-width: 480px) {
          .founder-modal {
            width: calc(100vw - 16px);
            height: calc(100vh - 16px);
            max-height: calc(100vh - 16px);
            grid-template-rows: 36% 64%;
            border-radius: 14px !important;
          }

          .founder-modal-content {
            padding: 24px 20px 20px;
          }

          .founder-modal-content h2 {
            font-size: 25px !important;
          }

          .founder-modal-content > p {
            font-size: 15px !important;
          }

          .founder-modal-content > div:first-of-type {
            margin: 20px 0 !important;
          }

          .founder-modal-description p {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
        }

        @media (min-width: 769px) and (max-height: 700px) {
          .founder-modal {
            max-height: calc(100vh - 32px);
          }

          .founder-modal-image {
            min-height: 0;
            height: calc(100vh - 32px);
            max-height: calc(100vh - 32px);
          }

          .founder-modal-content {
            max-height: calc(100vh - 32px);
            overflow-y: auto;
            box-sizing: border-box;
          }
        }

        .founder-modal-content::-webkit-scrollbar {
          width: 5px;
        }

        .founder-modal-content::-webkit-scrollbar-track {
          background: transparent;
        }

        .founder-modal-content::-webkit-scrollbar-thumb {
          background: rgba(0, 44, 25, 0.2);
          border-radius: 10px;
        }

        .founder-modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 44, 25, 0.35);
        }

        .founder-modal-description::-webkit-scrollbar {
          width: 5px;
        }

        .founder-modal-description::-webkit-scrollbar-track {
          background: transparent;
        }

        .founder-modal-description::-webkit-scrollbar-thumb {
          background: rgba(0, 44, 25, 0.2);
          border-radius: 10px;
        }

        .founder-modal-description::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 44, 25, 0.35);
        }
      `}</style>

      <div
        id={`founder-${founder.id}`}
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: `opacity 400ms cubic-bezier(0.4,0,0.2,1) ${delay}ms,
            transform 400ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
          paddingBottom: "24px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "1/1",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "10px",
            position: "relative",
            overflow: "hidden",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            transition: "transform 200ms ease",
            opacity: isPlaceholder ? 0.8 : 1,
            display: isPlaceholder ? "flex" : "block",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isPlaceholder ? (
            <span
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Coming soon
            </span>
          ) : founder.image ? (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={`View ${founder.name}`}
              style={{
                width: "100%",
                height: "100%",
                padding: 0,
                border: "none",
                background: "none",
                cursor: "pointer",
                display: "block",
              }}
            >
              <img
                src={founder.image}
                alt={founder.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </button>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              style={{
                width: "45%",
                height: "45%",
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M2 22c0-5.5 4.5-9 10-9s10 3.5 10 9" />
            </svg>
          )}
        </div>

        {!isPlaceholder && (
          <>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#ffffff",
                textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                textAlign: "center",
                marginTop: "10px",
                lineHeight: 1.3,
              }}
            >
              {founder.name}
            </p>

            <p
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.75)",
                textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                textAlign: "center",
                marginTop: "3px",
              }}
            >
              {founder.org}
            </p>

            {founder.bio && (
              <p
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.65)",
                  textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                  lineHeight: 1.65,
                  textAlign: "center",
                  marginTop: "8px",
                  marginBottom: "32px",
                }}
              >
                {founder.bio}
              </p>
            )}
          </>
        )}
      </div>

      {isOpen &&
        !isPlaceholder &&
        createPortal(
          <div
            onMouseDown={() => {
              setIsOpen(false);
              if (window.location.hash.startsWith("#founder-")) {
                window.history.replaceState(null, "", window.location.pathname);
              }
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999999,
              background: "rgba(0, 0, 0, 0.72)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
          >
            <div
              className="founder-modal"
              onMouseDown={(event) => event.stopPropagation()}
              style={{
                position: "relative",
                background: "#f4f0e8",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                boxShadow: "0 25px 80px rgba(0,0,0,0.45)",
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  if (window.location.hash.startsWith("#founder-")) {
                    window.history.replaceState(null, "", window.location.pathname);
                  }
                }}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "16px",
                  zIndex: 2,
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  border: "none",
                  background: "rgba(0,0,0,0.08)",
                  color: "#002C19",
                  fontSize: "22px",
                  lineHeight: 1,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ×
              </button>

              <div
                className="founder-modal-image"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div
                className="founder-modal-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxSizing: "border-box",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    color: "#002C19",
                    fontSize: "32px",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {founder.name}
                </h2>

                <p
                  style={{
                    margin: "10px 0 0",
                    color: "rgba(0,44,25,0.65)",
                    fontSize: "17px",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {founder.bio}
                </p>

                <div
                  style={{
                    width: "45px",
                    height: "2px",
                    background: "#002C19",
                    opacity: 0.25,
                    margin: "26px 0",
                    flexShrink: 0,
                  }}
                />

                {founder.description && (
                  <div
                    className="founder-modal-description"
                    style={{
                      maxHeight: "250px",
                      overflowY: "auto",
                      paddingRight: "10px",
                      scrollbarWidth: "thin",
                      scrollbarColor:
                        "rgba(0,44,25,0.25) transparent",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "rgba(0,44,25,0.8)",
                        fontSize: "15px",
                        lineHeight: 1.65,
                        maxWidth: "450px",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {founder.description}
                    </p>
                  </div>
                )}

                {(founder.linkedin ||
                  founder.website ||
                  founder.instagram) && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginTop: "30px",
                      flexShrink: 0,
                    }}
                  >
                    {founder.linkedin && (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on LinkedIn`}
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                          boxShadow:
                            "0 4px 12px rgba(0,0,0,0.08)",
                          transition:
                            "transform 200ms ease, box-shadow 200ms ease",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#002C19"
                          aria-hidden="true"
                        >
                          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.14 3 3.25 3.9 3.25 5s.89 2 2 2 2-.9 2-2-.89-2-2-2ZM20.75 13.4c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.67V20h3.38v-6.39c0-1.68.32-3.31 2.4-3.31 2.05 0 2.08 1.93 2.08 3.42V20h3.38l-.16-6.6Z" />
                        </svg>
                      </a>
                    )}

                    {founder.instagram && (
                      <a
                        href={founder.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on Instagram`}
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                          boxShadow:
                            "0 4px 12px rgba(0,0,0,0.08)",
                          transition:
                            "transform 200ms ease, box-shadow 200ms ease",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 50 50"
                          aria-hidden="true"
                        >
                          <rect
                            width="50"
                            height="50"
                            rx="10"
                            fill="#002C19"
                          />
                          <circle
                            cx="25"
                            cy="25"
                            r="10"
                            fill="none"
                            stroke="white"
                            strokeWidth="6"
                          />
                          <circle
                            cx="40"
                            cy="13"
                            r="3"
                            fill="white"
                          />
                        </svg>
                      </a>
                    )}

                    {founder.website && (
                      <a
                        href={founder.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name}'s website`}
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                          boxShadow:
                            "0 4px 12px rgba(0,0,0,0.08)",
                          transition:
                            "transform 200ms ease, box-shadow 200ms ease",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#002C19"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <line
                            x1="3"
                            y1="12"
                            x2="21"
                            y2="12"
                          />
                          <path d="M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-6.6-3.3-9S9.8 5.4 12 3Z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}