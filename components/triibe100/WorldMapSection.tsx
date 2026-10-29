"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { geoEqualEarth, geoPath, geoGraticule } from "d3-geo";
import { feature } from "topojson-client";
import { founders, type Founder } from "@/lib/triibe100/founders";

interface CountryLocation {
  name: string;
  coordinates: [number, number];
  founderNames: string[];
}

const COUNTRY_REGISTRY: CountryLocation[] = [
  {
    name: "United States",
    coordinates: [-98.5795, 39.8283],
    founderNames: [
      "Zoe Terry",
      "Varuni Chopra",
      "Trisha Prabhu",
      "Shrusti Amula",
      "Sharona Shnayder",
      "Samin Bhan",
      "Olivia Zhang",
      "Nayla Jimenez",
      "Maria Keller",
      "Josh Fields",
      "Jared Fenton",
      "Jahnavi Rao",
      "Hikaru (Wakeel) Hayakawa",
      "Grace Liu",
      "Gitanjali Rao",
      "Esha Venkat",
      "Diana Chao",
      "Cole Mattox",
      "Claire Chi",
      "Neha Shukla",
      "Natalie Meyer",
      "Bella Brown",
      "Kelsey Cadien",
      "Emily Cho",
      "Mary Zhu",
      "Owen Tanner-Flomberg",
      "Khloe Thompson",
      "Jerome Foster II",
      "Sonali Ratnasinghe",
      "Caeley Looney",
      "Shreyaa Venkat",
      "Derin Ege Sezgin",
      "Alex Edgar",
      "Maya Gowda",
      "Arjun Sharda",
      "Madison Quesnel",
      "Ethan Hill",
      "Crystal Yang",
      "Cherie Animashaun",
      "Michelle Ye",
      "Diya Mankotia",
      "Mary Blankemeier",
      "Eojin Park",
      "Arielle Galinsky",
      "Elad Raymond",
      "Natasha Agarwal",
      "Sam Hiner",
      "Mick Tobin",
      "Dr. Shelby Thomas",
      "Shreya Ramachandran",
      "Lea Nepomuceno",
      "Rida Karim",
      "Olivia Greenaway",
      "Andra Daniela Campos",
      "Celine Qin",
      "Sarah Shelke",
      "Maya Penn",
      "Anvi Palav",
      "Rishi Gurudevan",
      "Aaron He",
      "Kevin Patel",
      "Zoya Kalinsky",
    ],
  },
  {
    name: "Canada",
    coordinates: [-106.3468, 56.1304],
    founderNames: ["Rachel Parent", "Kehkashan Basu"],
  },
  {
    name: "Haiti",
    coordinates: [-72.2852, 18.9712],
    founderNames: ["Anne-Sophie Frédérick"],
  },
  {
    name: "Brazil",
    coordinates: [-51.9253, -14.235],
    founderNames: ["Anna Luísa Beserra"],
  },
  {
    name: "Trinidad and Tobago",
    coordinates: [-61.2225, 10.6918],
    founderNames: ["Maya Nanan"],
  },
  {
    name: "United Kingdom",
    coordinates: [-1.1743, 52.3555],
    founderNames: [
      "Dr. Khadija Serwaah Owusu",
      "Ebun Lawal",
      "Dev Sharma",
      "Theresa Sebastian",
      "Ava Langridge",
    ],
  },
  {
    name: "Germany",
    coordinates: [10.4515, 51.1657],
    founderNames: ["Nils Rauscher", "Ben Erler"],
  },
  {
    name: "Switzerland",
    coordinates: [8.2275, 46.8182],
    founderNames: ["Marie-Claire Graf"],
  },
  {
    name: "Luxembourg",
    coordinates: [6.1296, 49.8153],
    founderNames: ["Leo Sharma", "Avanti Sharma"],
  },
  {
    name: "Tunisia",
    coordinates: [9.5375, 33.8869],
    founderNames: ["Hayfa Sdiri"],
  },
  {
    name: "Turkey",
    coordinates: [35.2433, 38.9637],
    founderNames: ["Olivier UWISHEMA"],
  },
  {
    name: "Lebanon",
    coordinates: [35.8623, 33.8547],
    founderNames: ["Marina El Khawand"],
  },
  {
    name: "Ghana",
    coordinates: [-1.0232, 7.9465],
    founderNames: ["Mathias Charles Yabe", "Nana Kusi Appiah"],
  },
  {
    name: "Nigeria",
    coordinates: [8.6753, 9.082],
    founderNames: ["Stanley Anigbogu", "Adaobi Okeke"],
  },
  {
    name: "Uganda",
    coordinates: [32.2903, 1.3733],
    founderNames: ["Ben Mayele Jeme"],
  },
  {
    name: "Kenya",
    coordinates: [37.9062, -0.0236],
    founderNames: [
      "Joseph Nguthiru",
      "Felix Atamba",
      "Diing Manyang",
      "Mary Nyiriak Maker",
      "Joseph Dudi Miabok",
    ],
  },
  {
    name: "South Africa",
    coordinates: [24.6727, -28.7282],
    founderNames: ["Zuha Ajlan"],
  },
  {
    name: "Pakistan",
    coordinates: [69.3451, 30.3753],
    founderNames: ["Rimza Razaque"],
  },
  {
    name: "India",
    coordinates: [78.9629, 20.5937],
    founderNames: ["Chethan Manchegowda", "Nav Agarwal", "Divaa Uthkarsha"],
  },
  {
    name: "Bangladesh",
    coordinates: [90.3563, 23.685],
    founderNames: ["Sayed Zubaer Hasan"],
  },
  {
    name: "Malaysia",
    coordinates: [101.9758, 4.2105],
    founderNames: ["Rijve Arefin"],
  },
  {
    name: "Philippines",
    coordinates: [121.774, 12.8797],
    founderNames: ["Val Amiel Vestil", "Mirus Ponon"],
  },
  {
    name: "New Zealand",
    coordinates: [174.886, -40.9006],
    founderNames: ["Alexia Hilbertidou"],
  },
];

