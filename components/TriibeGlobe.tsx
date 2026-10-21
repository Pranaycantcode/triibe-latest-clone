"use client";

import { useEffect, useRef, useState } from "react";
import GlobeImport from "react-globe.gl";
import Link from "next/link";
import * as THREE from "three";

import PersonAvatar from "@/components/about/PersonAvatar";
import { LinkedInBadge } from "@/components/about/LinkedInBadge";
import MemberModal, { type ModalMember } from "@/components/about/MemberModal";
import { locations } from "@/lib/about-data";

const Globe = GlobeImport as any;

const GREEN_GLOW = "#00ff88";

type Branch = {
  id: string;
  label: string;
  flag: string;
  lat: number;
  lng: number;
  city: string;
  description: string;
  link: string;
  hasLink: boolean;
};

/*
 * Maps globe branch IDs to the corresponding entry
 * in lib/about-data.ts.
 *
 * This means the people data only exists in one place.
 */
const LOCATION_BY_BRANCH_ID: Record<string, string> = {
  newyork: "United States, New York",
  jamaica: "Jamaica",
  london: "United Kingdom, London",
  sierraleone: "Sierra Leone",
  ranchi: "India, Ranchi",
  singapore: "Singapore",
  zambia: "Zambia",
  nigeria: "Nigeria",
};

const BRANCHES: Branch[] = [
  {
    id: "newyork",
    label: "New York, USA",
    flag: "🇺🇸",
    lat: 40.7128,
    lng: -74.006,
    city: "New York, USA",
    description:
      "Helping next-gen nonprofit founders continue their work in New York.",
    link: "/about",
    hasLink: false,
  },

  {
    id: "jamaica",
    label: "Jamaica",
    flag: "🇯🇲",
    lat: 18.1096,
    lng: -77.2975,
    city: "Jamaica",
    description:
      "Helping next-gen nonprofit founders continue their work in Jamaica.",
    link: "/about",
    hasLink: false,
  },

  {
    id: "london",
    label: "London, UK",
    flag: "🇬🇧",
    lat: 51.5074,
    lng: -0.1278,
    city: "London, UK",
    description:
      "Helping next-gen nonprofit founders continue their work in the UK.",
    link: "/about",
    hasLink: false,
  },

  {
    id: "sierraleone",
    label: "Sierra Leone",
    flag: "🇸🇱",
    lat: 8.4606,
    lng: -11.7799,
    city: "Sierra Leone",
    description:
      "Helping next-gen nonprofit founders continue their work in Sierra Leone.",
    link: "/about",
    hasLink: false,
  },

  {
    id: "ranchi",
    label: "Ranchi, India",
    flag: "🇮🇳",
    lat: 23.3441,
    lng: 85.3096,
    city: "Ranchi, India",
    description:
      "Helping next-gen nonprofit founders continue their work in Ranchi.",
    link: "/about",
    hasLink: false,
  },

  {
    id: "singapore",
    label: "Singapore",
    flag: "🇸🇬",
    lat: 1.35,
    lng: 103.82,
    city: "Singapore",
    description:
      "Helping next-gen nonprofit founders continue their work in Singapore.",
    link: "/about",
    hasLink: false,
  },

  {
    id: "zambia",
    label: "Zambia",
    flag: "🇿🇲",
    lat: -13.1339,
    lng: 27.8493,
    city: "Lusaka",
    description: "TRIIBE Zambia",
    link: "#",
    hasLink: false,
  },

  {
    id: "nigeria",
    label: "Nigeria",
    flag: "🇳🇬",
    lat: 9.082,
    lng: 8.6753,
    city: "Nigeria",
    description: "TRIIBE Nigeria",
    link: "#",
    hasLink: false,
  },
];

const RING_DATA = BRANCHES.map(({ lat, lng }) => ({ lat, lng }));

