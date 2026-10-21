"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export interface ModalMember {
  name: string;
  role?: string;
  title?: string;
  image?: string;
  imagePath?: string;
  bio?: string;
  description?: string;
  linkedin?: string;
  linkedIn?: string;
}

interface MemberModalProps {
  member: ModalMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MemberModal({ member, isOpen, onClose }: MemberModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  const imageSrc = member.image || member.imagePath;
  const subtitle = member.role || member.title;
  const bioText = member.description || member.bio;
  const linkedinUrl = member.linkedin || member.linkedIn;

  return createPortal(
    <>
      <style>{`
        .member-modal {
          width: min(900px, 92vw);
        }

        .member-modal-image {
          width: 48%;
          min-height: 440px;
        }

        .member-modal-content {
          width: 52%;
          padding: 56px 52px;
        }

        .member-modal-description {
          max-height: 250px;
        }

        @media (max-width: 768px) {
          .member-modal {
            width: calc(100vw - 24px);
            height: calc(100vh - 24px);
            max-height: calc(100vh - 24px);
            display: grid !important;
            grid-template-columns: 1fr;
            grid-template-rows: 42% 58%;
          }

          .member-modal-image {
            width: 100%;
            height: 100%;
            min-height: 0;
          }

          .member-modal-content {
            width: 100%;
            height: 100%;
            min-height: 0;
            padding: 28px 24px 24px;
            justify-content: flex-start !important;
            overflow-y: auto;
            box-sizing: border-box;
          }

          .member-modal-content h2 {
            font-size: 28px !important;
          }

          .member-modal-content > p {
            font-size: 16px !important;
          }

          .member-modal-description {
            max-height: none !important;
            overflow: visible !important;
            padding-right: 0 !important;
          }

          .member-modal-description p {
            font-size: 15px !important;
          }
        }

        @media (max-width: 480px) {
          .member-modal {
            width: calc(100vw - 16px);
            height: calc(100vh - 16px);
            max-height: calc(100vh - 16px);
            grid-template-rows: 36% 64%;
            border-radius: 14px !important;
          }

          .member-modal-content {
            padding: 24px 20px 20px;
          }

          .member-modal-content h2 {
            font-size: 25px !important;
          }

          .member-modal-content > p {
            font-size: 15px !important;
          }

          .member-modal-content > div:first-of-type {
            margin: 20px 0 !important;
          }

          .member-modal-description p {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
        }

        @media (min-width: 769px) and (max-height: 700px) {
          .member-modal {
            max-height: calc(100vh - 32px);
          }

          .member-modal-image {
            min-height: 0;
            height: calc(100vh - 32px);
            max-height: calc(100vh - 32px);
          }

          .member-modal-content {
            max-height: calc(100vh - 32px);
            overflow-y: auto;
            box-sizing: border-box;
          }
        }

        .member-modal-content::-webkit-scrollbar,
        .member-modal-description::-webkit-scrollbar {
          width: 5px;
        }

        .member-modal-content::-webkit-scrollbar-track,
        .member-modal-description::-webkit-scrollbar-track {
          background: transparent;
        }

        .member-modal-content::-webkit-scrollbar-thumb,
        .member-modal-description::-webkit-scrollbar-thumb {
          background: rgba(0, 44, 25, 0.2);
          border-radius: 10px;
        }

        .member-modal-content::-webkit-scrollbar-thumb:hover,
        .member-modal-description::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 44, 25, 0.35);
        }
      `}</style>

      <div
        onMouseDown={onClose}
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
          className="member-modal"
          onMouseDown={(e) => e.stopPropagation()}
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
            onClick={onClose}
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
            className="member-modal-image"
            style={{
              position: "relative",
              overflow: "hidden",
              background: "rgba(0,44,25,0.05)",
            }}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#002C19"
                  strokeWidth="1"
                  style={{ width: "45%", height: "45%", opacity: 0.3 }}
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M2 22c0-5.5 4.5-9 10-9s10 3.5 10 9" />
                </svg>
              </div>
            )}
          </div>

          
          <div
            className="member-modal-content"
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
              {member.name}
            </h2>

            {subtitle && (
              <p
                style={{
                  margin: "10px 0 0",
                  color: "rgba(0,44,25,0.65)",
                  fontSize: "17px",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {subtitle}
              </p>
            )}

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

            {bioText && (
              <div
                className="member-modal-description"
                style={{
                  maxHeight: "250px",
                  overflowY: "auto",
                  paddingRight: "10px",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(0,44,25,0.25) transparent",
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
                  {bioText}
                </p>
              </div>
            )}

            
            {linkedinUrl && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "30px",
                  flexShrink: 0,
                }}
              >
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
              </div>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}