"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
/* import HeroSummit from "./heroSummit"; */
import Image from "next/image";
import Link from "next/link";
import { createElement } from "react";
import Script from "next/script";

const SummitPage = () => {
  // Run of the show schedule data matching the 2027 timeline document
  const scheduleDays = [
    {
      title: "Day 1, Friday September 17th",
      badge: "The Cohort Day",
      location: "",
      highlight: {
        image: "/images/summit/cohort-friday.jpeg",
        label: "FELLOWS · EXCLUSIVE",
        name: "Cohort Day & Dinner Concert",
        description:
          "Founders only. Round tables, workshops, an intimate evening dinner and private concert.",
        bullets: [
          "Observatory views",
          "Cohort workshops & fireside chats",
          "Private dinner concert",
        ],
      },
      items: [
        {
          time: "8:30 AM",
          title: "Top Floor Opening Remarks",
        },
        {
          time: "9:00 AM",
          title: "Cohort workshops and fireside chats",
        },
        {
          time: "12:00 PM",
          title: "Lunch",
        },
        {
          time: "1:00 PM",
          title: "Afternoon sessions and interactive workshops with guests",
        },
        {
          time: "6:30 PM",
          title: "TRIIBE 100 dinner with concert",
        },
      ],
    },
    {
      title: "Day 2, Saturday September 18th (Daytime)",
      badge: "The Public Day",
      location: "",
      highlight: {
        image: "/images/summit/summithead.jpeg",
        label: "SATURDAY · FORUM",
        name: "TRIIBE Talks & Supercar Showcase",
        description:
          "1,000 public attendees across seven simultaneous stages hosting TRIIBE Talks.",
        bullets: [
          "7 parallel session rooms",
          "Community activations",
          "New York panoramic views",
        ],
      },
      items: [
        {
          time: "8:30 AM",
          title: "Doors open to public",
        },
        {
          time: "9:00 AM",
          title: "Block 1 - TRIIBE Talks",
        },
        { time: "9:30 AM", title: "15 minute break" },
        {
          time: "9:45 AM",
          title: "Block 2 - TRIIBE Talks",
        },
        {
          time: "10:15 AM",
          title: "Refreshment break and community activations.",
        },
        {
          time: "11:00 AM",
          title: "Block 3 - TRIIBE Talks",
        },
        { time: "11:30 AM", title: "15 minute break" },
        {
          time: "11:45 AM",
          title: "Block 4 - TRIIBE Talks",
        },
        { time: "12:15 PM", title: "15 minute break" },
        {
          time: "12:30 PM",
          title: "Block 5 - TRIIBE Talks",
        },
        {
          time: "1:00 PM",
          title: "Lunch break",
        },
        {
          time: "2:00 PM",
          title: "Block 6 - TRIIBE Talks",
        },
        { time: "2:30 PM", title: "15 minute break" },
        {
          time: "2:45 PM",
          title: "Block 7 - TRIIBE Talks",
        },
        {
          time: "3:15 PM",
          title: "Networking and activations",
        },
        {
          time: "4:30 PM",
          title: "Venue closed to the public",
          description: "",
        },
      ],
    },
    {
      title: "Day 2, Saturday September 18th (Evening)",
      badge: "VIP Gala",
      location: "",
      highlight: {
        image: "/images/summit/javitscenter.jpg",
        label: "SATURDAY · GALA",
        name: "Black Tie VIP Gala & Fashion Show",
        description:
          "500 curated guests. Featuring keynotes, concerts, a fashion show, and paddle raise.",
        bullets: [
          "Black tie attire",
          "Next-Gen Design runway show",
          "Keynotes & live paddle raise",
        ],
      },
      items: [
        {
          time: "6:00 PM",
          title: "Gala Arrival & Seating",
          description:
            "Black tie. Plated appetizers served as guests take their seats.",
        },
        {
          time: "7:00 PM",
          title: "Welcome Remarks",
        },
        {
          time: "7:10 PM",
          title: "Live celebrity musical performance.",
        },
        {
          time: "7:25 PM",
          title: "Kyle Matthys & Title Sponsor keynotes & Paddle Raise",
        },
        {
          time: "7:40 PM",
          title:
            "Next-Gen designer fashion show. Guests vote on the winner for a cash prize.",
        },
        {
          time: "8:20 PM",
          title: "Dessert & Mingling",
        },
        {
          time: "11:00 PM",
          title: "Gala Concludes",
        },
      ],
    },
  ];

  const sponsorTiers = [
    {
      title: "Title Sponsor",
      price: "$500K",
      availability: "1 available",
      bullets: [
        "Keynote opportunity",
        "Logo on stage and marketing for 1 year",
        "Next-gen awards presenter at gala",
        "Two Gala tables for 8 each",
        "Personal interviews highlighted in our media, pre and post event",
        "Documentary acknowledgements",
        "Accommodations for 16 guests",
      ],
    },
    {
      title: "Signature Sponsor",
      price: "$250K",
      availability: "2 available",
      bullets: [
        "Named at Gala and Forum",
        "Logo on stage and marketing for 1 year",
        "Two Gala tables for 8 each",
        "Personal interviews highlighted in our media, pre and post event",
        "Documentary acknowledgements",
        "Accommodations for 8 guests",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      
      <div className="w-full bg-[#F5F5F5] py-4 px-4 text-center border-b border-gray-200">
        <Link
          href="/summit-2026"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#002c19] hover:text-[#002c19]/70 transition-colors"
        >
          <span>Looking for the previous edition?</span>
          <span className="underline underline-offset-4">
            Explore 2026 Summit Recap &rarr;
          </span>
        </Link>
      </div>

      
      <section className="relative w-full bg-white overflow-hidden pb-20">
        <div className="relative w-full min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/summit/summithead.jpeg"
            alt="Javits Center Exterior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
            <div className="relative w-36 h-10 mb-4 brightness-0 invert">
              <Image
                src="/images/TRIIBELOGOS/TRIIBE NAME.png"
                alt="TRIIBE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
              Next-Gen Summit 2027
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/90 text-sm md:text-base font-medium mb-3">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Friday - Saturday, September 17 - 18, 2027
              </span>
            </div>
          </div>
        </div>

        
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-20 pt-16">
          <p className="text-base sm:text-lg text-[#002c19] font-medium text-center max-w-3xl mx-auto leading-relaxed mb-12">
            The annual gathering of the TRIIBE I00 leading nonprofit founders
            under 30
            <br />
            <span className="text-[#002c19]/80 text-sm sm:text-base">
              The opening weekend to Climate Week NYC and the UN General
              Assembly
            </span>
          </p>

          
          <div className="w-full border-t border-gray-100 pt-8">
            <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-12">
              
              
              <div className="w-60 flex flex-col items-center gap-8">
                <div className="text-center flex flex-col items-center">
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-black text-[#002c19]">
                    1000
                  </span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#002c19]/80 uppercase tracking-wide">
                    Public Attendees
                  </span>
                </div>
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center h-[44px] w-full rounded-sm font-semibold text-sm sm:text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105 text-center"
                >
                  Schedule
                </a>
              </div>

              
              <div className="w-60 flex flex-col items-center gap-8">
                <div className="text-center flex flex-col items-center">
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-black text-[#002c19]">
                    100
                  </span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#002c19]/80 uppercase tracking-wide">
                    TRIIBE Fellows
                  </span>
                </div>
                <a
                  href="#tickets"
                  className="inline-flex items-center justify-center h-[44px] w-full rounded-sm font-semibold text-sm sm:text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105 text-center"
                >
                  Registration
                </a>
              </div>

              
              <div className="w-60 flex flex-col items-center gap-8">
                <div className="text-center flex flex-col items-center">
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-black text-[#002c19]">
                    500
                  </span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#002c19]/80 uppercase tracking-wide">
                    VIP Gala Guests
                  </span>
                </div>
                <Link
                  href="/summit-2026"
                  className="inline-flex items-center justify-center h-[44px] w-full rounded-sm font-semibold text-sm sm:text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105 text-center"
                >
                  Last year highlights
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      
      <section
        className="pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-white"
        id="schedule"
      >
        <div className="max-w-260 mx-auto flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002c19] text-center tracking-tighter">
            Schedule & Run of Show
          </h2>

          {scheduleDays.map((day) => (
            <React.Fragment key={day.title}>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div
                    className={`flex flex-col ${
                      day.highlight ? "gap-1" : "gap-4"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-[#002c19]">
                      {day.title}
                    </h3>

                    <p
                      className={`text-xs ${
                        day.highlight
                          ? "text-[#002c19]/80"
                          : "text-[#002c19]/80 font-semibold"
                      }`}
                    >
                      {day.location}
                    </p>
                  </div>

                  {day.badge && (
                    <span className="bg-[#002C19] text-white text-xs font-semibold px-4 py-2 rounded-full self-start">
                      {day.badge}
                    </span>
                  )}
                </div>

                {day.highlight && (
                  <div className="bg-white rounded-xl flex flex-col md:flex-row overflow-hidden">
                    <div className="relative w-full md:w-56 h-48 md:h-auto flex-shrink-0">
                      <Image
                        src={day.highlight.image}
                        alt={day.highlight.name}
                        fill
                        className={
                          day.highlight.image ===
                          "/images/TRIIBELOGOS/TRIIBE LOGO.png"
                            ? "object-contain p-4"
                            : "object-cover"
                        }
                      />
                    </div>

                    <div className="flex flex-col gap-3 p-6">
                      <p className="text-xs font-semibold text-[#002c19]/80 uppercase tracking-widest">
                        {day.highlight.label}
                      </p>

                      <h4
                        className="text-2xl italic text-[#002c19]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {day.highlight.name}
                      </h4>

                      <p className="text-sm text-[#002c19]/80 leading-relaxed">
                        {day.highlight.description}
                      </p>

                      <div className="flex flex-wrap gap-x-8 gap-y-2 mt-2">
                        {day.highlight.bullets.map((bullet, i) => (
                          <span
                            key={i}
                            className="text-sm text-[#002c19]/80 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            {bullet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {day.items && day.items.length > 0 && (
                  <div className="flex flex-col">
                    {day.items.map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[80px_1fr] gap-4 py-3 border-t border-gray-200 items-start"
                      >
                        <span className="text-sm font-semibold text-[#002c19]">
                          {item.time}
                        </span>

                        {item.title === "BREAK" ||
                        item.title === "15 minute break" ? (
                          <div className="flex items-center gap-4 w-full">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-xs text-[#002c19]/80 tracking-[0.3em] uppercase">
                              {item.title}
                            </span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-[#002c19] mb-1">
                              {item.title}
                            </p>

                            {item.description && (
                              <p className="text-xs text-[#002c19]/80 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      
      <section
        className="pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-[#F5F5F5]"
        id="tickets"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002c19] text-center tracking-tight">
            Tickets & Registration
          </h2>
          <div className="w-full min-h-[600px]">
            {createElement("givebutter-widget", { id: "LWkRO3" })}
          </div>
        </div>
      </section>

      
      <section className="pt-20 pb-24 px-4 md:px-12 lg:px-24 bg-[#05291b] text-white">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center mb-3">
            Sponsor our summit
          </h2>
          <p className="text-lg md:text-xl text-white/90 text-center font-normal mb-16">
            Channeling capital to the nonprofit startup ecosystem
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-center">
            {sponsorTiers.map((tier, idx) => (
              <div
                key={idx}
                className="w-full border border-white/60 rounded-2xl p-8 sm:p-10 flex flex-col justify-between bg-transparent shadow-sm"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                    {tier.title}
                  </h3>
                  <div className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-2">
                    {tier.price}
                  </div>
                  <p className="text-sm text-white/70 mb-8 font-normal">
                    {tier.availability}
                  </p>

                  <ul className="flex flex-col gap-3.5 text-sm sm:text-base text-white/90 leading-relaxed">
                    {tier.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-white mt-1 text-sm">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 w-full px-4 md:px-25 lg:px-50 bg-[#F5F5F5]">
        <div className="w-full max-w-[1200px] mx-auto transition-all duration-300 hover:scale-[1.02]">
          <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-2xl md:text-3xl font-medium text-[#002c19]">
              The TRIIBE Next-Gen Summit 2026
            </p>

            <Link
              href="/summit-2026"
              className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105"
            >
              Recap
            </Link>
          </div>
        </div>
      </section>

      
      <Script
        src="https://widgets.givebutter.com/latest.umd.cjs?acct=xLAdgtMt2xZoh67c&p=other"
        strategy="lazyOnload"
      />

      <Footer />
    </main>
  );
};

export default SummitPage;