const ARCS = [
  {
    startLat: 43.6532,
    startLng: -79.3832,
    endLat: 41.5,
    endLng: -73.5,
  },
  {
    startLat: 43.6532,
    startLng: -79.3832,
    endLat: 37.5,
    endLng: -78.5,
  },
  {
    startLat: 43.6532,
    startLng: -79.3832,
    endLat: 51.5074,
    endLng: -0.1278,
  },
  {
    startLat: 43.6532,
    startLng: -79.3832,
    endLat: 8.4606,
    endLng: -11.7799,
  },
  {
    startLat: 43.6532,
    startLng: -79.3832,
    endLat: 23.3441,
    endLng: 85.3096,
  },
  {
    startLat: 43.6532,
    startLng: -79.3832,
    endLat: 1.35,
    endLng: 103.82,
  },
  {
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 8.4606,
    endLng: -11.7799,
  },
  {
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 1.35,
    endLng: 103.82,
  },
];

const REGION_CODES: Record<string, string> = {
  newyork: "US",
  jamaica: "JM",
  london: "UK",
  sierraleone: "SL",
  ranchi: "IN",
  singapore: "SG",
  zambia: "ZM",
  nigeria: "NG",
};

function getLocationForBranch(branch: Branch) {
  const locationName = LOCATION_BY_BRANCH_ID[branch.id];

  if (!locationName) {
    return undefined;
  }

  return locations.find((location) => location.location === locationName);
}

function AdvisoryMember({
  member,
  onSelect,
}: {
  member: {
    name: string;
    imagePath: string;
    linkedIn?: string;
    title?: string;
    role?: string;
    bio?: string;
    description?: string;
  };
  onSelect: (member: ModalMember) => void;
}) {
  return (
    <div
      onClick={() => onSelect(member)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(member);
        }
      }}
      style={{
        width: 112,
        minWidth: 112,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 200ms ease",
      }}
      className="hover:scale-105"
    >
      <PersonAvatar src={member.imagePath} name={member.name} size={48} />

      <p
        style={{
          margin: "7px 0 0",
          fontSize: 11,
          lineHeight: 1.3,
          fontWeight: 600,
          color: "#002c19",
          width: "100%",
        }}
      >
        {member.name}
      </p>

      {member.role && (
        <p
          style={{
            margin: "3px 0 0",
            fontSize: 9,
            lineHeight: 1.25,
            color: "#1A6B3C",
            fontWeight: 600,
          }}
        >
          {member.role}
        </p>
      )}

      {member.title && (
        <p
          style={{
            margin: "3px 0 0",
            fontSize: 9.5,
            lineHeight: 1.25,
            color: "#002c19cc",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {member.title}
        </p>
      )}

      {member.linkedIn && (
        <div style={{ marginTop: 7 }} onClick={(e) => e.stopPropagation()}>
          <LinkedInBadge url={member.linkedIn} />
        </div>
      )}
    </div>
  );
}

