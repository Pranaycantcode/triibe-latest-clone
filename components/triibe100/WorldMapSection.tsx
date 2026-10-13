"use client";

import React, { useState, useMemo, useEffect } from "react";
import { geoEqualEarth, geoPath, geoGraticule } from "d3-geo";
import { feature } from "topojson-client";

interface CountryLocation {
  name: string;
  coordinates: [number, number];
}

const FOUNDER_LOCATIONS: CountryLocation[] = [
  { name: "United States", coordinates: [-98.5795, 39.8283] },
  { name: "Canada", coordinates: [-106.3468, 56.1304] },
  { name: "Haiti", coordinates: [-72.2852, 18.9712] },
  { name: "Brazil", coordinates: [-51.9253, -14.235] },
  { name: "Trinidad and Tobago", coordinates: [-61.2225, 10.6918] },
  { name: "United Kingdom", coordinates: [-1.1743, 52.3555] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "Switzerland", coordinates: [8.2275, 46.8182] },
  { name: "Luxembourg", coordinates: [6.1296, 49.8153] },
  { name: "Tunisia", coordinates: [9.5375, 33.8869] },
  { name: "Turkey", coordinates: [35.2433, 38.9637] },
  { name: "Lebanon", coordinates: [35.8623, 33.8547] },
  { name: "Ghana", coordinates: [-1.0232, 7.9465] },
  { name: "Nigeria", coordinates: [8.6753, 9.082] },
  { name: "Uganda", coordinates: [32.2903, 1.3733] },
  { name: "Kenya", coordinates: [37.9062, -0.0236] },
  { name: "South Africa", coordinates: [24.6727, -28.7282] },
  { name: "Pakistan", coordinates: [69.3451, 30.3753] },
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Bangladesh", coordinates: [90.3563, 23.685] },
  { name: "Malaysia", coordinates: [101.9758, 4.2105] },
  { name: "Philippines", coordinates: [121.774, 12.8797] },
  { name: "New Zealand", coordinates: [174.886, -40.9006] },
];

interface LandPath {
  d: string | null;
  id?: string | number;
}

export default function WorldMapSection() {
  const [worldData, setWorldData] = useState<any>(null);

  useEffect(() => {
    import("world-atlas/countries-110m.json").then((data) => {
      setWorldData(data.default || data);
    });
  }, []);

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

  return (
    <section className="w-full bg-[#002C19] py-8 sm:py-12 px-4 sm:px-8 border-b border-white/10 select-none">
      <div className="max-w-[1100px] mx-auto">
        <div className="relative bg-transparent p-4 sm:p-8">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto drop-shadow-sm pointer-events-none"
          >
            {graticulePath && (
              <path
                d={graticulePath}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="0.7"
              />
            )}

            {landPaths.map((c: LandPath, i: number) => (
              <path
                key={c.id || i}
                d={c.d || ""}
                fill="#2b2f36"
                stroke="#373c45"
                strokeWidth="0.5"
              />
            ))}

            {FOUNDER_LOCATIONS.map((loc) => {
              const coords = projection(loc.coordinates);
              if (!coords) return null;
              const [cx, cy] = coords;
              const isUS = loc.name === "United States";
              const radius = isUS ? 16 : 6;

              return (
                <circle
                  key={loc.name}
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="#002C19"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                />
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}