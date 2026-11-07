"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";

const faqs = [
  {
    question: "What is TRIIBE?",
    answer:
      "TRIIBE is a 501(c)(3) nonprofit backing nonprofit founders under 30, bringing startup dynamics to the nonprofit sector. The next gen will inherit the world's problems, and we back the leaders already solving them. TRIIBE is the pipeline philanthropy has been missing, giving next-gen founders funding, operational support, and visibility through the TRIIBE I00, TRIIBE Talk, TRIIBE Grants, and the annual Next-Gen Summit.",
  },
  {
    question: "What is TRIIBE's mission?",
    answer:
      "TRIIBE exists to maximize return on impact and investment for philentrepreneurs. We find the nonprofit founders under 30 already doing the work, back them with funding, operational support, and visibility, and measure the social return of every dollar so the value of their impact, and of our support, is clear.",
  },
  {
    question: "Why does TRIIBE exist?",
    answer:
      "All seed, no soil. The nonprofit sector has no startup engine because the incentives that build one don't exist. There are no returns: a funder can't take a share of the profit. There's no commission: a fundraiser can't earn a share of the raise. And there's no equity: a funder can't own a share of the business. But a startup ecosystem is necessary for philanthropic innovation, because only a founder with nothing yet to protect can afford to fail. So if incentives won't build the startup ecosystem, we will. We built a TRIIBE. Read the full case in our report, The Missing Layer, at triibe.org/the-missing-layer.",
  },
  {
    question: "What does TRIIBE do?",
    answer:
      "TRIIBE builds the nonprofit startup ecosystem through four programs. The TRIIBE I00 is the annual index of leading nonprofit founders under 30 to know, providing funding, operational support, and social return on investment measured with Purposefy. TRIIBE Talk hosts intergenerational conversations featuring next-gen voices, on a decentralized stage anyone can run. TRIIBE Grants is the largest grant database in the world, free for anyone to search. And the Next-Gen Summit is the annual gathering of the TRIIBE I00 in New York City. TRIIBE Talk and TRIIBE Grants are free services for the entire nonprofit sector, built for our hundred but open to all.",
  },
  {
    question: "What does next-gen for next-gen mean?",
    answer:
      "It means TRIIBE was built by young people, for young people. Not an established institution looking down to help, but a community of changemakers under 30 building the infrastructure they wish had existed for them, so the next generation doesn't have to figure it out alone. Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE.",
  },
  {
    question: "What is a philentrepreneur?",
    answer:
      "A philentrepreneur builds a nonprofit the way an entrepreneur builds a startup: starting from nothing, taking real risks, and measuring results. The difference is the return. A philentrepreneur measures success in impact. The founders in the TRIIBE I00 are next-gen philentrepreneurs, and TRIIBE exists to maximize their return on impact and investment.",
  },
  {
    question: "Where is TRIIBE located?",
    answer:
      "TRIIBE is headquartered in New York City, where we host the annual Next-Gen Summit. Our reach is global: TRIIBE has Managing Directors in Singapore and India, the founders in the TRIIBE I00 represent 23 countries, TRIIBE Talks are hosted by local organizers around the world, and anyone can start a TRIIBE branch using the branch guide at triibe.org/branch.",
  },
  {
    question: "Who are TRIIBE's Managing Directors?",
    answer:
      "TRIIBE's global team includes two Managing Directors: Laya Pothunuri in Singapore and Satyam Pandey in India. Anyone who wants to bring TRIIBE to their own city or campus can start a branch using the guide at triibe.org/branch.",
  },
  {
    question: "How can I start a TRIIBE branch?",
    answer:
      "TRIIBE branches bring the community to new cities and campuses. Everything you need to get started is in the branch guide at triibe.org/branch. Questions along the way can go to partnerships@triibe.org.",
  },
  {
    question: "Is TRIIBE a registered nonprofit?",
    answer:
      "Yes. TRIIBE is a registered 501(c)(3) nonprofit (EIN 33-2683719) and holds the Candid Platinum Transparency Seal, the highest level of transparency awarded by Candid (formerly GuideStar). Donations to TRIIBE are tax-deductible.",
  },
  {
    question: "Is TRIIBE part of any larger organization?",
    answer:
      "TRIIBE is an independent member of United World Leaders. United World Leaders exercises no operational control over, and assumes no responsibility for, the activities of TRIIBE.",
  },
  {
    question: "What is the TRIIBE I00?",
    answer:
      "The TRIIBE I00 is TRIIBE's annual index of the nonprofit founders under 30 to know. Together, the index represents 23 countries, 653 years of nonprofit leadership, and $15.5M raised last year. Fellows average 6.5 years already leading their foundations. Measured by Purposefy, every dollar donated to these next-gen philentrepreneurs yields $3.60 in social return. Meet them at triibe.org/100.",
  },
  {
    question: "How does TRIIBE choose the TRIIBE I00?",
    answer:
      "We research every founder's work before an interview. Then a 30-minute call lets us get to know them as people. We measure each founder's social return on investment with Purposefy, so the value of their impact, and of our support, is clear. And we back founders with years of impact already behind them. Capital distributed across the index is backed by interviews, financial review, and audits.",
  },
  {
    question: "What do TRIIBE I00 fellows receive?",
    answer:
      "Three things. Funding: TRIIBE raises capital, distributed quarterly across the index and backed by interviews, financial review, and audits. Mentorship and operational support: software, legal, and operating support for every founder, plus mental health support and AI upskilling. Visibility: fellows are featured by TRIIBE, connected to founders and funders, and put on stage at the annual Next-Gen Summit in front of peers, donors, and press.",
  },
  {
    question: "Who is in the TRIIBE I00?",
    answer:
      "The TRIIBE I00 includes founders such as Gitanjali Rao (Vervient Foundation), Olivia Zhang (Cancer Kids First), Trisha Prabhu (ReThink Citizens), Kehkashan Basu (Green Hope Foundation), Anna Luísa Beserra (Sustainable Development & Water For All), and Alexia Hilbertidou (GirlBoss New Zealand). Their work spans food, water, health, education, climate, civic engagement, and more. Meet every founder at triibe.org/100.",
  },
  {
    question: "What have TRIIBE I00 founders accomplished?",
    answer:
      "Together, the TRIIBE I00 has raised $15.5M and brings 653 years of nonprofit leadership. A few highlights from 2025: Olivia Zhang founded Cancer Kids First in 2019 and built it into the largest youth cancer nonprofit in the world, with 40,000 volunteers providing young cancer patients and families with goods and services. She is a Forbes 30 Under 30 honoree and L'Oreal Woman of Worth. Samin Bhan, a Cameron Impact Scholar and Young Futures grantee, founded Lookupp in 2021 and developed an app facilitating 11,000 hours of social interaction to curb social media addiction. Gitanjali Rao, Forbes 30 Under 30 and TIME's first ever Kid of the Year, founded Vervient Foundation in 2018 and has hosted 700 workshops helping 150,000 students from 55 countries discover their passion for innovation and STEM.",
  },
  {
    question: "Who is eligible for the TRIIBE I00?",
    answer:
      "The TRIIBE I00 is for nonprofit founders under 30 who are leading organizations with real impact behind them. Fellows average 6.5 years already leading their foundations, so TRIIBE looks for founders who have been building for years, not founders who are just getting started.",
  },
  {
    question: "How can I be considered for the TRIIBE I00?",
    answer:
      "There's no pitch deck. TRIIBE researches each founder's work, then gets to know them through a 30-minute conversation. If you'd like to be considered, or want to recommend a founder TRIIBE should know, email partnerships@triibe.org and tell us about the work.",
  },
  {
    question: "What happens if I'm not selected for the TRIIBE I00?",
    answer:
      "Not being selected this year doesn't mean TRIIBE isn't for you. The index is annual, and many extraordinary founders are still building their track record. Keep going, use TRIIBE Grants to find funding for free, share your story at a TRIIBE Talk, and stay connected through the TRIIBUNE newsletter. The door isn't closed. It's just a different timeline.",
  },
  {
    question: "Can founders outside the United States join TRIIBE?",
    answer:
      "Yes. The TRIIBE I00 represents founders from 23 countries, TRIIBE Talks are hosted around the world, and TRIIBE Grants searches funding across the globe. Wherever you're building, there's a place for you in the TRIIBE.",
  },
  {
    question: "How does TRIIBE measure impact?",
    answer:
      "TRIIBE measures each founder's social return on investment with Purposefy, so the value of their impact, and of our support, is clear. Across the TRIIBE I00, every dollar donated yields $3.60 in social return.",
  },
  {
    question: "What is the monthly Meet the TRIIBE I00 session?",
    answer:
      "The relationships that carry a founder for decades often start with a real conversation, not a pitch. Once a month, TRIIBE invites every donor giving $1K or more to meet the TRIIBE I00: one hour of one-on-one conversations, in four rounds of 15 minutes. Sessions run the 4th Monday of every month at 12pm ET.",
  },
  {
    question: "What is TRIIBE Talk?",
    answer:
      "TRIIBE Talk is a decentralized stage and the playbook to run it. TRIIBE Talks are intergenerational conversations featuring next-gen voices, putting established leaders and founders under 30 in real dialogue to show that age doesn't determine the quality of someone's ideas. TRIIBE Talk is endorsed by Lara Stein, founder of TEDx and TRIIBE Legacy Board member, and is free and open to the entire nonprofit sector.",
  },
  {
    question: "Where do TRIIBE Talks happen?",
    answer:
      "Anywhere a host decides to run one. TRIIBE Talks happen in person and virtually around the world, each one hosted by a local organizer and shaped for their community. That's what makes the network decentralized, not just internationally branded. See upcoming and past events at triibe.org/talk.",
  },
  {
    question: "How can I host a TRIIBE Talk?",
    answer:
      "Anyone can run a TRIIBE Talk. Register to host at triibe.org/talk/host. The TRIIBE Talk Guide (triibe.org/talk/guide) is the playbook for running one, and the Speaker Brief (triibe.org/talk/speakerbrief) helps your speakers prepare. TRIIBE brings the framework, the brand, and the community. You bring the local knowledge, the space, and the voices.",
  },
  {
    question: "Where can I watch TRIIBE Talks?",
    answer:
      "TRIIBE Talks are on YouTube at @TRIIBEorg, with recent conversations like Nancy Bonges on first-generation wealth building at William Blair. You can also listen on Spotify and follow clips on Instagram (@triibe__talk) and TikTok (@triibetalk). Upcoming events are listed at triibe.org/talk.",
  },
  {
    question: "What is the TRIIBUNE?",
    answer:
      "The TRIIBUNE is TRIIBE's monthly newsletter, sharing the latest updates, founder stories, and community news. Read the newest edition at triibe.org/talk.",
  },
  {
    question: "What is TRIIBE Grants?",
    answer:
      "TRIIBE Grants is the largest grant database in the world, free for anyone to search. It's the only grants platform built for next-gen founders: an AI-powered database for search, application, and submission tracking. Most grants are never publicly posted. TRIIBE Grants finds them anyway: fully vetted, enriched daily, matched to your mission, and drafted in minutes. TRIIBE Grants is powered by GrantAuthority and endorsed by Jax Harrison, Grant Authority co-founder and TRIIBE Legacy Board member. Start at triibe.org/grants.",
  },
  {
    question: "How does TRIIBE Grants work?",
    answer:
      "Three steps. Find: describe your mission and what you're looking for, and the AI search narrows down the funding best for you. Qualify: review fit, deadlines, requirements, and the original source of funds before pursuing. Apply: turn a qualified opportunity into an organized, stronger submission. An application draft takes about 12 minutes.",
  },
  {
    question: "Is TRIIBE Grants free?",
    answer:
      "Yes. Searching is free, with no card needed to browse every live grant and the whole funding network. For founders who want full applications drafted and verified, paid plans are available at the TRIIBE rate: 20% off your first three monthly payments, or 20% off the full first year when paid annually. See current plans at triibe.org/grants.",
  },
  {
    question: "Who can use TRIIBE Grants?",
    answer:
      "Anyone. TRIIBE Grants is built for our hundred but open to all, and it's free for anyone to search, wherever they are and whatever stage their nonprofit is at.",
  },
  {
    question: "Where can young nonprofit founders find grants?",
    answer:
      "Start with TRIIBE Grants at triibe.org/grants. It's free to search and surfaces grants that are never publicly posted, matched to your mission, with the original source of funds so you can qualify each opportunity before you apply. Founders under 30 with years of impact behind them can also be considered for the TRIIBE I00, which raises funds distributed quarterly to fellows.",
  },
  {
    question: "What is unrestricted funding and why is it rare?",
    answer:
      "Unrestricted funding means a nonprofit can spend the money however it judges best: staff, overhead, technology, any operational need. Most grants are restricted to specific programs, leaving founders unable to cover basic costs even when they have money. It's rare because it requires funders to trust the founder, not just the program. TRIIBE Grants helps founders see each grant's requirements up front, so they can pursue the funding that fits how their organization actually runs.",
  },
  {
    question: "What is the difference between a restricted and unrestricted grant?",
    answer:
      "A restricted grant specifies exactly how the money must be spent, such as a particular program or budget line. An unrestricted grant can be used for anything the nonprofit needs: operations, salaries, technology, overhead. Restricted grants are more common, but young organizations still building their infrastructure often need flexibility most. TRIIBE Grants shows the requirements of every opportunity during the Qualify step, before you spend time applying.",
  },
  {
    question: "Why does TRIIBE focus on nonprofit founders under 30?",
    answer:
      "Because that's where the missing layer is. Founders under 30 are old enough to lead real organizations, often with years of results behind them, but still shut out of mainstream philanthropy, which tends to fund what's already established. Without early backers, great nonprofits stall before they ever get the chance to scale. TRIIBE backs founders in exactly that window.",
  },
  {
    question: "Why does TRIIBE focus on next-gen founders and not experienced nonprofit leaders?",
    answer:
      "Experienced nonprofit leaders already have access to funding, networks, credibility, and institutional support. Next-gen founders have almost none of that. TRIIBE exists to close a specific gap, not to duplicate what already exists. Business has a startup engine that backs founders early. Philanthropy doesn't, so TRIIBE is building one.",
  },
  {
    question: "Can someone over 30 get involved with TRIIBE?",
    answer:
      "Absolutely. The TRIIBE I00 is for founders under 30, but TRIIBE is intergenerational by design. Speak at a TRIIBE Talk alongside next-gen voices. Host a Talk in your city. Donate, and join the monthly Meet the TRIIBE I00 sessions as a donor giving $1K or more. Partner with TRIIBE as an organization, or attend the Next-Gen Summit. Reach out at partnerships@triibe.org.",
  },
  {
    question: "Do I need to be in college to be part of TRIIBE?",
    answer:
      "No. TRIIBE backs nonprofit founders under 30, whatever path they're on. Some founders in the TRIIBE I00 are students, others are leading full-time. What matters is that you're building something real and leading it actively.",
  },
  {
    question: "What is a next-gen foundation?",
    answer:
      "A next-gen foundation is a nonprofit founded and led by someone under 30, built to address real community needs. Next-gen founders bring urgency, lived experience, and proximity to the problems they're solving. TRIIBE exists to make sure those foundations survive, scale, and sustain beyond the founder's early years.",
  },
  {
    question: "What impact areas do TRIIBE founders work in?",
    answer:
      "TRIIBE founders work on the world's most pressing problems, from food security, clean water, shelter, health, and education to climate, civic engagement, and access to technology. Across 23 countries, what connects them isn't one cause. It's that each founder has years of impact behind them and is still building.",
  },
  {
    question: "Why do so many young nonprofit founders lose their funding?",
    answer:
      "Many funders that back youth founders stop once the founder ages out, while funders built for established nonprofits want a longer track record. The work doesn't get worse. The label changes. Founders end up carrying real organizational responsibility with less funding and fewer peers who understand. TRIIBE was built for exactly this gap.",
  },
  {
    question: "I started a nonprofit young and I'm losing funding. What do I do?",
    answer:
      "You're not alone, and this is exactly the problem TRIIBE was built to solve. Start by searching TRIIBE Grants for free at triibe.org/grants to find funding matched to your mission. Join or host a TRIIBE Talk to build visibility. And if you're under 30 with years of leadership behind you, email partnerships@triibe.org to tell us about your work. You don't have to figure this out alone.",
  },
  {
    question: "Is there funding available for college students running a nonprofit?",
    answer:
      "Yes. TRIIBE Grants is free to search and built for next-gen founders, including students. It surfaces grants that are never publicly posted and helps you draft applications in minutes. Students who have been leading their nonprofits for years can also be considered for the TRIIBE I00. Start at triibe.org/grants.",
  },
  {
    question: "Is there a program for nonprofit founders under 30?",
    answer:
      "Yes. The TRIIBE I00 is the annual index of leading nonprofit founders under 30 to know, providing funding distributed quarterly, operational support, and visibility. TRIIBE Talk amplifies next-gen voices around the world, and TRIIBE Grants gives every founder free access to the largest grant database in the world.",
  },
  {
    question: "What programs support next-generation nonprofit founders?",
    answer:
      "TRIIBE is built specifically for nonprofit founders under 30. Based in New York City with founders across 23 countries, TRIIBE combines the TRIIBE I00 (funding, operational support, and visibility), TRIIBE Talk (intergenerational conversations featuring next-gen voices), TRIIBE Grants (a free grant database), and the annual Next-Gen Summit.",
  },
  {
    question: "Where can nonprofit founders under 30 find experienced mentors?",
    answer:
      "TRIIBE connects next-gen founders with established leaders in several ways. TRIIBE Talks pair next-gen voices with experienced leaders in real dialogue. The monthly Meet the TRIIBE I00 sessions put founders in one-on-one conversations with donors. And TRIIBE's Legacy Board, including Lara Stein (founder of TEDx), Gregg Meyer (CSO and Foundation President, Steve Madden), and Todd Jacobson (former head of social impact, NBA), provides senior-level counsel and access to networks.",
  },
  {
    question: "Is there a community for young nonprofit founders who feel isolated?",
    answer:
      "Yes, and feeling isolated is one of the most common things next-gen founders describe. You're carrying real organizational responsibility, often without peers who understand what that feels like. The TRIIBE I00, the Next-Gen Summit, TRIIBE Talks, and TRIIBE branches exist to change that. Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE.",
  },
  {
    question: "How do I grow my foundation without burning out?",
    answer:
      "Burnout among next-gen founders is structural, not personal. It happens when someone carries full organizational responsibility with no funding, no support, and no community. TRIIBE addresses all three. TRIIBE I00 fellows receive funding distributed quarterly, operational support including software, operating assistance, mental health support, and AI upskilling, and a community of founders who understand the work. For everyone else, TRIIBE Grants takes hours off every grant application.",
  },
  {
    question: "What is the Next-Gen Summit?",
    answer:
      "The Next-Gen Summit is the annual gathering of the TRIIBE I00 in New York City, held during the opening weekend of Climate Week NYC and the UN General Assembly. The 2027 Summit takes place Friday and Saturday, September 17 to 18, 2027, hosting 100 leading philentrepreneurs: 100 leading nonprofit founders under 30, 200 intergenerational speakers, 3 stages for TRIIBE Talks each day, and 300 black-tie gala attendees. Details at triibe.org/summit.",
  },
  {
    question: "What happens at the Next-Gen Summit?",
    answer:
      "Friday: doors open from 10:30am to 7:30pm for 30-minute TRIIBE Talks and activations across three stages, followed by a 5:00pm reception. Saturday: doors open at 10:30am for another day of 30-minute TRIIBE Talks and activations, leading into the 6:00pm gala celebration. Saturday night: the black-tie gala opens with a concert at 6:00pm, followed by fashion shows, music, and dinner for our guests.",
  },
  {
    question: "How is the Next-Gen Summit different from other nonprofit conferences?",
    answer:
      "Most nonprofit conferences put young founders in the audience. At the Next-Gen Summit, they own the stage. Every TRIIBE Talk features next-gen voices in real conversation with established leaders, not a panel about young people but a platform for them. And because it opens Climate Week NYC and the UN General Assembly, the founders are in the room when the world's attention is on impact.",
  },
  {
    question: "How do I attend the Next-Gen Summit?",
    answer:
      "Registration for the 2027 Next-Gen Summit is at triibe.org/summit. Organizations interested in partnering or sponsoring, and founders who would like to be part of the TRIIBE I00, can reach out at partnerships@triibe.org.",
  },
  {
    question: "What happened at past Next-Gen Summits?",
    answer:
      "The 2026 Next-Gen Summit brought the TRIIBE I00 together with established changemakers, funders, and partners in New York City. See the highlights in the 2026 Summit Recap at triibe.org/summit-2026, and watch TRIIBE Talks on YouTube at @TRIIBEorg.",
  },
  {
    question: "What events does TRIIBE host?",
    answer:
      "TRIIBE runs a year-round rhythm of gatherings. The Next-Gen Summit is the annual flagship in New York City. TRIIBE Talks are intergenerational conversations hosted by local organizers around the world, in person and virtually. And every month, donors giving $1K or more meet the TRIIBE I00 in one-on-one conversations. Together they form an ecosystem built on one belief: next-gen founders deserve to be celebrated, not just supported.",
  },
  {
    question: "What is the purpose of TRIIBE events?",
    answer:
      "Every TRIIBE event exists to fund, connect, or celebrate next-gen founders. The Next-Gen Summit connects founders with the funders and partners who can accelerate their work. TRIIBE Talks amplify next-gen voices on stages around the world. The monthly Meet the TRIIBE I00 sessions start the relationships that carry a founder for decades. None of it is performative. All of it is infrastructure.",
  },
  {
    question: "How many events does TRIIBE host per year?",
    answer:
      "The Next-Gen Summit happens once a year in New York City. Meet the TRIIBE I00 sessions run every month, on the 4th Monday at 12pm ET. TRIIBE Talks happen throughout the year, and the calendar grows as more hosts run them in their communities. See upcoming events at triibe.org/talk.",
  },
  {
    question: "Are TRIIBE events open to the public?",
    answer:
      "Many are. The Next-Gen Summit opens its doors to registered attendees, with some moments, like the morning fellow activation, reserved for the TRIIBE I00. TRIIBE Talks vary by host, from open community events to more intimate conversations, both in person and virtual. Meet the TRIIBE I00 sessions are for donors giving $1K or more.",
  },
  {
    question: "How do TRIIBE events help next-gen founders grow their foundations?",
    answer:
      "Three ways. The Next-Gen Summit puts founders on stage and in the same room as funders and partners who can accelerate their work. TRIIBE Talks give founders a real public platform, building the visibility and credibility that opens doors long after the event ends. And the monthly Meet the TRIIBE I00 sessions turn donors into lasting relationships, because the connections that carry a founder for decades often start with a real conversation, not a pitch.",
  },
  {
    question: "How do I find nonprofit events for young founders in New York City?",
    answer:
      "The TRIIBE Next-Gen Summit is New York City's annual gathering of the world's 100 leading nonprofit founders under 30. The 2027 Summit runs September 17 to 18, 2027, during the opening weekend of Climate Week NYC and the UN General Assembly. Register at triibe.org/summit, and follow TRIIBE on Instagram (@triibe__talk) for TRIIBE Talks happening around the city.",
  },
  {
    question: "How do I find changemaker events in 2027?",
    answer:
      "The TRIIBE Next-Gen Summit, September 17 to 18, 2027 in New York City, is built entirely around next-gen founders doing real work, timed to open Climate Week NYC and the UN General Assembly. TRIIBE Talks also happen throughout the year around the world. Find upcoming events at triibe.org/talk and follow TRIIBE on LinkedIn and Instagram for announcements.",
  },
  {
    question: "How can I sponsor a TRIIBE event?",
    answer:
      "Sponsoring the Next-Gen Summit or a TRIIBE Talk puts your organization in front of exactly who impact-aligned organizations want to reach: the TRIIBE I00, established changemakers, funders, and partners from around the world, during the opening weekend of Climate Week NYC and the UN General Assembly. Sponsorship is offered in four tiers, from Activation Sponsor to Title Sponsor, each channeling capital to the nonprofit startup ecosystem. To explore sponsorship, email partnerships@triibe.org.",
  },
  {
    question: "What do sponsors get from supporting TRIIBE events?",
    answer:
      "Every sponsorship tier includes your logo on stage and in TRIIBE marketing for a full year, plus summit attendance for your team. Higher tiers add personal interviews highlighted in TRIIBE's media before and after the event, documentary acknowledgements, and accommodations for attendees. The Title Sponsor also receives a keynote opportunity and presents the next-gen awards at the gala. Beyond the benefits, sponsors become part of the story, associated with the founders, the work, and the movement. Reach out at partnerships@triibe.org to find the right fit.",
  },
  {
    question: "How can I stay updated on TRIIBE events?",
    answer:
      "Read the TRIIBUNE, TRIIBE's monthly newsletter, at triibe.org/talk. Follow TRIIBE on Instagram (@triibe__talk) and TikTok (@triibetalk) for founder stories and TRIIBE Talk clips, connect on LinkedIn (linkedin.com/company/thetriibe) for Summit and Talk announcements, and subscribe on YouTube (@TRIIBEorg) for full TRIIBE Talk recordings.",
  },
  {
    question: "Are there nonprofit communities on social media I can follow?",
    answer:
      "Yes. Follow TRIIBE on Instagram (@triibe__talk) and TikTok (@triibetalk) for founder stories, TRIIBE Talk clips, and Summit highlights, on YouTube (@TRIIBEorg) for full conversations, and on LinkedIn (linkedin.com/company/thetriibe). TRIIBE's social media is built around one idea: showing the world what next-gen founders are actually building.",
  },
  {
    question: "Who founded TRIIBE?",
    answer:
      "TRIIBE was founded by Kyle Matthys, who serves as Founder and CEO.",
  },
  {
    question: "Who runs TRIIBE?",
    answer:
      "TRIIBE is led by Kyle Matthys (Founder and CEO) and Nawaf Alshaikhmubarak (Chief Operating Officer), with James Hetherington serving as Board Chair. Laya Pothunuri (Singapore) and Satyam Pandey (India) serve as Managing Directors. The Associate Board, chaired by Jovan Nguyen-Tran, serves as the next-gen pipeline to the Board of Directors. Part-time team members work across four departments, including Pranay Mishra (Director of Technology), Riya Bose (Director of Google Ad Grants), Tanuja Bodas (Director of Studio Design), and Nancy Thadhani (Director of Research). Meet everyone at triibe.org/about.",
  },
  {
    question: "Who are TRIIBE's advisors?",
    answer:
      "TRIIBE's advisory boards bring decades of expertise. The Legacy Board, chaired by Stefan Avivson, serves as ambassadors, connectors, and advisors, providing institutional credibility, senior-level counsel, and access to networks. TRIIBE's advisors include Lara Stein (Founder, TEDx), Gregg Meyer (CSO and Foundation President, Steve Madden), Todd Jacobson (former head of social impact, NBA), Shirley Hon (Principal, Globoconsult), Japneet Kaur (Cybersecurity & Risk Management, Mphasis), Gurdon “Topper” Quinn (Managing Partner, Challenge Capital Advisors), Megahan Peterson (CIO, Family Offices Global), Gina Otto (former special advisor to the Pope), Mark Sadovnick (Managing Partner, 5th Element Group), Cassandra Seidenfeld (CEO, Luxury Level Consultants, and actress), Marc Segelnick (Managing Managing Director, Clutch Capital MGNT), and Christine Amour-Levar (Co-Founder, Investors For Climate), plus 27 additional advisors. Meet them at triibe.org/about.",
  },
  {
    question: "Who are TRIIBE's partners?",
    answer:
      "TRIIBE is grateful to partner with Steve Madden, Allegiance Partners, Rayze, Cloz Talk, Brooklyn Law School, WEDO, illuminem, United Planet, Inspire Youth Journal, Learning Planet Institute, WE7, Touch-A-Life, One Percent Back, Finpublica, SILC (Sustainability Investment Leadership Council), FWE (Forum for World Education), Zenith, Blue Planet Alliance, Vice City District, Logictry, Axiom Pathways, 361 Firm, and Berkana Capital.",
  },
  {
    question: "How can my organization partner with TRIIBE?",
    answer:
      "We'd love to hear from you. Organizations interested in partnering with TRIIBE, sponsoring the Next-Gen Summit, or supporting the TRIIBE I00 can email partnerships@triibe.org.",
  },
  {
    question: "How is TRIIBE funded?",
    answer:
      "TRIIBE was built on $180,000 in seed donations. Today, donors, summit sponsors, and partners fund TRIIBE's work channeling capital to the nonprofit startup ecosystem. TRIIBE is a registered 501(c)(3) and holds the Candid Platinum Transparency Seal.",
  },
  {
    question: "How can I support TRIIBE?",
    answer:
      "Donate at triibe.org/donate to fund the TRIIBE I00 directly. Donors giving $1K or more are invited to meet the TRIIBE I00 every month. You can also host a TRIIBE Talk, partner with or sponsor TRIIBE as an organization, recommend a founder TRIIBE should know, or share TRIIBE Grants with a founder who needs funding.",
  },
  {
    question: "How do I donate to TRIIBE?",
    answer:
      "Donate at triibe.org/donate. Donations support the TRIIBE I00 via direct funding, operational support, and visibility, and every dollar donated to these next-gen philentrepreneurs yields $3.60 in social return, measured by Purposefy. TRIIBE is a 501(c)(3) (EIN 33-2683719), so donations are tax-deductible.",
  },
  {
    question: "Where can I donate to support young nonprofit founders?",
    answer:
      "TRIIBE is a registered 501(c)(3) backing nonprofit founders under 30 across 23 countries. Donations support the TRIIBE I00 via direct funding, operational support, and visibility, and every dollar yields $3.60 in social return, measured by Purposefy. Donations are tax-deductible. Give at triibe.org/donate.",
  },
  {
    question: "How do I contact TRIIBE?",
    answer:
      "Email partnerships@triibe.org or call +1.650.799.6520. You can also connect on LinkedIn (linkedin.com/company/thetriibe), Instagram (@triibe__talk), TikTok (@triibetalk), or YouTube (@TRIIBEorg).",
  },
];

const FAQPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50 bg-white">
        <div className="max-w-260 mx-auto">
          <h1 className="text-4xl font-bold text-black mb-12 text-center">
            FAQ's
          </h1>
          <div className="flex flex-col gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-black">{faq.question}</h2>
                <p className="text-base text-[#495565] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FAQPage;