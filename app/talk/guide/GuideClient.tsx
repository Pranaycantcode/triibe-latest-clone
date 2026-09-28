"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function TriibeTalkGuidePage() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50">
        <div className="max-w-300 mx-auto text-[#002c19] space-y-16">
          <div className="w-full mb-8 flex justify-start">
            <Link
              href="/talk"
              className="inline-flex items-center text-[#002c19] hover:opacity-75 font-semibold transition-opacity text-base"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to TRIIBE Talk
            </Link>
          </div>
          <div className="text-center pb-4 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-2xl h-32 md:h-48 mb-6 flex items-center justify-center">
              <Image
                src="/images/TRIIBELOGOS/TRIIBETALKLOGO.png"
                alt="TRIIBE Talk"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xl md:text-2xl opacity-90 font-light mb-10">
              A guide to hosting a TRIIBE Talk in your community.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              TRIIBE Talk format
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              A TRIIBE Talk is a moderated, intergenerational conversation
              featuring next-gen voices. TRIIBE Talks are designed to be
              adaptable. They can take place in universities, community spaces,
              offices, or public venues of any size, as long as the format
              remains intact.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              TRIIBE Talk requirements
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              To maintain consistency and protect the integrity of the TRIIBE
              community, events using the name TRIIBE Talk, as well as the
              TRIIBE logo and visual materials, must be approved by the TRIIBE
              team and meet the following requirements:
            </p>
            <ol className="list-decimal pl-5 space-y-3 opacity-90 text-lg">
              <li>
                Each TRIIBE Talk follows the core format: at least two next-gen
                voices (preferrably nonprofit founders) and one moderator under
                the age of 30.
              </li>
              <li>
                TRIIBE Talks can focus on topics so long as they remain
                apolitical.
              </li>
              <li>
                All speakers, moderators, and organizers must complete the
                TRIIBE Talk participation alignment form prior to the event.
              </li>
            </ol>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Event planning timeline
            </h2>
            <p className="text-lg leading-relaxed opacity-90 mb-4">
              While every TRIIBE Talk is unique, most follow a preparation
              timeline of four to eight weeks.
            </p>

            <div className="grid gap-6">
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10 flex flex-col items-start gap-4">
                <div>
                  <h3 className="font-bold text-xl mb-2">8 weeks before:</h3>
                  <p className="opacity-90">
                    Select the date, topic, and initial speakers. The venue does
                    not need to be finalized before confirming speakers. Once
                    speakers and venue are confirmed, submit your TRIIBE Talk
                    proposal for approval. TRIIBE will create the official
                    registration page and help promote the event.
                  </p>
                </div>
                <Link
                  href="/talk/host"
                  target="_blank"
                  className="inline-flex items-center justify-center h-[36px] px-6 rounded-sm font-semibold text-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-all duration-300 mt-2"
                >
                  Submit your TRIIBE Talk proposal
                </Link>
              </div>
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-2">4 weeks before:</h3>
                <p className="opacity-90">
                  Share the event with your community and networks. Aligned
                  organizations may cohost the event with approval from TRIIBE.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-2">2 weeks before:</h3>
                <p className="opacity-90">
                  Work with your moderator and speakers to finalize the flow of
                  the conversation. Hosts may use the TRIIBE Talk preparation
                  checklist to ensure event logistics are ready.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-2">Event week:</h3>
                <p className="opacity-90">
                  Send reminders, ensure all speakers sign the TRIIBE Talk
                  participation alignment form, prepare the space, and focus on
                  creating a welcoming environment for meaningful discussion.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Speaker guidelines
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                TRIIBE Talks are designed to be practical, inspiring, and
                solutions-oriented conversations. Speakers should share real
                experiences, lessons learned, and ideas that move the discussion
                forward. At the end of each TRIIBE Talk, please take a group
                photo with all speakers present.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                To keep the conversation dynamic, speakers should keep responses
                concise, build on one another&apos;s comments, and focus on
                stories, real-world examples, and clear calls to action.
              </p>

              <div className="pt-2">
                <Link
                  href="/talk/speakerbrief"
                  className="inline-flex items-center justify-center h-[36px] px-6 rounded-sm font-semibold text-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-all duration-300 mt-2"
                >
                  View full speaker brief
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                TRIIBE Talk example schedule
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-[#002c19] bg-[#002c19]/5">
                      <th className="p-4 font-bold w-1/4">Time stamp</th>
                      <th className="p-4 font-bold w-1/4">Segment</th>
                      <th className="p-4 font-bold w-1/2">Description</th>
                    </tr>
                  </thead>
                  <tbody className="opacity-90">
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        1-2 hours prior
                      </td>
                      <td className="p-4 font-medium">
                        Host arrival & final setup
                      </td>
                      <td className="p-4">
                        Prepare the space and ensure microphones, seating,
                        photography or videography, and any food or drink are
                        ready.
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        30 minutes prior
                      </td>
                      <td className="p-4 font-medium">
                        Speakers and early arrival
                      </td>
                      <td className="p-4">
                        Speakers arrive, meet with one another, and get settled
                        into the space
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        0:00 - 0:10
                      </td>
                      <td className="p-4 font-medium">Welcome guests</td>
                      <td className="p-4">
                        Welcome guests as they arrive and allow time for
                        attendees to settle in.
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        0:10 - 0:15
                      </td>
                      <td className="p-4 font-medium">Host introduction</td>
                      <td className="p-4">
                        The host welcomes attendees and introduces the purpose
                        of the TRIIBE Talk.
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        0:15 - 0:45
                      </td>
                      <td className="p-4 font-medium">Moderated panel</td>
                      <td className="p-4">
                        Thirty minutes typically allows for two
                        questions, with speakers responding for approximately
                        three minutes each.
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        0:45 - 0:55
                      </td>
                      <td className="p-4 font-medium">Audience Q&A</td>
                      <td className="p-4">
                        Audience members are invited to ask questions and engage
                        directly with the speakers.
                      </td>
                    </tr>
                    
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        0:55 - 1:00
                      </td>
                      <td className="p-4 font-medium">Closing speech</td>
                      <td className="p-4">
                        The host thanks attendees for coming.
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        1:00 - 2:00
                      </td>
                      <td className="p-4 font-medium">Community building</td>
                      <td className="p-4">
                        Take a group photo with all speakers present and allow
                        time for informal conversation.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm italic opacity-75 mt-2">
                Additional note: If you&apos;re planning to host two TRIIBE
                Talks, allow for a 15 minute break after Q&A, then continue with
                the second 30 minute panel before community building.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Discussion questions
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              TRIIBE Talks are designed to spark thoughtful dialogue across
              generations. Moderators are encouraged to adapt these prompts
              while keeping the conversation focused on real experiences,
              practical solutions, and inspiration for future changemakers.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Moderators are encouraged to begin with questions that focus on a
              speaker&apos;s work or motivations rather than a formal
              introduction, allowing the conversation to move quickly into ideas
              and impact. Below are a few themes to consider when creating
              questions:
            </p>
            <div className="bg-[#002c19]/5 p-6 md:p-8 rounded-xl mt-4">
              <ul className="space-y-3 opacity-90 text-lg mb-6">
                <li>
                  <strong>The origin tension:</strong> What did you see that
                  everyone else was looking at but not acting on?
                </li>
                <li>
                  <strong>Hard truths:</strong> What is one thing about your
                  field most people in this room may not want to hear?
                </li>
                <li>
                  <strong>What actually worked:</strong> What is one decision
                  that changed your trajectory, and what would you tell someone
                  facing it now?
                </li>
                <li>
                  <strong>The unpopular bet:</strong> What unrealistic idea
                  today do you think will be mainstream in a decade?
                </li>
                <li>
                  <strong>The trade:</strong> What did progress cost you, and
                  was it worth it?
                </li>
              </ul>

              <Link
                href="https://drive.google.com/file/d/1ZHmC7HoREj9zBfCeLJjoFh8yYaOGnner/view"
                target="_blank"
                className="inline-flex items-center justify-center h-[36px] px-6 rounded-sm font-semibold text-[12px] md:text-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-all duration-300 mt-2"
              >
                View example questions (UN Global Compact TRIIBE Talk)
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Branding and visual templates
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                To keep TRIIBE Talks visually consistent around the world,
                we&apos;ve created a set of official TRIIBE Talk templates. Once
                your TRIIBE Talk is confirmed, the TRIIBE team will create the
                official event registration page, add your speakers and
                moderator to the graphic, and share the link with you to
                distribute to your community. Templates can also be used to
                invite speakers, partners, and attendees.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="w-full md:col-span-1 bg-[#002c19] rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/triibetalk/talk1New.png"
                    alt="Template Example 1"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="w-full md:col-span-2 bg-[#002c19] rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/triibetalk/talk2New.png"
                    alt="Template Example 2"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Participant alignment form
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                All speakers, moderators, and organizers participating in a
                TRIIBE Talk should complete the TRIIBE Talk Participation
                Alignment Form prior to the event.
              </p>

              <p className="text-lg leading-relaxed opacity-90 mt-4">
                By participating in a TRIIBE Talk event, the undersigned
                acknowledges that their participation is voluntary and does not
                constitute an employment relationship with TRIIBE. The
                undersigned also acknowledges that TRIIBE Talk events may be
                photographed, filmed, or recorded, and grants TRIIBE permission
                to use their image, voice, and likeness in photographs, video,
                or audio recordings for educational, promotional, and archival
                purposes.
              </p>

              <a
                href="https://app.signnow.com/webapp/document/c9483a4cd4a348aba2ed89029d2efd8f3e79d5c5?dispatched=true&mobileweb=app_or_mobileweb_choice&redirect_uri=https%253A%252F%252Fapp.signnow.com%252Fhtml%252Fthanks-for-signing%253Fdocument_id%253Dc9483a4cd4a348aba2ed89029d2efd8f3e79d5c5%2526access_token%253D3da38e8d274800443d59711b908e70b34d75a95e5ff191719b07d7477b9c2a73&sign=1&source=link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105 mt-4"
              >
                Review & sign the alignment form
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Promoting your TRIIBE Talk
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                Once your TRIIBE Talk registration page is created, share the
                event link and graphics with your community, networks, and local
                partners. TRIIBE will do the same on our platforms. Inviting
                organizations aligned with the topic can help broaden the
                conversation and reach new audiences.
              </p>
            </div>

            {/* Social Links */}

            <div className="max-w-xl  px-6 pb-8">
              {/* <h3 className="text-2xl font-bold text-center text-[#002c19] mb-8">
                        Connect with us
                      </h3> */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-28  mx-auto">
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

            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                After your TRIIBE Talk
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                Immediately following the TRIIBE Talk, hosts are encouraged to
                allow time for informal discussion so attendees and speakers can
                continue the dialogue. Hosts should also share photos or
                recordings, including a group photo of the panelists, with
                TRIIBE.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Before leaving the venue, please help reset the space and ensure
                it is left as it was found. TRIIBE Talks rely on the generosity
                of community spaces, universities, and partners. Caring for the
                venue helps ensure these spaces can continue hosting future
                TRIIBE Talks.
              </p>
            </div>

            <div className="space-y-6 bg-[#002c19] text-white p-8 md:p-12 rounded-2xl shadow-xl flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl font-bold pb-2">
                Continuing the TRIIBE movement
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                We are the most interconnected generation in history. Ideas,
                stories, and solutions travel across borders faster than ever
                before. A single conversation may inspire a room. But when
                conversations happen across cities, campuses, communities,
                countries, and continents, they begin to shape a movement.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                TRIIBE Talks create space for next-gen voices to share ideas
                before we are defined by labels or limited by background,
                whether by geography, race, religion, or circumstance.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                If hosting a TRIIBE Talk is a spark, founding a TRIIBE Branch is
                the fuel. If your community is ready to support
                philentrepreneurs, TRIIBE is here to help you establish a branch
                and channel capital to next-gen nonprofit founders.
              </p>

              <Link
                href="/branch"
                target="_blank"
                className="inline-flex items-center justify-center h-[44px] px-8 rounded-sm font-semibold text-sm bg-white text-[#002c19] hover:bg-gray-100 transition-all duration-300 mt-0"
              >
                TRIIBE branch playbook
              </Link>
            </div>
          </div>

          <div className="pt-6 text-center space-y-8">
            <section className="pb-12 w-full">
              <div className="w-full max-w-[1200px] mx-auto transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-2xl md:text-3xl font-medium text-[#002c19] text-left">
                    Download the TRIIBE Talk guide
                  </p>

                  <a
                    href="/triibe-talk-guide.pdf"
                    download="TRIIBE_Talk_Guide.pdf"
                    className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105"
                  >
                    Download here
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

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
                className="w-full text-base text-[#002c19]/80 hover:text-[#002c19] transition-colors"
              >
                No, thank you
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