function BranchPopup({
  branch,
  onClose,
  onSelectMember,
}: {
  branch: Branch;
  onClose: () => void;
  onSelectMember: (member: ModalMember) => void;
}) {
  const location = getLocationForBranch(branch);

  return (
    <>
      <style>{`
        .triibe-branch-popup {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 430px;
          max-width: calc(100% - 40px);
          max-height: calc(100% - 40px);
          background: #ffffff;
          border: 2px solid #002C19;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,44,25,0.16);
          z-index: 20;
          overflow: hidden;
        }

        .triibe-popup-scroll {
          max-height: calc(100vh - 100px);
          overflow-y: auto;
          scrollbar-width: thin;
        }

        .triibe-popup-content {
          display: flex;
          flex-direction: row;
        }

        .triibe-popup-sidebar {
          width: 92px;
          min-width: 92px;
          background: rgba(26,107,60,0.12);
          border-right: 1px solid #C0DD97;
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 6px;
        }

        .triibe-popup-main {
          flex: 1;
          min-width: 0;
          padding: 20px;
        }

        .triibe-advisory-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 22px 18px;
          align-items: flex-start;
        }

        @media (max-width: 900px) {
          .triibe-branch-popup {
            right: 12px;
            left: 12px;
            width: auto;
            max-width: none;
            top: auto;
            bottom: 12px;
            transform: none;

            height: min(70vh, calc(100% - 24px));
            max-height: min(70vh, calc(100% - 24px));

            overflow: hidden;
          }

          .triibe-popup-scroll {
            height: 100%;
            max-height: 100%;
            overflow-y: auto;
            overflow-x: hidden;

            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
            touch-action: pan-y;
          }
        }

        @media (max-width: 520px) {
          .triibe-popup-content {
            flex-direction: column;
          }

          .triibe-popup-sidebar {
            width: 100%;
            min-width: 0;
            border-right: none;
            border-bottom: 1px solid #C0DD97;
            padding: 12px 16px;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
          }

          .triibe-popup-main {
            padding: 16px;
          }

          .triibe-advisory-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px 12px;
          }

          .triibe-advisory-grid > div {
            width: 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>

      <div className="triibe-branch-popup">
        <div className="triibe-popup-scroll">
          <div className="triibe-popup-content">
            {/* LEFT REGION SIDEBAR */}
            <div className="triibe-popup-sidebar">
              <span
                style={{
                  fontSize: 20,
                  lineHeight: 1,
                  fontWeight: 700,
                  color: "#002c19",
                }}
              >
                {REGION_CODES[branch.id] ?? branch.flag}
              </span>

              <span
                style={{
                  fontSize: 11,
                  lineHeight: 1.3,
                  fontWeight: 700,
                  color: "#002c19cc",
                }}
              >
                {branch.city}
              </span>
            </div>

            {/* RIGHT CONTENT */}
            <div className="triibe-popup-main">
              {/* CLOSE */}
              <button
                onClick={onClose}
                aria-label="Close branch details"
                style={{
                  position: "absolute",
                  top: 16,
                  right: 18,
                  background: "transparent",
                  border: "none",
                  color: "#888",
                  cursor: "pointer",
                  fontSize: 22,
                  lineHeight: 1,
                  padding: 0,
                  zIndex: 5,
                }}
              >
                ×
              </button>

              {location ? (
                <>
                  {/* MANAGING DIRECTOR */}
                  {location.mdName && (
                    <div
                      style={{
                        marginBottom:
                          location.advisoryBoard.length > 0 ||
                          location.advisoryBoardForming
                            ? 22
                            : 0,
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 10px",
                          fontSize: 9,
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "1.2px",
                          textTransform: "uppercase",
                          color: "#002c19",
                        }}
                      >
                        Managing Director
                      </p>

                      <div
                        onClick={() =>
                          onSelectMember({
                            name: location.mdName!,
                            imagePath: location.mdImagePath ?? "",
                            role: "Managing Director",
                            title: `Managing Director, ${branch.city}`,
                            linkedIn: location.mdLinkedIn,
                            bio:
                              (location as any).mdBio ||
                              (location as any).mdDescription ||
                              `Managing Director for TRIIBE ${branch.city}.`,
                            description:
                              (location as any).mdDescription ||
                              (location as any).mdBio ||
                              `Managing Director for TRIIBE ${branch.city}.`,
                          })
                        }
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onSelectMember({
                              name: location.mdName!,
                              imagePath: location.mdImagePath ?? "",
                              role: "Managing Director",
                              title: `Managing Director, ${branch.city}`,
                              linkedIn: location.mdLinkedIn,
                              bio:
                                (location as any).mdBio ||
                                (location as any).mdDescription ||
                                `Managing Director for TRIIBE ${branch.city}.`,
                              description:
                                (location as any).mdDescription ||
                                (location as any).mdBio ||
                                `Managing Director for TRIIBE ${branch.city}.`,
                            });
                          }
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 11,
                          cursor: "pointer",
                          transition: "transform 200ms ease",
                          width: "fit-content",
                        }}
                        className="hover:translate-x-1"
                      >
                        <PersonAvatar
                          src={location.mdImagePath ?? ""}
                          name={location.mdName}
                          size={64}
                        />

                        <div style={{ minWidth: 0 }}>
                          <p
                            style={{
                              margin: 0,
                              fontSize: 14,
                              lineHeight: 1.3,
                              fontWeight: 700,
                              color: "#002c19",
                            }}
                          >
                            {location.mdName}
                          </p>

                          {location.mdLinkedIn && (
                            <div
                              style={{ marginTop: 5 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <LinkedInBadge url={location.mdLinkedIn} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ADVISORY BOARD */}
                  {location.advisoryBoard.length > 0 ? (
                    <div>
                      <p
                        style={{
                          margin: "0 0 12px",
                          fontSize: 9,
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "1.2px",
                          textTransform: "uppercase",
                          color: "#002c19",
                        }}
                      >
                        Advisory Board
                      </p>

                      <div className="triibe-advisory-grid">
                        {location.advisoryBoard.map((member) => (
                          <AdvisoryMember
                            key={member.name}
                            member={member}
                            onSelect={onSelectMember}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  <p
                    style={{
                      margin: "0 0 5px",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                      color: "#002c19",
                    }}
                  >
                    TRIIBE Branch
                  </p>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#002c19",
                    }}
                  >
                    {branch.label}
                  </h3>

                  <p
                    style={{
                      margin: "8px 0 0",
                      fontSize: 11,
                      lineHeight: 1.6,
                      color: "#002c19cc",
                    }}
                  >
                    {branch.description}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function TriibeGlobe() {
  const globeEl = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const [selectedMember, setSelectedMember] = useState<ModalMember | null>(
    null,
  );
  const [dimensions, setDimensions] = useState({
    width: 1100,
    height: 800,
  });

  /*
   * Load country polygons.
   */
  useEffect(() => {
    fetch("/countries.geojson")
      .then((r) => {
        if (!r.ok) throw new Error("Network error");
        return r.json();
      })
      .then((data) => {
        setCountries(data.features);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load globe data:", err);
        setLoading(false);
      });
  }, []);

  /*
   * Globe controls / rotation.
   */
  useEffect(() => {
    if (!globeEl.current) return;

    let cleanup: (() => void) | null = null;
    let raf: number | null = null;

    const setup = () => {
      if (!globeEl.current) return;

      let globeMesh: any = null;

      globeEl.current.scene().traverse((obj: any) => {
        if (
          obj.isMesh &&
          obj.geometry &&
          (obj.geometry.type === "SphereGeometry" ||
            obj.geometry.type === "SphereBufferGeometry") &&
          !globeMesh
        ) {
          globeMesh = obj;
        }
      });

      if (!globeMesh) {
        raf = requestAnimationFrame(setup);
        return;
      }

      try {
        globeEl.current.scene().traverse((obj: any) => {
          if (obj.isMesh && obj.geometry?.type === "SphereGeometry") {
            obj.material.color.setHex(0x051a0d);
            obj.material.needsUpdate = true;
          }
        });
      } catch (_) {}

      const controls = globeEl.current.controls();

      if (!controls) return;

      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.6;
      controls.enableZoom = true;

      globeEl.current.pointOfView(
        {
          altitude: 2.2,
        },
        0,
      );

      const resumeRotation = () => {
        if (idleTimerRef.current) {
          clearTimeout(idleTimerRef.current);
        }

        idleTimerRef.current = setTimeout(() => {
          if (globeEl.current?.controls()) {
            globeEl.current.controls().autoRotate = true;
          }
        }, 5000);
      };

      const onInteractStart = () => {
        controls.autoRotate = false;

        if (idleTimerRef.current) {
          clearTimeout(idleTimerRef.current);
        }
      };

      const onInteractEnd = () => {
        resumeRotation();
      };

      const domEl = globeEl.current.renderer().domElement;

      domEl.addEventListener("wheel", onInteractStart);
      domEl.addEventListener("wheel", resumeRotation);

      controls.addEventListener("start", onInteractStart);
      controls.addEventListener("end", onInteractEnd);

      cleanup = () => {
        domEl.removeEventListener("wheel", onInteractStart);
        domEl.removeEventListener("wheel", resumeRotation);

        controls.removeEventListener("start", onInteractStart);
        controls.removeEventListener("end", onInteractEnd);

        if (idleTimerRef.current) {
          clearTimeout(idleTimerRef.current);
        }
      };
    };

    setup();

    return () => {
      if (raf) {
        cancelAnimationFrame(raf);
      }

      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  /*
   * Handle wheel/touch interaction and marker clicks.
   */
  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper || !globeEl.current) return;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const checkIntersection = (clientX: number, clientY: number) => {
      if (!globeEl.current?.camera || !globeEl.current?.scene) {
        return false;
      }

      const rect = wrapper.getBoundingClientRect();

      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;

      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, globeEl.current.camera());

      const intersects = raycaster.intersectObjects(
        globeEl.current.scene().children,
        true,
      );

      return intersects.length > 0;
    };

    const handleWheel = (e: WheelEvent) => {
      if (
        e.target instanceof Element &&
        e.target.closest(".triibe-branch-popup")
      ) {
        return;
      }

      if (checkIntersection(e.clientX, e.clientY)) {
        e.preventDefault();
      } else {
        e.stopImmediatePropagation();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (
        e.target instanceof Element &&
        e.target.closest(".triibe-branch-popup")
      ) {
        return;
      }

      if (e.touches.length === 0) return;

      const touch = e.touches[0];

      if (checkIntersection(touch.clientX, touch.clientY)) {
        e.preventDefault();
      } else {
        e.stopImmediatePropagation();
      }
    };

    wrapper.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });

    wrapper.addEventListener("touchmove", handleTouchMove, {
      passive: false,
      capture: true,
    });

    const onBranchClick = (e: any) => {
      const branch: Branch = e.detail;

      setActiveBranch(branch);

      const controls = globeEl.current?.controls();

      if (controls) {
        controls.autoRotate = false;
      }

      globeEl.current?.pointOfView(
        {
          lat: branch.lat,
          lng: branch.lng,
          altitude: 2,
        },
        1000,
      );

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      idleTimerRef.current = setTimeout(() => {
        if (globeEl.current?.controls()) {
          globeEl.current.controls().autoRotate = true;
        }
      }, 5000);
    };

    wrapper.addEventListener("branch-click", onBranchClick);

    return () => {
      wrapper.removeEventListener("wheel", handleWheel, {
        capture: true,
      } as any);

      wrapper.removeEventListener("touchmove", handleTouchMove, {
        capture: true,
      } as any);

      wrapper.removeEventListener("branch-click", onBranchClick);
    };
  }, []);

  /*
   * Responsive globe dimensions.
   */
  useEffect(() => {
    const updateSize = () => {
      if (!wrapperRef.current) return;

      const w = wrapperRef.current.offsetWidth;

      setDimensions({
        width: w,
        height: Math.min(w * 0.85, 800),
      });
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  /*
   * Select a location from the pills underneath the globe.
   */
  const handleCountryClick = (branch: Branch) => {
    const isSameBranch = activeBranch?.id === branch.id;

    if (isSameBranch) {
      setActiveBranch(null);

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      const controls = globeEl.current?.controls();

      if (controls) {
        controls.autoRotate = true;
      }

      globeEl.current?.pointOfView(
        {
          altitude: 2.2,
        },
        1000,
      );

      return;
    }

    setActiveBranch(branch);

    const controls = globeEl.current?.controls();

    if (controls) {
      controls.autoRotate = false;
    }

    globeEl.current?.pointOfView(
      {
        lat: branch.lat,
        lng: branch.lng,
        altitude: 2,
      },
      1000,
    );

    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }

    idleTimerRef.current = setTimeout(() => {
      if (globeEl.current?.controls()) {
        globeEl.current.controls().autoRotate = true;
      }
    }, 5000);
  };

  /*
   * Create the circular TRIIBE markers.
   */
  const makeMarker = (d: Branch) => {
    const el = document.createElement("div");

    el.style.cssText = `
      width: 44px;
      height: 44px;
      pointer-events: auto;
      cursor: pointer;
    `;

    const inner = document.createElement("div");

    inner.style.cssText = `
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #002C19;
      border: 2px solid #00ff88;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 14px #00ff8855;
      overflow: hidden;
      padding: 6px;
      box-sizing: border-box;
      transition: transform 200ms ease, box-shadow 200ms ease;
      will-change: transform;
    `;

    const img = document.createElement("img");

    img.src = "/triibe-marker.png";

    img.style.cssText = `
      width: 28px;
      height: 28px;
      object-fit: contain;
      filter: brightness(0) invert(1);
    `;

    inner.appendChild(img);
    el.appendChild(inner);

    el.addEventListener("mouseenter", () => {
      inner.style.transform = "scale(1.2)";
      inner.style.boxShadow = "0 0 22px #00ff8899";
    });

    el.addEventListener("mouseleave", () => {
      inner.style.transform = "scale(1)";
      inner.style.boxShadow = "0 0 14px #00ff8855";
    });

    el.addEventListener("click", (ev) => {
      ev.stopPropagation();

      const controls = globeEl.current?.controls();

      if (controls) {
        controls.autoRotate = false;
      }

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      idleTimerRef.current = setTimeout(() => {
        if (globeEl.current?.controls()) {
          globeEl.current.controls().autoRotate = true;
        }
      }, 5000);

      el.dispatchEvent(
        new CustomEvent("branch-click", {
          bubbles: true,
          detail: d,
        }),
      );
    });

    return el;
  };

  return (
    <section
      style={{
        background: "#ffffff",
        fontFamily: "'Avenir Next', 'Avenir', -apple-system, sans-serif",
        width: "100%",
        padding: "64px 0 48px",
      }}
    >
      {/* Bio Modal Popup */}
      <MemberModal
        member={selectedMember}
        isOpen={Boolean(selectedMember)}
        onClose={() => setSelectedMember(null)}
      />

      <div
        style={{
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        <h2
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#002c19",
            margin: 0,
            letterSpacing: "-0.3px",
          }}
        >
          Global network
        </h2>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            ref={wrapperRef}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1100,
              height: dimensions.height,
            }}
          >
            {loading && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <style>{`
                  @keyframes triibe-spin {
                    to {
                      transform: rotate(360deg);
                    }
                  }
                `}</style>

                <div
                  style={{
                    width: 36,
                    height: 36,
                    border: "3px solid #1a3d24",
                    borderTop: `3px solid ${GREEN_GLOW}`,
                    borderRadius: "50%",
                    animation: "triibe-spin 0.8s linear infinite",
                  }}
                />
              </div>
            )}

            <Globe
              ref={globeEl}
              width={dimensions.width}
              height={dimensions.height}
              backgroundColor="rgba(0,0,0,0)"
              showAtmosphere={true}
              atmosphereColor={GREEN_GLOW}
              atmosphereAltitude={0.15}
              globeImageUrl={null as any}
              showGraticules={true}
              polygonsData={countries}
              polygonCapColor={() => "#0a3d20"}
              polygonSideColor={() => "#051a0d"}
              polygonStrokeColor={() => "#00ff8822"}
              polygonAltitude={0.005}
              polygonLabel={() => ""}
              htmlElementsData={BRANCHES}
              htmlLat="lat"
              htmlLng="lng"
              htmlAltitude={0.01}
              htmlElement={makeMarker as any}
              arcsData={ARCS}
              arcStartLat="startLat"
              arcStartLng="startLng"
              arcEndLat="endLat"
              arcEndLng="endLng"
              arcColor={() => "#ffffff"}
              arcStroke={0.4}
              arcDashLength={0.08}
              arcDashGap={0.92}
              arcDashAnimateTime={4000}
              arcAltitude={0.25}
              arcOpacity={0.8}
              ringsData={RING_DATA}
              ringLat="lat"
              ringLng="lng"
              ringLabel={() => ""}
              ringColor={() => "#00ff8866"}
              ringMaxRadius={3}
              ringPropagationSpeed={2}
              ringRepeatPeriod={1000}
              pointLabel={() => ""}
            />
          </div>

          
          {activeBranch && (
            <BranchPopup
              branch={activeBranch}
              onSelectMember={(m) => setSelectedMember(m)}
              onClose={() => {
                setActiveBranch(null);

                const controls = globeEl.current?.controls();

                if (controls) {
                  controls.autoRotate = true;
                }
              }}
            />
          )}
        </div>

        
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            marginTop: 22,
          }}
        >
          {BRANCHES.map((branch) => {
            const active = activeBranch?.id === branch.id;

            return (
              <button
                key={branch.id}
                onClick={() => handleCountryClick(branch)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 20px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  background: active ? "#e8f5ee" : "#ffffff",
                  color: "#002c19",
                  border: `1.5px solid ${active ? "#002C19" : "#e0e0e0"}`,
                  boxShadow: active ? "0 2px 12px rgba(0,44,25,0.18)" : "none",
                  transform: active ? "scale(1.04)" : "scale(1)",
                }}
              >
                {branch.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
