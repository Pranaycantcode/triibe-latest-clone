"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSummit from "@/components/heroSummit";
import Image from "next/image";
import { createElement } from "react";
import Script from "next/script";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  React.useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - new Date().getTime();

      if (diff <= 0) {
        setTimeLeft((prev) => ({ ...prev, expired: true }));
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        expired: false,
      });
    };

    calculate();
    const interval = setInterval(calculate, 60000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.expired) return <span>Expired</span>;

  return (
    <div className="flex gap-2 text-sm font-medium text-[#002c19]">
      <span>{timeLeft.days}d</span>
      <span>{timeLeft.hours}h</span>
      <span>{timeLeft.minutes}m</span>
    </div>
  );
};

const SummitPage = () => {
  const panels = [
    {
      title: "Half a Life of Impact",
      speakers: [
        {
          name: "Esha Venkat",
          title: "Co-Founder, NEST4US",
          image: "/images/home/homepage---changemakers-3.png",
          linkedin: "https://www.linkedin.com/in/eshavenkat/",
          tag: "Next-Gen",
        },
        {
          name: "Lauren Shenkman",
          title:
            "Director of Partnerships and Programs, Riley’s Way Foundation",
          image: "/images/summit/LaurenShenkman2.jpg",
          linkedin: "https://www.linkedin.com/in/laurenshenkman/",
          tag: "Speaker",
        },
        {
          name: "Zoe Terry",
          title: "Founder, Zoe's Dolls",
          image: "/images/summit/Zoe Terry.png",
          linkedin: "https://www.linkedin.com/in/zoe-terry-01b14235b",
          tag: "Next-Gen",
        },
        {
          name: "Mariela Dabbah",
          title: "Founder & CEO, Red Shoe Movement",
          image: "/images/summit/MarielaDabbah3.png",
          linkedin: "https://www.linkedin.com/in/marieladabbah/",
          tag: "Speaker",
        },
        {
          name: "Zachary Pogue",
          title:
            "CTO, Dapper Care Inc",
          image: "/images/team/ZacharyPogue.jpg",
          linkedin: "https://www.linkedin.com/in/zachpogue/",
          tag: "Moderator",
        },
      ],
    },
    {
      title: "The Social Fix",
      speakers: [
        {
          name: "Samin Bhan",
          title: "Founder, Lookup",
          image: "/images/home/saminbhan-2.png",
          linkedin: "https://www.linkedin.com/in/samin-bhan/",
          tag: "Next-Gen",
        },
        {
          name: "Vin Infante",
          title: "Founder, Omega Lifestyles NYC",
          image: "/images/summit/VinInfante.png",
          linkedin: "https://www.linkedin.com/in/vininfante/",
          tag: "Speaker",
        },
        {
          name: "Varuni Chopra",
          title: "Founder, Bridge the Gap",
          image: "/images/triibe100/VaruniChopra.png",
          linkedin: "https://www.linkedin.com/in/varuni-chopra1/",
          tag: "Next-Gen",
        },
        {
          name: "Chelsea Toler",
          title: "Co-CEO, Logictry",
          image: "/images/summit/ChelseaToler.png",
          linkedin: "https://www.linkedin.com/in/catoler92/",
          tag: "Speaker",
        },
        {
          name: "Hikaru Hayakawa",
          title: "Executive Director, Climate Cardinals",
          image: "/images/summit/hikaru1.png",
          linkedin: "https://www.linkedin.com/in/hikaruhayakawa",
          tag: "Moderator",
        },
      ],
    },
    {
      title: "Youth Against Hunger",
      speakers: [
        {
          name: "Claire Chi",
          title: "Founder, Dancing Against Hunger",
          image: "/images/triibe100/Claire Chi.png",
          linkedin: "#",
          tag: "Next-Gen",
        },
        {
          name: "Gregg Meyer",
          title: "CSO & President, Steve Madden Corporate Foundation",
          image: "/images/summit/GreggMeyer.jpg",
          linkedin: "https://www.linkedin.com/in/gregg-meyer/",
          tag: "Speaker",
        },
        {
          name: "Bella Brown",
          title: "Co-Founder, Living Outside",
          image: "/images/summit/bella1.png",
          linkedin: "https://www.linkedin.com/in/bellabrown369",
          tag: "Next-Gen",
        },
        {
          name: "Robert Lee",
          title: "CEO and Co-Founder, Rescuing Leftover Cuisine",
          image: "/images/summit/RobertLee.jpg",
          linkedin: "https://www.linkedin.com/in/robertlee2/",
          tag: "Speaker",
        },
        {
          name: "Matt Bird",
          title: "CEO, ESG News",
          image: "/images/summit/MattBird.jpg",
          linkedin: "https://www.linkedin.com/in/matt-bird-15908b6/",
          tag: "Moderator",
        },
      ],
    },
    {
      title: "From the Ground Up",
      speakers: [
        {
          name: "Nayla Jimenez",
          title: "Founder, Philippine Health Initiative",
          image: "/images/home/NaylaJimenez.png",
          linkedin: "https://www.linkedin.com/in/naylajimenez/",
          tag: "Next-Gen",
        },
        {
          name: "H.H. Prince Mario Max",
          title: "Media Executive, Speaker, Philanthropist",
          image: "/images/summit/PrinceMarioMax.png",
          linkedin: "#",
          tag: "Speaker",
        },
        {
          name: "Shrusti Amula",
          title: "Founder, Rise N Shine Foundation",
          image: "/images/home/ShrustiAmula.png",
          linkedin: "https://www.linkedin.com/in/shrusti-amula/",
          tag: "Next-Gen",
        },
        {
          name: "Megahan Peterson",
          title: "CIO, The Family Offices Global",
          image: "/images/summit/MegahanPeterson.png",
          linkedin: "https://www.linkedin.com/in/megahan-peterson-3b6b5012/",
          tag: "Speaker",
        },
        {
          name: "Derin Sezgin",
          title: "President, SDG Youth Connect",
          image: "/images/summit/DerinSezgin.png",
          linkedin: "https://www.linkedin.com/in/derinege/",
          tag: "Moderator",
        },
      ],
    },
    {
      title: "Embracing Unlikely Partnerships",
      speakers: [
        {
          name: "Anne-Sophie Frédérick",
          title: "Founder, Haitech Learning",
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ae976ac21db37b22369d_anna.png",
          linkedin:
            "https://www.linkedin.com/in/anne-sophie-frederick-1364ba235/",
          tag: "Next-Gen",
        },
        {
          name: "Jody R. Weiss",
          title: "Exploring Reality, Maybe™ Podcast & Consciousness Drinks™",
          image: "/images/summit/JodyRWeiss.jpg",
          linkedin: "https://www.linkedin.com/in/jody-r-weiss-78ba59/",
          tag: "Speaker",
        },
        {
          name: "Maya Gowda",
          title: "Founder, SEED",
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ca26ae82ac604cfa0e61_maya%2022.png",
          linkedin: "https://www.linkedin.com/in/maya-gowda-a20484240/",
          tag: "Next-Gen",
        },
        {
          name: "Elo",
          title: "Founder, Vice City District",
          image: "/images/summit/elo1.png",
          linkedin: "#",
          tag: "Speaker",
        },
        {
          name: "Kathryn Lancioni",
          title: "Cornell Director, Cayuga Forum",
          image: "/images/summit/KathrynLancioni.jpg",
          linkedin: "https://www.linkedin.com/in/kathrynlancioni335/",
          tag: "Moderator",
        },
      ],
    },
    {
      title: "Care Without Borders",
      speakers: [
        {
          name: "Crystal Yang",
          title: "Founder & CEO, Audemy",
          image: "/images/summit/CrystalYang.png",
          linkedin: "https://www.linkedin.com/in/crustaly/",
          tag: "Next-Gen",
        },
        {
          name: "Holland Haiis",
          title: "Founder, Alchemzing Humanity",
          image: "/images/summit/HollandHaiis.png",
          linkedin: "https://www.linkedin.com/in/hollandhaiis/",
          tag: "Speaker",
        },
        {
          name: "Olivia Zhang",
          title: "Founder, Cancer Kids First",
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68aa07201e49da83227f817d_1%20(1).png",
          linkedin: "https://www.linkedin.com/in/olivia-zhang-a792b8229/",
          tag: "Next-Gen",
        },
        {
          name: "Griffin Pinkow",
          title: "Founder and CEO, Foreseeable Future Foundation",
          image: "/images/summit/GriffinPinkow.png",
          linkedin: "https://www.linkedin.com/in/gpinkow/",
          tag: "Speaker",
        },
        {
          name: "Hayfa Sdiri",
          title: "Co-Founder and CIO, RIVET",
          image: "/images/summit/HayfaSdiri.png",
          linkedin: "https://www.linkedin.com/in/hayfa-sdiri/",
          tag: "Moderator",
        },
      ],
    },

    {
      title: "Upskilling the Next Generation",
      speakers: [
        {
          name: "Gitanjali Rao",
          title: "Founder, Vervient Foundation",
          image: "/images/home/GitanjaliRao.png",
          linkedin: "https://www.linkedin.com/in/gitanjalirao/",
          tag: "Next-Gen",
        },
        {
          name: "Heather White",
          title: "Founder, Verité",
          image: "/images/summit/HeatherWhite.jpg",
          linkedin: "https://www.linkedin.com/in/heatherwhite150/",
          tag: "Speaker",
        },
        {
          name: "Sonali Ratnasinghe",
          title: "Founder, Youth Ambassadors of Service",
          image: "/images/summit/sonali1.png",
          linkedin: "https://www.linkedin.com/in/sonaliratnasinghe",
          tag: "Next-Gen",
        },
        {
          name: "Andrea Holmes Thompkins",
          title: "President & CEO, ACE Media Corp",
          image: "/images/summit/AndreaHolmes.jpg",
          linkedin: "https://www.linkedin.com/in/andreaholmesthompkins/",
          tag: "Speaker",
        },
        {
          name: "Genia Xasis",
          title: "CEO & Founding Partner, Berkana",
          image: "/images/summit/GeniaXasis.jpg",
          linkedin: "https://www.linkedin.com/in/genia-xasis/",
          tag: "Moderator",
        },
      ],
    },
  ];

  const scheduleDays = [
    {
      title: "Day 1, Friday September 11th, Ideal Glass Studios",
      badge: "VIP Gala",
      highlight: {
        image: "/images/summit/Curated1.png",
        label: "ON THE MENU",
        name: "Chef Kim Yong",
        description:
          "Tokyo-trained, Michelin-starred known for single-source bluefin and a minimalist rice program. Curating Friday's tasting and the evening sushi show.",
        bullets: ["Sushi show during Gala", "Fashion show", "Black tie attire"],
      },
      items: [
        {
          time: "5:30 PM",
          title: "VIP reception",
          description: "Drink reception",
        },
        {
          time: "6:30 PM",
          title: "Guests take seats",
          description: "Chime for people to take their seats",
        },
        {
          time: "6:40 PM",
          title: "Gala dinner opening ceremony",
          description:
            "Kyle Matthys gives the welcome, Opening Remarks by Dr. Steven Melnik, Keynote by Kent Seton and James Keyes",
        },
        {
          time: "7:00 PM",
          title: "Sushi show",
          description:
            "Sushi show, small breaks for quick talks and keynotes at select times",
        },
        {
          time: "7:30 PM",
          title: "Fashion show",
          description: "Fashion Show",
        },
        {
          time: "8:00 PM",
          title: "Live auction",
          description: "Pat Tully on stage and guests in participation",
        },
        {
          time: "8:15 PM",
          title: "Music concert",
          description: "Eric Matthys performing live",
        },
        {
          time: "8:30 PM",
          title: "Networking reception",
          description: "Guests mingling to connect with one another",
        },
      ],
    },
    {
      title: "Day 2, Saturday September 12th, Rallypoint East",

      badge: "Forum",
      highlight: {
        image: "/images/TRIIBELOGOS/TRIIBE LOGO.png",
        label: "SATURDAY · PANELS",
        name: "TRIIBE Talks",
        description:
          "A full day of intergenerational discussions across seven panels.",
        bullets: [
          "Starting at 11:10 AM",
          "Rally Point East",
          "All summit attendees",
          "Casual attire",
        ],
      },
      items: [
        {
          time: "10:00 AM",
          title: "Guest Check-In",
          description: "Enjoying the venue",
        },
        {
          time: "11:00 AM",
          title: "Opening ceremony",
          description: "Kyle welcoming talk with Elo before first panel",
        },
        {
          time: "11:10 AM",
          title: "Half a Life of Impact",
          description:
            "Esha Venkat, Lauren Shenkman, Zoe Terry, Mariela Dabbah, Zachary Pogue",
        },
        { time: "11:55 AM", title: "BREAK" },
        {
          time: "12:10 PM",
          title: "The Social Fix",
          description:
            "Samin Bhan, Vin Infante, Varuni Chopra, Chelsea Toler, Hikaru Hayakawa",
        },
        { time: "12:55 PM", title: "BREAK" },
        {
          time: "1:10 PM",
          title: "Youth Against Hunger",
          description:
            "Claire Chi, Gregg Meyer, Bella Brown, Robert Lee, Matt Bird",
        },
        {
          time: "1:55 PM",
          title: "Lunch reception",
          description: "Lunch with diverse food trucks or bars",
        },
        {
          time: "2:40 PM",
          title: "From the Ground Up",
          description:
            "Nayla Jimenez, H.H. Prince Mario Max, Shrusti Amula, Megahan Peterson, Derin Sezgin",
        },
        { time: "3:25 PM", title: "BREAK" },
        {
          time: "3:40 PM",
          title: "Embracing Unlikely Partnerships",
          description:
            "Anne-Sophie Frédérick, Jody R. Weiss, Maya Gowda, Elo, Kathryn Lancioni",
        },
        { time: "4:25 PM", title: "BREAK" },
        {
          time: "4:40 PM",
          title: "Care Without Borders",
          description:
            "Crystal Yang, Holland Haiis, Olivia Zhang, Griffin Pinkow, Hayfa Sdiri",
        },
        { time: "5:25 PM", title: "BREAK" },
        {
          time: "5:40 PM",
          title: "Upskilling the Next Generation",
          description:
            "Gitanjali Rao, Heather White, Sonali Ratnasinghe, Andrea Holmes Thompkins, Genia Xasis",
        },
        {
          time: "6:25 PM",
          title: "Founder recognition",
          description: "Kyle on stage with cohorts thanking audience",
        },
        {
          time: "6:35 PM",
          title: "Reception",
          description: "Networking",
        },
      ],
    },
    {
      title: "Day 3, Sunday September 13th",
      location:
        "Workshop exclusively for TRIIBE Fellows, partners, select actors and artists",
      badge: "Closing Ceremony",
      highlight: null,
      items: [
        {
          time: "11:00 AM",
          title: "Closing ceremony",
          description:
            "Workshop over lunch, connecting with guests, final ceremonies",
        },
        {
          time: "1:00 PM",
          title: "Lunch",
          description:
            "Lunch and reception at venue for celebrities (actors, foundations, musicians) final goodbyes",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSummit />

      <section className="relative pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-white overflow-visible">
        <div className="max-w-260 mx-auto overflow-visible">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002c19] text-center mb-4">
              About the summit
            </h2>

            <p className="text-[#002c19] text-base leading-relaxed">
              Friday's VIP Gala is a 200-guest dinner featuring Michelin-starred
              sushi chefs doing a live tuna carving, keynotes, supercars, an
              auction, and live concert.
              <br />
              <br />
              Saturday's Forum for 300 is a full day featuring seven TRIIBE
              Talks and dozens of supercars.
              <br />
              <br />
              Sunday’s closing ceremony pairs our founders with guests for a
              more reflective end to the weekend.
              <br />
              <br />
              Podcasts on our founders and the summit as a whole release in
              November two weeks before Giving Tuesday.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#002C19] rounded-[10px] overflow-hidden h-[390px] flex">
                <div className="relative w-[42%] min-w-[165px] h-full shrink-0">
                  <Image
                    src="/images/summit/StevenmelnikHeadshot.png"
                    alt="Dr. Steven V. Melnik"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 42vw, 165px"
                    priority
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-end px-5 pb-8">
                  <h4 className="text-white font-bold text-[18px] leading-[1.15] mb-5">
                    Dr. Steven V. Melnik
                  </h4>

                  <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                    Chairman, United World Leaders, Lives Amplified
                  </p>

                  <p className="text-white text-lg leading-snug">
                    Opening Gala Remarks
                  </p>
                </div>
              </div>

              <div className="bg-[#002C19] rounded-[10px] overflow-hidden h-[390px] flex">
                <div className="relative w-[40%] min-w-[165px] h-full shrink-0">
                  <Image
                    src="/images/summit/KentSeton.png"
                    alt="Kent Seton"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 42vw, 165px"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-end px-5 pb-8">
                  <h4 className="text-white font-bold text-[18px] leading-[1.15] mb-5">
                    Kent Seton
                  </h4>

                  <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                    CEO, Edward Charles Foundation
                  </p>

                  <p className="text-white text-lg leading-snug">
                    Keynote Speaker
                  </p>
                </div>
              </div>

              <div className="bg-[#002C19] rounded-[10px] overflow-hidden h-[390px] flex">
                <div className="relative w-[40%] min-w-[165px] h-full shrink-0">
                  <Image
                    src="/images/summit/JamesKeyes.png"
                    alt="James Keyes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 42vw, 165px"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-end px-5 pb-8">
                  <h4 className="text-white font-bold text-[18px] leading-[1.15] mb-5">
                    James Keyes
                  </h4>

                  <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                    Former CEO, 7-Eleven &amp; Blockbuster
                  </p>

                  <p className="text-white text-lg leading-snug">
                    Keynote Speaker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-white">
        <div className="max-w-260 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002c19] text-center mb-12">
            Curated experiences
          </h2>

          <div className="max-w-260 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Tuna carving by Chef Kim Yong",
                  image: "/images/summit/Curated1.png",
                },
                {
                  name: "Fashion show",
                  image: "/images/summit/fashionShow.jpeg",
                },
                {
                  name: "Vice city district super car street takeover",
                  image: "/images/summit/supercar_street.jpeg",
                },
                // { name: "Food trucks", image: "/images/summit/Curated4.png" },
                // {
                //   name: "Musical performance",
                //   image: "/images/summit/Curated5.png",
                // },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="relative w-full h-[390px] rounded-[10px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <p className="text-sm text-center text-[#002c19]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-20 px-4 md:px-25 lg:px-50 bg-white">
        <div className="max-w-260 mx-auto">
          <div className="flex justify-center">
            <div className="bg-[#002C19] rounded-[10px] overflow-hidden h-[390px] w-full md:w-[calc((100%-48px)/3)] flex">
              <div className="relative w-[40%] min-w-[165px] h-full shrink-0">
                <Image
                  src="/images/summit/Chirag-Nijjer.png"
                  alt="Chirag Nijjer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 250px"
                  quality={100}
                  priority
                />
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-end px-5 pb-8">
                <h4 className="text-white font-bold text-[18px] leading-[1.15] mb-5">
                  Chirag Nijjer
                </h4>

                <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                  Brand Historian, History Channel; Resident Brand Evangelist,
                  Google
                </p>

                <p className="text-white text-lg leading-snug">MC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-[#F5F5F5]">
        <div className="max-w-260 mx-auto flex flex-col gap-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002c19] text-center">
            TRIIBE Talks
          </h2>

          {panels.map((panel, panelIndex) => (
            <div key={panelIndex} className="flex flex-col gap-8">
              <h3 className="text-2xl font-bold text-[#002c19] border-b border-gray-300 pb-2">
                {panel.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
                {panel.speakers.map((speaker, i) => (
                  <a
                    key={i}
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[260px] ${speaker.linkedin === "#" ? "pointer-events-none" : ""}`}
                  >
                    <div className="relative w-full aspect-[4/3] bg-gray-200">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover object-top"
                      />

                      <span
                        className={`absolute top-0 left-0 text-[10px] font-semibold px-3 py-1 rounded-br-xl ${
                          speaker.tag === "Speaker"
                            ? "bg-black text-white"
                            : speaker.tag === "Moderator"
                              ? "bg-gray-200 text-gray-600"
                              : "bg-[#D8EFE4] text-[#002c19]/80"
                        }`}
                      >
                        {speaker.tag}
                      </span>
                    </div>

                    <div className="p-4 flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-semibold text-[#002c19] text-sm tracking-tight truncate">
                          {speaker.name}
                        </p>
                        {speaker.linkedin !== "#" && (
                          <svg
                            className="w-4 h-4 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="#0A66C2"
                          >
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                          </svg>
                        )}
                      </div>

                      <p className="text-xs text-[#002c19]/80 leading-tight whitespace-pre-line">
                        {speaker.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* <p className="text-center text-sm text-[#002c19]/80 mt-4">
            more speakers coming soon...
          </p> */}
        </div>
      </section>

      <section className="pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-white">
        <div className="max-w-260 mx-auto flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002c19] text-center">
            Schedule
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

                        {item.title === "BREAK" ? (
                          <div className="flex items-center gap-4 w-full">
                            <div className="flex-1 h-px bg-gray-300"></div>

                            <span className="text-xs text-[#002c19]/80 tracking-[0.3em]">
                              BREAK
                            </span>

                            <div className="flex-1 h-px bg-gray-300"></div>
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-[#002c19] mb-2">
                              {item.title}
                            </p>

                            {item.description && (
                              <p className="text-xs text-[#002c19]/80">
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

              {day.title.startsWith("Day 1") && (
                <div className="bg-[#F5F5F5] rounded-2xl p-6 md:p-8">
                  <div className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="relative w-full md:w-64 lg:w-72 h-56 md:h-auto min-h-[220px] flex-shrink-0">
                      <Image
                        src="/images/summit/bus.jpeg"
                        alt="Private transportation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 288px"
                      />
                    </div>

                    <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
                      <p className="text-xs font-semibold text-[#002c19]/70 uppercase tracking-[0.2em]">
                        SATURDAY · PRIVATE TRANSPORT
                      </p>

                      <h3
                        className="text-2xl md:text-3xl italic text-[#002c19]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Private transport to and from Saturday's venue
                      </h3>

                      <p className="text-sm md:text-base text-[#002c19]/80 leading-relaxed max-w-2xl">
                        Private transport to and from Saturday's venue will
                        leave from Ideal Glass Studios at 9AM and will return
                        from Rallypoint East at 7:30 PM.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section
        className="pt-20 pb-20 px-4 md:px-25 lg:px-50 bg-[#3036411A]"
        id="tickets"
      >
        <div className="max-w-260 mx-auto flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002c19] text-center ">
            Buy tickets
          </h2>

          <div className="w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-5 h-full">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold text-[#002c19]">
                    VIP Pass
                  </h3>

                  <p className="text-base font-medium text-[#002c19]/80">
                    Includes:
                  </p>
                </div>

                <ul className="flex flex-col gap-4 text-[#002c19] text-base leading-relaxed list-disc pl-5">
                  <li>
                    Friday gala dinner featuring a live tuna carving show,
                    opening ceremony, cocktail reception, and fashion show.
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-5 h-full">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold text-[#002c19]">
                    Saturday Only
                  </h3>

                  <p className="text-base font-medium text-[#002c19]/80">
                    Includes:
                  </p>
                </div>

                <ul className="flex flex-col gap-4 text-[#002c19] text-base leading-relaxed list-disc pl-5">
                  <li>
                    Saturday includes 7 TRIIBE Talks, the supercar showcase, and
                    closing reception.
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3 text-center">
              <p className="font-semibold text-[#002c19]">
                Ticket pricing increases
              </p>

              <p className="text-[#002c19]">
                Next price increase: <strong>June 1</strong>
              </p>

              <div className="flex flex-col items-center mt-1">
                <p className="text-xs text-[#002c19]/80">Price increases in</p>
                <div className="text-sm text-[#002c19] font-medium">
                  <Countdown targetDate="2026-06-01T00:00:00" />
                </div>
              </div>

              <p className="mt-2 text-[#002c19]">
                Final price increase: <strong>August 1</strong>
              </p>

              <div className="flex flex-col items-center mt-1 gap-1">
                <p className="text-xs text-[#002c19]/80">
                  Final price increase in
                </p>
                <div className="text-xs text-[#002c19]/80 font-medium">
                  <Countdown targetDate="2026-08-01T00:00:00" />
                </div>
              </div>
            </div> */}
          </div>

          <div className="w-full max-w-4xl mx-auto min-h-[600px]">
            {createElement("givebutter-widget", { id: "gKZZ35" })}
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