interface LandPath {
  d: string | null;
  id?: string | number;
}

export default function WorldMapSection() {
  const router = useRouter();
  const [worldData, setWorldData] = useState<any>(null);
  const [activeLocation, setActiveLocation] = useState<CountryLocation | null>(
    null,
  );
  const [isLocked, setIsLocked] = useState(false);

  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hoverDwellTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    import("world-atlas/countries-110m.json").then((data) => {
      setWorldData(data.default || data);
    });
  }, []);

  useEffect(() => {
    if (activeLocation && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeLocation]);

  const width = 1000;
  const height = 520;

  const projection = useMemo(() => {
    return geoEqualEarth()
      .scale(175)
      .translate([width / 2, height / 2]);
  }, [width, height]);

  const pathGenerator = useMemo(() => {
    return geoPath().projection(projection);
  }, [projection]);

  const graticulePath = useMemo(() => {
    const graticule = geoGraticule().step([30, 30]);
    return pathGenerator(graticule());
  }, [pathGenerator]);

  const landPaths: LandPath[] = useMemo(() => {
    if (!worldData) return [];
    const countries = feature(worldData, worldData.objects.countries as any);
    return (countries as any).features.map((f: any) => ({
      d: pathGenerator(f),
      id: f.id,
    }));
  }, [worldData, pathGenerator]);

  const foundersByName = useMemo(() => {
    const map = new Map<string, Founder>();
    founders.forEach((f) => {
      if (f.name && f.name !== "COMING_SOON_PLACEHOLDER") {
        map.set(f.name.trim().toLowerCase(), f);
      }
    });
    return map;
  }, []);

  const activeFounders = useMemo(() => {
    if (!activeLocation) return [];
    return activeLocation.founderNames
      .map((name) => foundersByName.get(name.trim().toLowerCase()))
      .filter((f): f is Founder => Boolean(f));
  }, [activeLocation, foundersByName]);

  const isRightSideDot = useMemo(() => {
    if (!activeLocation) return false;
    const coords = projection(activeLocation.coordinates);
    if (!coords) return false;
    return coords[0] >= width / 2;
  }, [activeLocation, projection, width]);

  const handleDotClick = (loc: CountryLocation) => {
    if (hoverDwellTimerRef.current) clearTimeout(hoverDwellTimerRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);

    if (activeLocation?.name === loc.name && isLocked) {
      setIsLocked(false);
      setActiveLocation(null);
    } else {
      setActiveLocation(loc);
      setIsLocked(true);
    }
  };

  const handleDotMouseEnter = (loc: CountryLocation) => {
    if (isLocked) return;

    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (hoverDwellTimerRef.current) clearTimeout(hoverDwellTimerRef.current);

    hoverDwellTimerRef.current = setTimeout(() => {
      setActiveLocation(loc);
    }, 150);
  };

  const handleDotMouseLeave = () => {
    if (hoverDwellTimerRef.current) clearTimeout(hoverDwellTimerRef.current);
    if (isLocked) return;

    closeTimerRef.current = setTimeout(() => {
      setActiveLocation(null);
    }, 280);
  };

  const handlePanelMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handlePanelMouseLeave = () => {
    if (isLocked) return;
    closeTimerRef.current = setTimeout(() => {
      setActiveLocation(null);
    }, 280);
  };

  const handleClose = () => {
    if (hoverDwellTimerRef.current) clearTimeout(hoverDwellTimerRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsLocked(false);
    setActiveLocation(null);
  };

  const handleCardClick = (id: number) => {
    if (window.location.pathname === "/100") {
      window.location.hash = `founder-${id}`;
      const target = document.getElementById(`founder-${id}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      router.push(`/100#founder-${id}`);
    }
  };

  return (
    <section className="w-full bg-[#002C19] py-4 sm:py-8 px-2 sm:px-6 relative select-none">
      <div className="max-w-[850px] mx-auto relative">
        <div className="relative bg-transparent p-1 sm:p-4">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto drop-shadow-sm overflow-visible block"
            onClick={(e) => {
              if (
                (e.target as HTMLElement).tagName === "svg" ||
                (e.target as HTMLElement).tagName === "path"
              ) {
                handleClose();
              }
            }}
          >
            {graticulePath && (
              <path
                d={graticulePath}
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="0.5"
                className="pointer-events-none"
              />
            )}

            {landPaths.map((c: LandPath, i: number) => (
              <path
                key={c.id || i}
                d={c.d || ""}
                fill="rgba(255, 255, 255, 0.13)"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="0.5"
                className="pointer-events-none"
              />
            ))}

            {COUNTRY_REGISTRY.map((loc) => {
              const coords = projection(loc.coordinates);
              if (!coords) return null;
              const [cx, cy] = coords;
              const isUS = loc.name === "United States";
              const radius = isUS ? 16 : 6;
              const isSelected = activeLocation?.name === loc.name;

              return (
                <g
                  key={loc.name}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDotClick(loc);
                  }}
                  onMouseEnter={() => handleDotMouseEnter(loc)}
                  onMouseLeave={handleDotMouseLeave}
                >
                  <circle cx={cx} cy={cy} r={radius + 12} fill="transparent" />
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? radius + 2 : radius}
                    fill={isSelected ? "#9FE3C0" : "#ffffff"}
                    stroke="#002C19"
                    strokeWidth="1.8"
                    className="transition-all duration-200"
                  />
                </g>
              );
            })}
          </svg>

          {activeLocation && (
            <>
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
                onClick={handleClose}
              />

              <aside
                onMouseEnter={handlePanelMouseEnter}
                onMouseLeave={handlePanelMouseLeave}
                className={`fixed inset-x-0 bottom-0 z-50 max-h-[82vh] rounded-t-3xl sm:rounded-2xl sm:absolute sm:inset-auto sm:top-2 sm:bottom-2 sm:w-[350px] sm:max-h-[96%] bg-[#f4f0e8] shadow-[0_-10px_40px_rgba(0,0,0,0.45)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col border border-black/10 overflow-hidden animate-in duration-200 slide-in-from-bottom ${
                  isRightSideDot
                    ? "sm:left-2 sm:slide-in-from-left"
                    : "sm:right-2 sm:slide-in-from-right"
                }`}
              >
                <div className="w-12 h-1.5 bg-black/20 rounded-full mx-auto mt-2.5 mb-1 sm:hidden shrink-0" />

                <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/10 bg-[#ebe5db] shrink-0">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#002C19] tracking-tight flex items-center gap-2">
                      {activeLocation.name}
                      {isLocked && (
                        <span className="hidden sm:inline-block text-[10px] font-semibold text-[#002C19]/60 bg-black/5 px-2 py-0.5 rounded-full">
                          Pinned
                        </span>
                      )}
                    </h3>
                    <p className="text-xs font-medium text-[#002C19]/70">
                      {activeFounders.length}{" "}
                      {activeFounders.length === 1 ? "Fellow" : "Fellows"}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label="Close"
                    className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 active:bg-black/15 text-[#002C19] flex items-center justify-center text-xl leading-none transition-colors"
                  >
                    &times;
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4">
                  {activeFounders.map((founder) => (
                    <div
                      key={founder.id}
                      onClick={() => handleCardClick(founder.id)}
                      className="group bg-white rounded-xl overflow-hidden border border-black/10 shadow-sm flex flex-col transition-all duration-200 hover:shadow-md hover:border-black/20 cursor-pointer"
                    >
                      <div className="w-full aspect-[16/9] sm:aspect-[4/3] bg-black/5 relative overflow-hidden">
                        {founder.image ? (
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#002C19]/30">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              className="w-12 h-12"
                            >
                              <circle cx="12" cy="8" r="5" />
                              <path d="M2 22c0-5.5 4.5-9 10-9s10 3.5 10 9" />
                            </svg>
                          </div>
                        )}
                      </div>

                      <div className="p-4 flex flex-col text-left">
                        <h4 className="text-base sm:text-lg font-bold text-[#002C19] leading-tight group-hover:text-[#004728] transition-colors">
                          {founder.name}
                        </h4>
                        {founder.bio && (
                          <p className="text-xs font-semibold text-[#002C19]/80 mt-1">
                            {founder.bio}
                          </p>
                        )}

                        <div className="w-8 h-[1.5px] bg-[#002C19]/15 my-2.5" />

                        {founder.description && (
                          <p className="text-xs text-[#002C19]/85 leading-[1.8] tracking-wide whitespace-pre-line line-clamp-6">
                            {founder.description}
                          </p>
                        )}

                        {(founder.linkedin ||
                          founder.instagram ||
                          founder.website) && (
                          <div
                            className="flex items-center gap-2.5 mt-3 pt-2.5 border-t border-black/5"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {founder.linkedin && (
                              <a
                                href={founder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-8 h-8 rounded-full bg-[#f4f0e8] hover:bg-[#ebe5db] active:bg-[#ebe5db] flex items-center justify-center text-[#002C19] transition-colors"
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
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
                                aria-label="Instagram"
                                className="w-8 h-8 rounded-full bg-[#f4f0e8] hover:bg-[#ebe5db] active:bg-[#ebe5db] flex items-center justify-center text-[#002C19] transition-colors"
                              >
                                <svg width="14" height="14" viewBox="0 0 50 50">
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
                                  <circle cx="40" cy="13" r="3" fill="white" />
                                </svg>
                              </a>
                            )}
                            {founder.website && (
                              <a
                                href={founder.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Website"
                                className="w-8 h-8 rounded-full bg-[#f4f0e8] hover:bg-[#ebe5db] active:bg-[#ebe5db] flex items-center justify-center text-[#002C19] transition-colors"
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="9" />
                                  <line x1="3" y1="12" x2="21" y2="12" />
                                  <path d="M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-6.6-3.3-9S9.8 5.4 12 3Z" />
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </>
          )}
        </div>
      </div>
    </section>
  );
}