import { Globe, Handshake, Monitor, Palette } from "lucide-react";
import type {
  Person,
  Department,
  LocationEntry,
  HonoraryMember,
} from "@/types/about";

export const csuite: Person[] = [
  {
    name: "Kyle Matthys",
    role: "Founder & CEO",
    imagePath: "/images/team/KyleMatthys.jpeg",
    description:
      "Kyle Matthys is an entrepreneur and social impact leader focused on helping the next generation of nonprofit founders build sustainable organizations. After working in sustainability at Turtle, a fifth-generation, women-owned electrical distributor, he founded TRIIBE to address gaps in early-stage nonprofit funding, mentorship, and operational support. Under his leadership, TRIIBE has developed initiatives including TRIIBE 100, its three-year fellowship, TRIIBE Grants, and TRIIBE Talk, connecting emerging changemakers with resources and experienced leaders. In September 2026, Kyle published TRIIBE and the Missing Philanthropic Layer, outlining his vision for making philanthropy more accessible.",
    linkedIn: "https://www.linkedin.com/in/kylematthys/",
  },
  {
    name: "Nawaf Alshaikhmubarak",
    role: "Chief Operating Officer",
    imagePath: "/images/team/nawaf-alshaikhmubarak.jpg",
    description:
      "Nawaf Alshaikhmubarak is a Mechanical Engineering student at NYU Tandon School of Engineering and Chief Operating Officer of TRIIBE, where he oversees strategy, partnerships, financial planning, and operations to support emerging nonprofit founders. With experience in software engineering from his internship at Aramco’s Houston Research Center, he combines technical problem-solving with organizational leadership. At TRIIBE, he has helped lead the Changemaker Summit and facilitated conversations connecting nonprofit founders, mentors, and leaders to strengthen collaboration and expand social impact.",
    linkedIn: "https://www.linkedin.com/in/nawaf-mub/",
  },
  {
    name: "James Hetherington",
    role: "Board Chair",
    imagePath: "/images/team/james-hetherington.jpg",
    description:
      "James Hetherington serves as Board Chair at TRIIBE, supporting its mission to help young nonprofit founders build sustainable, high-impact organizations. He contributes to the organization’s governance and strategic direction as it connects emerging changemakers with philanthropic funding, mentorship, and practical resources. Through initiatives such as the College Fellowship, TRIIBE Talks, and TRIIBE 100, James supports TRIIBE’s broader goal of strengthening the nonprofit startup ecosystem and helping young social entrepreneurs turn promising ideas into lasting impact.",
    linkedIn: "https://www.linkedin.com/in/james-hetherington-590b981b8/",
  },
];

export const associateBoard: Person[] = [
  {
    name: "Jovan Nguyen Tran",
    role: "Chair",
    imagePath: "/images/team/jovan-nguyen-tran.jfif",
    description:
      "Jovan Nguyen-Tran is an aspiring business and finance professional interested in entrepreneurship, financial markets, and leadership. Alongside Gavan Roi, he organized the 2025 Finance Mentorship Panel at Singapore American School, connecting students with professionals from J.P. Morgan, BlackRock, BP, and SC Ventures. He also became the first international participant in Bhutan’s DeSuung Programme, undertaking leadership and resilience training and serving as a Section Captain. Having traveled to more than 60 countries, Jovan brings a global perspective and a commitment to mentorship, knowledge-sharing, and helping young people explore opportunities in business and finance.",
    linkedIn: "https://www.linkedin.com/in/jovannguyentran/",
  },
  {
    name: "Laya Pothunuri",
    role: "Vice Chair",
    imagePath: "/images/team/laya-pothunuri.jpg",
    description:
      "Laya Pothunuri is a sustainability advocate and engineer with an MPhil in Engineering for Sustainable Development from the University of Cambridge. As a National Geographic Young Explorer and DARWIN200 Leader, she has explored circular economy solutions, water filtration, and plastic upcycling. Through her engagement with Chatham House, the Royal Botanic Gardens, Kew, and Generation Earthshot, she champions climate action, biodiversity conservation, and youth participation in building a sustainable future.",
    linkedIn: "https://www.linkedin.com/in/laya-pothunuri-964878175/",
  },
  /* {
    name: "Jade Kashemsant",
    role: "Member",
    imagePath: "/images/team/jade-kashemsant.jpg",
    linkedIn: "https://www.linkedin.com/in/jadekashemsant/",
  }, */
  {
    name: "Adam Shatzman",
    role: "Member",
    imagePath: "/images/team/AdamShatzman.jpg",
    description:
      "Adam Shatzman is an investment banking professional at District Capital Partners, specializing in mergers and acquisitions and strategic transactions. His experience includes private equity, financial research, and roles at NextGen Growth Partners and Advisor Perspectives. A graduate of Indiana University’s Kelley School of Business, he also founded Shatz’s Shoes, gaining entrepreneurial experience in operations, inventory management, and digital marketing. His background combines financial analysis and business ownership to support strategic growth and investment decisions.",
    linkedIn: "https://www.linkedin.com/in/adamshatzman/",
  },
  {
    name: "Maryam Rana",
    role: "Member",
    imagePath: "/images/team/maryam-rana.jpg",
    description:
      "Maryam Rana is a History and International Relations student at King’s College London, focusing on international law, South Asian history, and global politics. As President of the Foreign Policy and Security Conference, she brings together students, policymakers, and speakers to discuss geopolitical challenges. An Avicenna Foundation Scholar, she has contributed to political communications and youth-led policy advocacy through organizations including the Afghanistan and Central Asian Association and RAIA. Having participated in international discussions at Davos and UN-related events, Maryam is passionate about diplomacy, multilateralism, and amplifying young people’s voices in global affairs.",
    linkedIn: "https://www.linkedin.com/in/maryam-rana-0b21a728b/",
  },
  /* hidden:
  {
    name: "Dominic Yap",
    role: "Shadow Secretary",
    imagePath: "/images/team/dominic-yap.jpg",
    linkedIn: "https://www.linkedin.com/in/dominic-yap-62b546266/",
  },
  */
  {
    name: "Christian Elam",
    role: "Member",
    imagePath: "/images/team/christian-elam.jfif",
    description:
      "Christian Elam is an investor and entrepreneur focused on frontier technology, national security, and public policy. As Co-Founder and General Partner of Andromeda Ventures, he backs dual-use technologies across defense, AI, space, energy, and robotics. He previously founded Bachmanity Capital and helped incubate Thor Dynamics, a defense technology company developing laser systems for counter-drone applications. Christian also co-authored the bipartisan Kids Online Safety Act, which passed the U.S. Senate by a 91–3 vote. A UC Berkeley Haas School of Business graduate, he combines venture investing and policy experience to support technologies addressing critical real-world challenges.",
    linkedIn: "https://www.linkedin.com/in/christian-elam-4b0a471a8/",
  },
  {
    name: "Rida Karim",
    role: "Member",
    imagePath: "/images/team/rida-karim.jpg",
    description:
      "Rida Karim is a technology advocate and youth leader dedicated to expanding access to STEM education. As Founder and CEO of Technology Youth Empowerment, she empowers young people through hands-on STEM learning and supports underrepresented communities. She has co-authored a Brookings Institution report on generative AI and student well-being and serves as Co-Chair of Youth at UNA-USA, having previously led its Technology Committee. Through OpenAI’s Product Lab and recognition from NCWIT and the Women of the Future Programme, Rida brings together research, AI advocacy, and youth leadership to promote equitable access to technology.",
    linkedIn: "https://www.linkedin.com/in/ridakarim/",
  },
  /* hidden:
  {
    name: "George Shi",
    role: "Member",
    imagePath: "/images/team/george-shi.jpg",
    linkedIn: "https://www.linkedin.com/in/george-shi-4a9b18190/",
  },
  */
  /* hidden:
  {
    name: "Frederick Tsao",
    role: "Member",
    imagePath: "/images/team/frederick-tsao.jpg",
    linkedIn: "https://www.linkedin.com/in/frederick-mochizuki-tsao/",
  },
  */
  /* hidden:
  {
    name: "Aria Mariam",
    role: "Member",
    imagePath: "/images/team/aria-mariam.jpg",
  },
  */
  {
    name: "Maximilian Goetz",
    role: "Member",
    imagePath: "/images/team/maximilian-goetz.jpg",
    description:
      "Maximilian Goetz is an education strategy consultant and social entrepreneur dedicated to expanding access to STEM education. As Founder and Board President of Robotics For All, he established a nonprofit that has reached over 25,000 students through robotics and STEM programmes. A Fulbright Scholar, he also taught English in Taiwan, promoting cross-cultural learning. Max has worked in market research at Peerless Insights and strategy consulting at EY-Parthenon. A magna cum laude graduate of Georgetown University with degrees in Business and Global Affairs, he combines analytical expertise and entrepreneurial leadership to create educational opportunities.",
    linkedIn: "https://www.linkedin.com/in/maxgoetz/",
  },
  {
    name: "Aveneel Waadhwa",
    role: "Member",
    imagePath: "/images/team/aveneel-waadhwa.jpg",
    description:
      "Aveneel Waadhwa is a technology and product management professional with experience developing AI-powered solutions at Kalepa and Microsoft, including LLM pipelines for insurance underwriting and generative AI features for Azure Copilot. A UC Berkeley graduate with degrees in Data Science and Economics, he won the Microsoft Global Hackathon in 2021. As a Global Shaper with the World Economic Forum’s New York Hub, he also leads OneRise, an initiative supporting immigrant founders in building businesses in the United States.",
    linkedIn: "https://www.linkedin.com/in/aveneel/",
  },
  {
    name: "Zachary Anglemyer",
    role: "Member",
    imagePath: "/images/team/zachary-anglemyer.jfif",
    description:
      "Zachary Anglemyer is an entrepreneur and sustainability innovator focused on advancing circular-economy solutions. As Co-Founder and CEO of Stealth Commodity Company, he works to transform waste into valuable resources and promote more regenerative economic systems. With an interdisciplinary background from the Rochester Institute of Technology spanning engineering, design, economics, and entrepreneurship, he applies systems thinking to complex sustainability challenges. He also contributes to initiatives focused on youth development, mental well-being, and sustainable design through organizations including Pathways for Kids, THE REAL Mental Health Foundation, and the Bio Based Materials Collective.",
    linkedIn: "https://www.linkedin.com/in/zacharyanglemyer/",
  },
  {
    name: "Imane Abdel Jelil",
    role: "Member",
    imagePath: "/images/team/ImaneAbdel.jpg",
    description:
      "Imane Abdel Jelil is an investment and economic development leader working across AI, digital transformation, and international partnerships. As Founder and Managing Director of RUKN Partners, she connects investors and institutions with opportunities in Mauritania and West Africa across sectors including energy, infrastructure, mining, and digital technologies. She also serves as Vice President of Nouakchott AI Build, supporting AI innovation and youth empowerment. Through initiatives such as Young Arab Leaders and WomenTech Network, Imane promotes international collaboration, women’s participation in technology, and inclusive economic growth.",
    linkedIn: "https://www.linkedin.com/in/imane-abdel-jelil/",
  },
  {
    name: "Tahnoon Murtza",
    role: "Member",
    imagePath: "/images/team/TahnoonMurtza.jpg",
    description:
      "Tahnoon Murtza is an entrepreneur, venture capitalist, and independent punk artist working at the intersection of investment, entertainment, and consumer brands. As Founding Partner of Grey Sheep Ventures, he invests in early-stage, celebrity-founded, and viral-first consumer businesses, drawing on his network across entertainment, sports, and digital media. A three-time founder and Babson College graduate, he previously worked with Brock Capital Group and NZVC and founded ReComune, a technology initiative addressing senior loneliness. Alongside investing, Tahnoon has built a music audience of over three million, combining creative entrepreneurship with strategic brand-building.",
    linkedIn: "https://www.linkedin.com/in/tahnoon-m-b4071419a/",
  },
];

export const legacyBoard: Person[] = [
  {
    name: "Stefan Avivson",
    role: "Chair",
    title: "CEO Advisor & Entrepreneur",
    imagePath: "/images/team/stefan-avivson.jpg",
    description:
      "Stefan Avivson is the CEO and Co-Founder of VOKT, a serial entrepreneur with nearly 30 years of experience, having built 15 companies and exited five. He specializes in business operations, automation, and strategic growth, helping companies connect systems and streamline processes. Beyond VOKT, he advises founders on commercial strategy and customer communication through his Raw Series of books and fosters meaningful professional connections through REASON.",
    linkedIn: "https://www.linkedin.com/in/avivson/",
  },
  /* {
    name: "Chelsea Toler",
    //role: "Vice Chair",
    title: "Co-Founder, Logictry & President, The Family Foundation",
    imagePath: "/images/team/chelsea-toler.jpg",
    linkedIn: "https://www.linkedin.com/in/catoler92/",
  }, */
  {
    name: "Gregg Meyer",
    title: "Chief Sustainability Officer, Steve Madden",
    imagePath: "/images/team/gregg-meyer.jpg",
    description:
      "Gregg Meyer leads global sustainability at Steve Madden, overseeing environmental strategy, supply-chain responsibility, and ESG initiatives. With a background in law and corporate governance, he focuses on carbon reduction, responsible sourcing, and sustainable fashion. He has advanced the company's Let's Get Real sustainability strategy and emissions targets. As President of the Steve Madden Corporate Foundation, he also supports charitable partnerships and community initiatives, promoting transparency and measurable environmental progress.",
    linkedIn: "https://www.linkedin.com/in/gregg-meyer/",
  },
  {
    name: "Japneet Kaur",
    title: "Cybersecurity & Risk Management Professional, Mphasis",
    imagePath: "/images/team/japneet-k.jpg",
    description:
      "Japneet Kaur is a cybersecurity and risk management leader serving as Cyber Security Services Portfolio Director and Associate Vice President at Mphasis. With over 14 years of experience, she specializes in enterprise security, data protection, risk management, and digital resilience. She also chairs The Digital Economist’s Cyber Studio and contributes to ISACA leadership and mentorship initiatives supporting women in technology. Beyond cybersecurity, she is an artist, illustrator, and author who connects technology, sustainability, and inclusion through storytelling, promoting digital trust and a more secure, accessible technological future.",
    linkedIn: "https://www.linkedin.com/in/japneet-k-34816426/",
  },
  {
    name: "Geoffrey Sargeant",
    title: "Managing Director & Head of Capital Markets, The REAL",
    imagePath: "/images/team/geoffrey-sargeant.jpg",
    description:
      "Geoffrey Sargeant is a financial-services professional with over two decades of experience across institutional finance, wealth management, and capital markets, including roles at Lazard Asset Management, Calamos Wealth Management, and Neuberger Berman. A Certified Financial Planner (CFP®), he combines financial expertise with a strong commitment to mental-health advocacy. As Executive Ambassador of THE REAL Mental Health Foundation, he promotes open conversations about mental health, builds supportive communities, and expands the foundation’s global ambassador network. Through corporate partnerships and international initiatives, he advocates for vulnerability and meaningful connections.",
    linkedIn: "https://www.linkedin.com/in/geoffsargeant/",
  },
  {
    name: "Flaviu Simihaian",
    title: "Founder, 1PB.org & Co-host, Founder Secrets Podcast",
    imagePath: "/images/team/flaviu-simihaian.jpg",
    description:
      "Flaviu Simihaian is a serial entrepreneur and startup builder, known for co-founding Amplicare, acquired by Omnicell, and Aventi Health, a healthcare technology company. As Founder of 1PB.org (1 Percent Back), he connects entrepreneurs with mentorship, investors, and resources while encouraging successful companies to support future founders. He also co-founded OpenThanks.com and co-hosts the Founder Secrets Podcast, sharing insights on entrepreneurship and business growth. Through his ventures, Flaviu champions underrepresented entrepreneurs, community-building, and sustainable support for the next generation of founders.",
    linkedIn: "https://www.linkedin.com/in/flaviusimihaian/",
  },
  {
    name: "Lara Stein",
    title: "Founder, TEDx",
    imagePath: "/images/team/lara-stein.jpg",
    description:
      "Lara Stein is an entrepreneur and global innovation leader best known for founding TEDx and expanding TED’s ideas-sharing model into a worldwide community movement. She helped launch TEDxWomen and TEDYouth, creating platforms for diverse and underrepresented voices. She also founded Boma Global and held leadership roles at Singularity University, Women’s March Global, and MIT ReACT, supporting innovation, education, and social impact. Through Regenerative Consulting, Lara advises organizations on long-term strategy and systemic change, focusing on connecting people, scaling impactful ideas, and building sustainable solutions for global challenges.",
    linkedIn: "https://www.linkedin.com/in/citizenstein/",
  },
  /* {
    name: "Stacey Lauren",
    title: "Founder, Do The Thing & TEDx Speaker",
    imagePath: "/images/team/stacey-lauren.jpg",
    linkedIn: "https://www.linkedin.com/in/staceylauren/",
  }, */
  {
    name: "Purnima Voria",
    title: "Founder & CEO, National US India Chamber of Commerce",
    imagePath: "/images/team/dr-purnima-voria.jpg",
    description:
      "Dr. Purnima Voria is an international business advocate and founder of the National U.S.-India Chamber of Commerce, established in 2005 to strengthen trade and investment between the United States and India. Through NUICC, she connects businesses with investors, industry leaders, and government partners while supporting cross-border expansion. She has advised the U.S. Department of Commerce on minority business policy and was appointed President of the Rajasthan Foundation’s New York Chapter in 2026. Recognized for her contributions to international business, Voria continues to promote economic growth, cultural exchange, and stronger ties between India and the United States.",
    linkedIn: "https://www.linkedin.com/in/purnimavoria/",
  },
  {
    name: "Mark Sadovnick",
    title: "Founder, 5th Gen Leaders Community",
    imagePath: "/images/team/mark-sadovnick.jpg",
    description:
      "Mark Sadovnick is a global executive search and leadership professional with diverse experiences securing the right fit talent for founders, entrepreneurs and other Leaders Who Care® about concurrently making a greater economic and social impact. Recognized by Business Week as one of 150 most influential headhunters, he gained previous experiences at Deloitte and Jaycees International. He is also a Partner at Tower Capital, leaders on Generational Health and the Athlete-led Generational Sports Science Fund/Initiative. He serves on Boards, is a CPA, a huge hockey fan and sports advocate, and is most proud of his three sons and bonus daughter.",
    linkedIn: "https://www.linkedin.com/in/marksadovnick/",
  },
  /* hidden:
  { name: "Lanz Pierce", title: "Media & Entertainment Executive", imagePath: "/images/team/lanz-pierce.jpg", linkedIn: "https://www.linkedin.com/in/lanzpierce/" },
  */
  /* {
    name: "Mariela Dabbah",
    title: "Founder & CEO, Red Shoe Movement",
    imagePath: "/images/team/mariela-dabbah.jpg",
    linkedIn: "https://www.linkedin.com/in/marieladabbah/",
  }, */
  /* {
    name: "Laurie Dhue",
    title:
      "MD, Family Office Growth Partners, Past anchor for CNN, MSNBC, and Fox",
    imagePath: "/images/team/laurie-dhue.jfif",
    linkedIn: "https://www.linkedin.com/in/laurie-dhue-705a7326/",
  }, */
  {
    name: "Holland Haiis",
    title: "Founder, Alchemzing Humanity",
    imagePath: "/images/summit/HollandHaiis.png",
    description:
      "Holland leads a global advisory firm specializing in organizational strategy, governance, succession planning, leadership development, and human performance. She works with Fortune 500 companies, family offices, nonprofits, and business leaders to strengthen organizational effectiveness, mental fitness, and intergenerational alignment. With more than 30 years of experience, her work is grounded in behavioral and positive psychology. She is an award-winning author and was recognized as one of 100 Global Thought Leaders in Conscious Leadership and one of 28 International Digital Wellness Experts for three consecutive years. Her insights have been featured on CNN, CNBC, ABC, NBC, FOX News, Inc., Fast Company, and other leading media outlets.",
    linkedIn: "https://www.linkedin.com/in/hollandhaiis/",
  },
  {
    name: "Cheng Davis",
    title: "President, Forum for World Education",
    imagePath: "/images/team/ChengDavis.png",
    description:
      "Dr. Cheng Yan Davis is an international education leader who has held senior positions at the University of Pennsylvania and Drexel University, advancing global partnerships between universities, governments, and institutions. At Penn, she founded GSE International and developed cross-cultural education initiatives across multiple countries. As President of the Forum for World Education, she promotes international collaboration and explores emerging challenges, including AI in education. Recognized for her contributions to educational leadership and international cooperation, Davis continues to connect education, diplomacy, and leadership development worldwide.",
    linkedIn: "https://www.linkedin.com/in/cheng-davis-82511937/",
  },
  {
    name: "Gurdon “Topper” Flagg Quinn",
    title: "Managing Partner, Challenge Capital Advisors",
    imagePath: "/images/team/GurdonQuinn.jpg",
    description:
      "Gurdon “Topper” Flagg Quinn is an investment and capital-markets professional with over three decades of experience in investment banking, private equity, and venture capital. After beginning his career in mergers and acquisitions, he founded the Challenge Group in 2006 and advises businesses on growth, financing, and capital-market opportunities across multiple industries. As President of the Global Network for Energy and the Environment, he promotes investment in energy and sustainability. His work combines entrepreneurship, strategic investment, and emerging technologies, alongside a longstanding interest in film and the arts through Quinn Vision Arts.",
    linkedIn:
      "https://www.linkedin.com/in/gurdon-%E2%80%9Ctopper%E2%80%9D-flagg-quinn-61931b1/",
  },
  {
    name: "Stanley Goldstein",
    title: "Chairman, Sustainability Investment Leadership Council",
    imagePath: "/images/team/StanleyGoldstein.jpg",
    description:
      "Stanley Goldstein is an entrepreneur, investor, and corporate leader with extensive experience in accounting, private equity, and alternative investments. He founded Goldstein Golub & Kessler, later part of RSM, and served as Chairman of Knickerbocker Financial Group. He also founded the Sustainability Investment Leadership Council, bringing finance and business professionals together to advance sustainable investing, ESG reporting, and climate-focused strategies. Through his leadership in investment forums and philanthropic initiatives, Goldstein promotes collaboration, sustainability, and long-term value creation.",
    linkedIn: "https://www.linkedin.com/in/stanley-goldstein-baa86a/",
  },
  {
    name: "Bleu Blakslee",
    title: "Managing Director, Quantum Philanthropy Partners",
    imagePath: "/images/team/BleuBlakslee.jpg",
    description:
      "Bleu Blakslee is a philanthropic strategist, advisor, and speaker with over 35 years of experience helping individuals, families, nextgens and institutions create meaningful social impact nationally and internationally. Through Quantum Philanthropy Partners, she advises on major gifts, legacy planning, and purpose-driven giving, incorporating emerging technologies such as AI, blockchain, AR/VR, space. She also trains wealth advisors, family office leaders and philanthropic advisors through Stanford PACS Effective Philanthropy 2-day certificate program and Daylight’s Advisors in Philanthropy (AiP) 20-week certification program and serves on the board of the Asian & Pacific Islander American Health Forum (APIAHF) and aichildsafety.org. Her work focuses on aligning wealth with personal values, advancing responsible philanthropy, and preparing donors for a rapidly evolving world.",
    linkedIn: "https://www.linkedin.com/in/bleublakslee/",
  },
  {
    name: "Lanz Pierce",
    title: "Founder & CEO, Luminary Creative Agency",
    imagePath: "/images/team/LanzPierce.jpg",
    description:
      "Lanz Pierce is an entrepreneur, artist, creative director, and brand strategist with experience across music, entertainment, and technology. After working with industry figures such as Jimmy Iovine and Snoop Dogg, she transitioned into directing and founded Luminary Creative Agency in 2018. Through Luminary, she helps businesses develop distinctive brands, creative strategies, and growth opportunities. She also supports emerging technology ventures, including AI-driven music innovation, serves on TRIIBE's Legacy Board, and advises founders on storytelling, positioning, and business development.",
    linkedIn: "https://www.linkedin.com/in/lanzpierce/",
  },
  {
    name: "Zachary Pogue",
    title: "CTO, Dapper Care Inc",
    imagePath: "/images/team/ZacharyPogue.jpg",
    description:
      "Zachary Pogue is a technology executive, entrepreneur, and investor with experience in software development, machine learning, sustainable infrastructure, and deep technology. At Dapper Care, he leads technology development for a digital health platform focused on personalized healthcare and longevity. He also serves as Strategic Advisor for Cross-Border Activities at TimeX Capital, supporting technology, sustainability, and international expansion. With over 15 years of experience, Zachary combines technical innovation, business strategy, and commercialization to develop solutions across healthcare, energy, and emerging technologies.",
    linkedIn: "https://www.linkedin.com/in/zachpogue/",
  },
  {
    name: "Shirley Hon",
    title:
      "Principal, Globoconsult & Co-founder United Womens Sports NIL Agency",
    imagePath: "/images/team/ShirleyHon.jpg",
    description:
      "Shirley Hon is an investment and business strategist specializing in family offices, cross-border investments, and global business development. Through Globoconsult, she connects investors and entrepreneurs across international markets, particularly between Asia and the United States. As Co-Founder and Chief Revenue Officer of United Womens Sports NIL Agency, she helps female athletes build brand partnerships, access investment opportunities, and develop their professional identities. Through her work in finance, entrepreneurship, and women's sports, Shirley focuses on expanding opportunities for women and creating long-term economic value.",
    linkedIn: "https://www.linkedin.com/in/shirleyw-hon/",
  },
  {
    name: "Andrea Holmes Thompkins",
    title: "President & CEO, ACE Media Corp",
    imagePath: "/images/summit/AndreaHolmes.jpg",
    description:
      "Andrea Holmes Thompkins is a media sales and marketing executive who founded ACE Media Corp in 2002, specializing in advertising, branding, and entertainment. She has developed campaigns and partnerships across major sporting events and entertainment platforms, working with global brands including Google, Coca-Cola, Nike, and American Express. Through ACE and its production arm, ACE LAND, she continues to expand opportunities across television, digital media, and film. A Howard University graduate, Andrea also supports education and community initiatives, earning recognition for her contributions to media and social impact.",
    linkedIn: "https://www.linkedin.com/in/andreaholmesthompkins/",
  },
  {
    name: "Jax Harrison",
    title: "Co-Founder, Grant Authority",
    imagePath: "/images/summit/JaxHarrison.jpg",
    description:
      "Jax Harrison is an entrepreneur, connector, and humanitarian with over 35 years of experience across technology, investment, and government. As Founder and CEO of The Future Found, she combines responsible innovation and investment to address humanitarian challenges, including human trafficking, conflict response, and the protection of vulnerable communities. Her work explores emerging technologies such as AI and cybersecurity to strengthen humanitarian support. She also supports TRIIBE’s mission to expand resources for nonprofit founders, focusing on connecting people, organizations, and capital to create meaningful social impact.",
    linkedIn: "https://www.linkedin.com/in/jaxharrison/",
  },
  /* {
    name: "Erica Ford",
    title: "The peace doctor",
    imagePath: "/images/summit/ericaford.jpg",
    linkedIn: "https://www.instagram.com/ericaford_ilovemylife?stkn=MWpjc2cwcDlqcmNodw==",
  }, */
  {
    name: "Todd Jacobson",
    title:
      "Founder & CEO, TAJ Global & past head of social responsibility, NBA",
    imagePath: "/images/team/ToddJacobson.jpg",
    description:
      "Todd Jacobson is a strategic advisor and social impact leader with over 25 years of experience across business, philanthropy, and nonprofit leadership. During his 23-year career at the NBA, he served as Senior Vice President and Head of Social Responsibility, helping develop initiatives including NBA Cares, Basketball Without Borders, and the NBA Foundation. In 2024, he founded TAJ Global to advise organizations on strategic growth, partnerships, and community impact. He also teaches at Columbia University’s School of International and Public Affairs, focusing on corporate social responsibility and public-private partnerships.",
    linkedIn: "https://www.linkedin.com/in/todd-jacobson/",
  },
  {
    name: "Vin Infante",
    title: "Founder, Omega Lifestyles NYC",
    imagePath: "/images/summit/VinInfante.png",
    description:
      "Vin Infante is an entrepreneur, licensed psychotherapist, and mental performance coach who helps founders and executives navigate leadership challenges, manage stress, and achieve sustainable success. Drawing on his experience in mental health and entrepreneurship, he combines therapy, mentoring, and coaching to support personal and professional growth. In 2026, he launched Omega Lifestyle NYC, a curated community connecting founders, investors, and executives through meaningful relationships and wellness-focused experiences. He also hosts MARKED, exploring entrepreneurship, leadership, and the personal challenges behind business success.",
    linkedIn: "https://www.linkedin.com/in/vininfante/",
  },
  {
    name: "Gina Otto",
    title: "Founder, We the Peoples Fund",
    imagePath: "/images/summit/GinaOtto.jpeg",
    description:
      "Gina Otto is an author, international speaker, and social impact entrepreneur dedicated to empowering children and promoting global sustainability. As founder of Gina’s Ink, she uses storytelling and education to inspire young people, particularly those in underserved communities. She also founded We the Peoples Fund, supporting initiatives in reforestation, ocean restoration, and climate action. Having advised Pope Francis’s Summit on Climate and held global leadership roles in environmental advocacy, Gina continues to advance humanitarian causes, peacebuilding, and environmental stewardship through cross-sector partnerships.",
    linkedIn: "",
  },
  {
    name: "Ambassador PhD Vladimir Bozovic",
    title:
      "Consul General of Serbia in NYC\n\nPresident of Society of Foreign Consuls in New York",
    imagePath: "/images/summit/AMBASSADOR PHD VLADIMIR BOZOVIC.jpg",
    description:
      "Vladimir Božović is a Serbian diplomat, lawyer and Assistant Professor with decades of experience in public administration, diplomacy, international cooperation, security, anti-corruption and the protection of human rights.\n\nBorn on December 3, 1970, in Nikšić, he completed his secondary education there with a concentration in literature. He graduated from the Higher School of Internal Affairs of the Ministry of Internal Affairs in Zemun and subsequently earned a law degree.\n\nHe earned the academic degree of Master of Legal Sciences (Magister) with a thesis entitled “Corruption and Anti-Corruption Awareness with Special Reference to the Police.” On March 12, 2019, he successfully defended his doctoral dissertation, “Police Integrity and Corruption in the Police in Serbia,” at the Faculty of Security Studies, University of Belgrade, earning his PhD.\n\nHe was elected to the academic rank of Assistant Professor at the School of Engineering Management, University “Union – Nikola Tesla,” in Belgrade. His research and professional work encompass police integrity, corruption, internal oversight, security, criminal law and the protection of human rights.\n\nBetween 1991 and 1993, he served as President of the Student Union of the Higher School of Internal Affairs, President of the Student Union of Higher Schools in Belgrade, and a member of the Executive Board of the Student Union of Belgrade.\n\nFrom 1995 to 1997, he undertook legal traineeships in Belgrade, Milwaukee and Chicago. In 1997, he established Božović Law Office. He also worked as a lawyer and Head of the Department of Justice and Human Rights at the Coordination Center of the Governments of the Federal Republic of Yugoslavia and the Republic of Serbia for Kosovo and Metohija. He served as legal counsel to the Serbian Orthodox Church and the Metropolitanate of Montenegro and the Littoral, handling numerous cases concerning fundamental human and civil rights.\n\nFrom 2004 to 2007, he served as Assistant Minister of Internal Affairs and Inspector General of the Public Security Department of the Ministry of Internal Affairs of the Republic of Serbia. In 2005, he was Serbia and Montenegro’s National Coordinator for Police and Human Rights at the Council of Europe.\n\nFrom April to November 2012, and again from June 2017 to December 2019, he served as an adviser in the Cabinet of the Minister of Internal Affairs of the Republic of Serbia. From November 2012 to May 2014, he was State Secretary at the Ministry of Internal Affairs, responsible for internal oversight and international cooperation. From May 2015 to June 2017, he served as Adviser to the Prime Minister of the Republic of Serbia for regional cooperation and relations with religious communities.\n\nFrom November 2019 to July 2023, he served as Ambassador of the Republic of Serbia to Montenegro. Since November 2023, he has served as Consul General of the Republic of Serbia in New York.\n\nOn June 16, 2026, he was elected President of the Society of Foreign Consuls in New York, becoming the first representative of Serbia to lead the association in its more than a century of history. In this capacity, he is committed to strengthening the consular community’s cooperation with American institutions, the business and financial sectors, academic institutions, religious communities and other partners.\n\nOn September 14, 2026, he was elected Chairman of the Global Consular Leadership Council of United World Leaders, a New York-based organization.\n\nHe has completed specialized courses and professional training in Serbia, the United States and Hungary, as well as the ICITAP program in Bosnia and Herzegovina and the Kokkalis program on the science and art of negotiation, held in Greece. As Assistant Minister of Internal Affairs and Inspector General, he participated in three international conferences addressing anti-corruption efforts in the European Union.\n\nHis scientific and professional publications include:\n\n• “Temporary Criminal Procedure Code of Kosovo,” Pravni život, 2003, Vol. 52, No. 9, pp. 509–524;\n\n• “Corruption in the Serbian Police — Current State,” Pravo — teorija i praksa, 2012, Vol. 29, Nos. 1–3, pp. 27–43;\n\n• “Personal Evidence in Criminalistics and Criminal Procedural Law,” conference proceedings, Sarajevo–Banja Luka: International Association of Criminalists, 2013;\n\n• “Humanitarian Organizations in the Function of Terrorism,” proceedings of the international conference “Terrorism as a Global Threat,” Faculty of Law for Commerce and Judiciary, University Business Academy in Novi Sad, 2012.\n\nIn March 2017, he received an award from the Academy of Criminal Justice Sciences for the paper “A Comparative Study of Public Opinion about Police Corruption in Croatia and Serbia.”\n\nHe has delivered presentations at numerous international and domestic scientific and professional conferences and seminars. Selected international engagements include:\n\n• The international conference “Civil Defense and Preparing Civil Society for Disaster Risk Prevention,” held in Baku and Gabala from March 11 to 14, 2013, organized by the Ministry of Emergency Situations of the Republic of Azerbaijan and the International Civil Defence Organisation, with 150 participants from 54 countries;\n\n• Council for Inclusive Governance roundtables in Istanbul, Skopje and Belgrade, addressing possible solutions for northern Kosovo and relations between Belgrade and Priština;\n\n• “Defense World 2013 — International Defense and Security,” held in Athens on April 2–3, 2013, at the invitation of the American-Hellenic Chamber of Commerce;\n\n• The Fifth Ministerial Conference of the Budapest Process, “Silk Routes Partnership for Migration,” held in Istanbul from April 18 to 20, 2013, where he advocated greater understanding, solidarity and humanity in responding to migration;\n\n• Leadership of the Serbian Ministry of Internal Affairs delegation to the 42nd INTERPOL European Regional Conference in Budapest, held from May 13 to 16, 2013. At his initiative, Serbia was nominated for membership of the provisional committee of INTERPOL’s European Sub-Directorate and, alongside France and Germany, for participation in the selection team for the appointment of its acting head;\n\n• An international meeting on strategic guidance for United Nations police in peacekeeping operations, held from October 14 to 17, 2013, organized by the United Nations Department of Peacekeeping Operations and Durham University’s Institute for Global Security.\n\nIn 2014, he served as Deputy Chairman of the Organizing Committee and Chairman of the Protocol Committee for the Third Meeting of Heads of Government of China and Central and Eastern European Countries.\n\nHis professional work brings together diplomacy, international police and institutional cooperation, the rule of law, anti-corruption, human rights and relations with religious communities.",
    linkedIn:
      "https://www.linkedin.com/in/vladimir-bo%C5%BEovi%C4%87-phd-4059451b/",
  },
  {
    name: "Iva Kaufman",
    title: "Principal, Iva Kaufman Associates",
    imagePath: "/images/summit/IvaKaufman.jpg",
    description: "Iva Kaufman is a philanthropy and social impact strategist specializing in nonprofit management, foundation advising, and sustainable development. Through Iva Kaufman Associates, she advises businesses, foundations, and nonprofits on initiatives promoting gender equality, environmental sustainability, and community development. Her work connects financial resources with meaningful social outcomes, supporting women’s advancement, conservation, and cultural initiatives. She also contributes to international development and peacebuilding efforts, including engagement with the United Nations High-Level Political Forum.",
    linkedIn: "https://www.linkedin.com/in/iva-kaufman-b08242a/",
  },
  /* hidden:
  { name: "Laurence Kalinsky", title: "CEO, PVBLIC.org", imagePath: "/images/team/laurence-kalinsky.jpg" },
  { name: "David Homan", title: "Founder, Orchestrated Connections", imagePath: "/images/team/david-homan.jpg", linkedIn: "https://www.linkedin.com/in/davidrhoman/" },
  { name: "Sandra Fan", title: "Family Office Network Leader", imagePath: "/images/team/sandra-fan.jpg", linkedIn: "https://www.linkedin.com/in/sandrafan/" },
  { name: "Marc Dullaert", title: "Founder, KidsRights", imagePath: "/images/team/marc-dullaert.jpg" },
  { name: "Ed Martin", title: "Founder, 100 Billion Meals & Omniwin", imagePath: "/images/team/ed-martin.jpg" },
  { name: "Adeline Azrack", title: "Managing Director, Chanel Foundation Americas", imagePath: "/images/team/adeline-azrack.jpg", linkedIn: "https://www.linkedin.com/in/adeline-azrack-0853023/" },
  */
];

export const locations: LocationEntry[] = [
  {
    location: "United States, New York",
    flag: "🇺🇸",
    mdName: "Kyle Matthys",
    mdImagePath: "/images/team/KyleMatthys.jpeg",
    mdLinkedIn: "https://www.linkedin.com/in/kylematthys/",
    mdDescription: "Kyle Matthys is an entrepreneur and social impact leader focused on helping the next generation of nonprofit founders build sustainable organizations. After working in sustainability at Turtle, a fifth-generation, women-owned electrical distributor, he founded TRIIBE to address gaps in early-stage nonprofit funding, mentorship, and operational support. Under his leadership, TRIIBE has developed initiatives including TRIIBE 100, its three-year fellowship, TRIIBE Grants, and TRIIBE Talk, connecting emerging changemakers with resources and experienced leaders. In September 2026, Kyle published TRIIBE and the Missing Philanthropic Layer, outlining his vision for making philanthropy more accessible.",
    advisoryBoard: [
      /* hidden:
      { name: "Helen Kramer", imagePath: "/images/team/helen-kramer.jpg", role: "Chair" },
      { name: "Jonny Imerman", imagePath: "/images/team/jonny-imerman.jpg", linkedIn: "https://www.linkedin.com/in/imermanangels/", role: "Vice Chair" },
      { name: "Marcia Nelson", imagePath: "/images/team/marcia-nelson.jpg", linkedIn: "https://www.linkedin.com/in/marciasnelson/" },
      { name: "Mariam Azarm", imagePath: "/images/team/mariam-azarm.jpg" },
      */
      {
        name: "Jen Libby",
        imagePath: "/images/team/jen-libby.jpg",
        linkedIn: "https://www.linkedin.com/in/jen-libby-changemaker/",
        description: "Jen Libby, MSW, LCSW, is a psychotherapist and social entrepreneur with over 20 years of experience supporting adolescents facing mental health challenges. She founded Promly, a youth-focused social platform co-created with Gen Z that combines meaningful peer connections, accessible mental health resources, and youth empowerment. Jen also advocates for online safety and greater accountability from technology companies, engaging policymakers to advance youth mental health and responsible technology. Through Promly, she aims to create safer digital spaces that foster connection, resilience, and positive social impact.",
        title: "Founder & CEO, Promly",
      },
      {
        name: "Wendy Diamond",
        imagePath: "/images/team/wendy-diamond.jpg",
        linkedIn: "https://www.linkedin.com/in/wendydiamond/",
        description: "Wendy Diamond is a social entrepreneur, impact investor, humanitarian, and bestselling author focused on advancing women’s economic empowerment. She founded the Women’s Entrepreneurship Day Organization (WEDO) in 2013 after witnessing the impact of microfinance on women in Honduras, building a global movement to support women entrepreneurs and promote gender equality. She also founded Animal Fair Media, championing animal rescue and welfare, and works across impact investing, emerging technologies, and women-led businesses to expand opportunities for women and girls worldwide.",
        title: "Founder, WEDO",
      },
      {
        name: "Yvonne Beri",
        imagePath: "/images/team/yvonne-beri.jpg",
        linkedIn: "https://www.linkedin.com/in/yvonneberi/",
        description: "Yvonne Beri is a private family office advisor with over 20 years of experience in asset management, alternative investments, and strategic business development. She connects investors with opportunities, advises on investment strategy, and supports portfolio development, with a focus on sustainable investing and long-term value creation. Yvonne has also contributed to philanthropy through leadership roles with 100 Women in Finance, supporting nonprofit governance and fundraising, and has engaged with international institutions on sustainability and social impact. Her work brings together investment expertise and global partnerships to align capital with meaningful outcomes.",
        title: "Advisor, Private Family Offices",
      },
      {
        name: "Manuela Welton",
        imagePath: "/images/team/manuela-welton.jfif",
        linkedIn: "https://www.linkedin.com/in/manuelawelton/",
        description: "Manuela Welton is an educator, facilitator, and human development practitioner with a background in psychology, cross-cultural learning, and holistic practice. She holds a master’s degree in Human Development and Psychology from Harvard University and draws on extensive international travel and studies in movement, somatic practices, and conflict resolution to support personal and collective transformation. Her work focuses on fostering self-awareness, authentic connection, and heart-centered leadership, helping individuals, leaders, and communities navigate change and build stronger relationships.",
        title: "Consultant, Organizational and Individual Facilitation",
      },
      {
        name: "Megahan Peterson",
        imagePath: "/images/team/megahan-peterson.jfif",
        linkedIn: "https://www.linkedin.com/in/megahan-peterson-3b6b5012/",
        description: "Megahan Peterson is a sustainability and impact investment professional with over 15 years of experience helping investors, corporations, and foundations integrate environmental and social considerations into their strategies. As Founder of Ascend Ventures LLC, she advises on ESG strategy, investment due diligence, and sustainability reporting, drawing on experience at MSCI, KPMG, Loomis Sayles, and ISS. At The Family Offices Global, she helps align private capital and philanthropy with long-term sustainability goals, translating complex impact frameworks into practical investment strategies that balance financial risk with measurable social and environmental outcomes.",
        title: "CIO, Family Offices Global",
      },
      {
        name: "Cassandra Seidenfeld",
        imagePath: "/images/team/cassandra-seidenfeld.jfif",
        linkedIn: "https://www.linkedin.com/in/cassandra-seidenfeld-01b88452/",
        description: "Cassandra is the Founder and CEO of Luxury Level Consultants, LLC, a New York-based consulting firm, and an Angel Investor. A dedicated philanthropist and humanitarian, she focuses her advocacy on human rights, particularly the eradication of human trafficking and the protection of women and girls.\n\nShe serves on the boards of several prominent organizations, including The Heavenly HARVST and on the National Advisory Board of The Sphinx Organization [Former National Board Member].\n\nCassandra has been recognized with the Women4Empowerment Gold Medal of Honor for her humanitarian work. She is also a Global Real Estate Advisor with The Corcoran Group, serving New York City and global markets.\n\nPassionate about giving back, Cassandra has organized and supported numerous charitable events for over two decades throughout New York City and the Hamptons.",
        title:
          "Global Real Estate Advisor and CEO, Luxury Level Consultants LLC",
      },
      {
        name: "Hanadi Zakour",
        imagePath: "/images/team/HanadiZakour.jpg",
        linkedIn: "https://www.linkedin.com/in/hanadi-zakour/",
        description: "Hanadi Zakour is an operational growth strategist with a focus on driving sustainable expansion and strategic development. She brings a unique perspective to the table, combining her expertise in business strategy with a deep commitment to social impact.",
        title: "Operational Growth Strategist, Simone Soleil Advisors",
      },
      {
        name: "Marc Segelnick",
        imagePath: "/images/team/MarcSegelnick.jpg",
        linkedIn: "https://www.linkedin.com/in/marc-segelnick-01346715/",
        description: "Marc Segelnick is a financial services professional with experience in investment advisory, portfolio management, and financial planning. Having worked in the industry since the 1990s, including roles at Central Securities of America and UBS Financial Services, he develops investment strategies tailored to clients’ long-term goals. He holds a BS in Accounting from Brooklyn College and supports clients through personalized portfolio reviews and advisory services. Marc is also active in the investment community and serves on the executive board of Brooklyn College Hillel, alongside his charitable work.",
        title: "Managing Director, Clutch Capital MGMT",
      },
    ],
    advisoryBoardForming: false,
  },
  {
    location: "United Kingdom, London",
    flag: "🇬🇧",
    mdName: "Maryam Rana",
    mdImagePath: "/images/team/maryam-rana.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/maryam-rana-0b21a728b/",
    mdDescription: "Maryam Rana is a History and International Relations student at King’s College London, focusing on international law, South Asian history, and global politics. As President of the Foreign Policy and Security Conference, she brings together students, policymakers, and speakers to discuss geopolitical challenges. An Avicenna Foundation Scholar, she has contributed to political communications and youth-led policy advocacy through organizations including the Afghanistan and Central Asian Association and RAIA. Having participated in international discussions at Davos and UN-related events, Maryam is passionate about diplomacy, multilateralism, and amplifying young people’s voices in global affairs.",
    advisoryBoard: [
      /* hidden:
      { name: "Adam Management CIO", imagePath: "/images/team/adam-management-cio.jpg", role: "Chair" },
      { name: "Brian Willetts", imagePath: "/images/team/brian-willetts.jpg" },
      { name: "Sarah Darwin", imagePath: "/images/team/sarah-darwin.jpg" },
      */
      {
        name: "Frederick Toye",
        imagePath: "/images/team/frederick-toye.jfif",
        linkedIn: "https://www.linkedin.com/in/frederick-toye-48ab2648/",
        description: "Frederick Toye is a British business leader associated with Toye, Kenning & Spencer, a historic manufacturer of ceremonial regalia, textiles, insignia, and embroidery. His work focuses on preserving traditional craftsmanship while adapting the business to contemporary markets. He also supports British manufacturing, industry partnerships, and the continued development of heritage and craft industries, helping sustain traditional skills for future generations.",
        title: "Director, Toye & Co",
      },
      {
        name: "Stuart Smith",
        imagePath: "/images/team/stuart-smith.jfif",
        linkedIn: "https://www.linkedin.com/in/stuart-smith-00380211/",
        description: "Stuart Smith is an international education leader with extensive experience in higher education, student recruitment, and global university partnerships. Before becoming NCUK CEO in August 2021, he served as Director of International at the University of Hertfordshire, helping expand international recruitment, develop transnational education partnerships, and launch a branch campus in Egypt. At NCUK, he leads a global network connecting students with university pathways, expanding partnerships and programmes while advancing digital transformation and access to international education.",
        title: "CEO, NCUK - University Consortium",
      },
      {
        name: "Anthony Sandoval",
        imagePath: "/images/team/anthony-sandoval.jfif",
        linkedIn: "https://www.linkedin.com/in/anthony-h-sandoval/",
        description: "Anthony Sandoval is a Principal at VesperStone Capital, working across investment advisory and capital formation. Through the firm, he helps entrepreneurs and fund managers connect with family offices and institutional investors, navigate fundraising, and pursue growth opportunities. His work focuses on building investor relationships, facilitating strategic partnerships, and supporting long-term business development.",
        title: "Principal, VesperStone Capital",
      },
      {
        name: "Harriet Vocking",
        imagePath: "/images/team/HarrietVocking.jpg",
        linkedIn: "https://www.linkedin.com/in/harriet-vocking-62bab57/",
        description: "Harriet Vocking is a strategic communications leader with over 20 years of experience in brand strategy, sustainability, and reputation management. She helped grow Eco-Age, the sustainability consultancy founded by Livia Firth, and founded Golden Goose PR, earning a Cannes Lions Gold Award. As co-founder of For.Tomorrow, she leads work in sustainability strategy, crisis communications, and greenwash prevention, helping brands communicate environmental commitments credibly and drive meaningful change through transparent storytelling.",
        title: "Founder, For.Tomorrow",
      },
    ],
    advisoryBoardForming: false,
  },
  {
    location: "India, Ranchi",
    flag: "🇮🇳",
    mdName: "Satyam Pandey",
    mdImagePath: "/images/team/SatyamPandey.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/satyyampandey/",
    mdDescription: "Satyam Pandey leads TRIIBE’s India region, focusing on community building, partnerships, and outreach to connect young changemakers and nonprofit founders with opportunities to collaborate and grow. He also helps promote TRIIBE Talks, a platform connecting established and emerging social impact leaders to exchange ideas and experiences. Through his work in business development and startup growth, Satyam supports TRIIBE’s expansion in India and its mission to empower the next generation of nonprofit leaders.",
    advisoryBoard: [
      /* {
        name: "Rajeev Saxena",
        imagePath: "/images/team/rajeev-saxena.jpg",
        linkedIn: "",
        title: "Project Head at Marie Projects Ltd.",
      }, */
      /* {
        name: "Sanjoy Roy Choudhury",
        imagePath: "/images/team/SanjoyRoyChoudhury.jpg",
        linkedIn: "https://www.linkedin.com/in/sanjoy-roychoudhury-2535a5325/",
        title: "International Energy & Commodities Strategist",
      }, */
      /* {
        name: "Indranil Dutta",
        imagePath: "/images/team/IndranilDutta.jpeg",
        linkedIn: "https://www.linkedin.com/in/indrdta/",
        title: "Chief Executive Officer - Leveraging Human Capital",
      }, */
    ],
    advisoryBoardForming: true,
  },
  {
    location: "Singapore",
    flag: "🇸🇬",
    mdName: "Laya Pothunuri",
    mdImagePath: "/images/team/laya-pothunuri.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/laya-pothunuri-964878175/",
    mdDescription: "Laya Pothunuri is a sustainability advocate and researcher focused on circular economy, climate justice, and inclusive design. A mechanical engineering graduate from Nanyang Technological University, she has contributed to conservation and waste-reduction initiatives and represented youth perspectives at international climate conferences. As TRIIBE’s Managing Director for Singapore and Vice Chair of its Associate Board, Laya helps connect emerging changemakers with resources and partnerships to advance sustainable social impact.",
    advisoryBoard: [
      /* hidden:
      { name: "Wen Chiu", imagePath: "/images/team/wen-chiu.jpg" },
      */
      {
        name: "Paul Brook",
        imagePath: "/images/team/paul-brook.jfif",
        linkedIn: "https://www.linkedin.com/in/paul-brook-13ab64258/",
        description: "Paul Brook is an investment banking and corporate finance professional with approximately 30 years of experience across Wall Street and Asian capital markets, spanning principal investing, high-yield trading, and complex financial transactions. He also serves as CEO of PanEuro Group, a global merchant banking group. At Deep Green Capital, Paul focuses on investment strategy, sustainability, and long-term value creation, exploring how climate transition, ESG considerations, and global economic risks shape investment decisions.",
        title: "CEO, Deep Green Capital",
      },
      {
        name: "Christine Amour-Levan",
        imagePath: "/images/team/christine-amour-levan.jfif",
        linkedIn: "https://www.linkedin.com/in/christine-amour-levar007/",
        description: "Christine Amour-Levar is a Singapore-based social entrepreneur and climate advocate with experience in global marketing and communications, including roles at Nike and Temasek Trust. In 2023, she co-founded Investors for Climate to connect investors with solutions in climate technology, clean energy, agriculture, and biodiversity. She also founded Her Planet Earth, supporting conservation and women-led initiatives, and Women Beyond Limits, which promotes women's leadership and mentorship. Through her ventures and her book Wild Wisdom, Christine champions climate action, sustainability, and women's empowerment.",
        title: "Co-Founder, Investors For Climate",
      },
      {
        name: "Ee Ling Lim",
        imagePath: "/images/team/EeLingLim.jpg",
        linkedIn: "https://www.linkedin.com/in/ee-ling-lim/",
        description: "Ee Ling Lim is an entrepreneur and startup ecosystem builder with a background in investment banking and venture capital. As former Head of Market Launch at 500 Global, she led more than 65 startup accelerator programmes across international markets. She co-founded Wavesparks to empower young people across Asia through entrepreneurship education, mentorship, and startup incubation, helping aspiring founders turn ideas into impact-driven ventures. Ee Ling also serves on Singapore’s National Youth Council and National Youth Fund advisory committee and is a board director at raiSE, supporting youth development and social enterprise.",
        title: "Co-Founder, Wavesparks",
      },
    ],
    advisoryBoardForming: false,
  },
  {
    location: "Sierra Leone",
    flag: "🇸🇱",
    mdName: "Musa Konneh",
    mdImagePath: "/images/team/musa-konneh.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/musa-konneh-079673110/",
    mdDescription: "Musa Konneh is a community development practitioner in Sierra Leone focused on youth empowerment and opportunities for underserved communities. Through the Movement for Education and Advocacy Network Salone (MEANS-SL), he supports education, vocational skills development, and livelihood opportunities for vulnerable youth and young mothers. As TRIIBE’s Managing Director for Sierra Leone, he helps connect emerging nonprofit founders and changemakers with resources, partnerships, and opportunities to create lasting social impact.",
    advisoryBoard: [],
    advisoryBoardForming: true,
  },
  {
    location: "Zambia",
    flag: "🇿🇲",
    mdName: "Jonnathan Mtonga",
    mdImagePath: "/images/team/jonnathan-mtonga.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/jonnathanmtonga/",
    mdDescription: "Jonnathan Mtonga is a development and project management professional with experience in monitoring, evaluation, and international development across Zambia and Southern Africa. His work spans agriculture, trade, tourism, and mining, emphasizing program effectiveness and stakeholder collaboration. As TRIIBE’s Managing Director for Zambia, he helps connect emerging nonprofit founders and changemakers with the resources, partnerships, and opportunities needed to expand their social impact.",
    advisoryBoard: [],
    advisoryBoardForming: true,
  },
  {
    location: "Nigeria",
    flag: "🇳🇬",
    mdName: "Patience Nnedinso Eze",
    mdImagePath: "/images/team/patience-nnedinso-eze.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/patience-nnedinso-eze-b25b4bb7/",
    mdDescription: "Patience Nnedinso Eze leads TRIIBE’s regional efforts in Nigeria, connecting emerging nonprofit founders and young changemakers with mentorship, funding, and collaboration opportunities. Through TRIIBE’s global network, she helps strengthen connections between Nigerian communities and the wider social impact ecosystem, supporting the next generation of nonprofit leaders in building sustainable initiatives and creating lasting change.",
    advisoryBoard: [],
    advisoryBoardForming: true,
  },
  /* hidden:
  {
    location: "Canada",
    flag: "🇨🇦",
    mdName: "Ronan Hasan",
    mdImagePath: "/images/team/ronan-hasan.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/ronan-hasan-4b5158241/",
    advisoryBoard: [],
    advisoryBoardForming: true,
  },
  */
  {
    location: "Jamaica",
    flag: "🇯🇲",
    mdName: "Oshane Panton",
    mdImagePath: "/images/team/oshane-panton.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/oshanepanton/",
    mdDescription: "Oshane Panton leads TRIIBE’s work in Jamaica, connecting emerging nonprofit founders and young changemakers with mentorship, resources, and collaboration opportunities. Through his regional leadership, he supports TRIIBE’s mission to strengthen the nonprofit startup ecosystem, expand opportunities for Jamaican changemakers, and help young social impact leaders turn their ideas into meaningful action.",
    advisoryBoard: [],
    advisoryBoardForming: true,
  },
];

export interface TeamMember {
  name: string;
  role: string;
  imagePath: string;
  description?: string;
  linkedIn: string;
}

export const ourTeam: TeamMember[] = [
  {
    name: "Pranay Mishra",
    role: "Head of Website development",
    imagePath: "/images/team/pranay-mishra.jpeg",
    description: "Pranay Mishra leads website development at TRIIBE, managing its production website and building digital experiences for nonprofit founders. A Mechanical Engineering undergraduate at Birla Institute of Technology, Mesra, he combines full-stack development with platform management. Since joining TRIIBE in February 2026, he has contributed to its Fellowship, TRIIBE Index, event ticketing, and Grants experiences, focusing on website reliability, improved functionality, and seamless user engagement.",
    linkedIn: "https://www.linkedin.com/in/pranay--mishra/",
  },
  {
    name: "Riya Bose",
    role: "Head of Google Ad Grants",
    imagePath: "/images/team/riya-bose.jfif",
    description: "Riya Bose leads Google Ad Grants and SEO/GEO at TRIIBE, helping expand the organization’s digital visibility and strengthen the nonprofit startup ecosystem. A Computer Science and Technology undergraduate at RVS College of Engineering and Technology, she focuses on search advertising, audience reach, and digital growth strategies that connect nonprofit founders with potential donors, volunteers, and supporters.",
    linkedIn: "https://www.linkedin.com/in/riya-bose-781699273/",
  },
  {
    name: "Tanuja Bodas",
    role: "Head of Studio design",
    imagePath: "/images/team/tanuja-bodas.jpg",
    description: "Tanuja Bodas leads Studio Design at TRIIBE, combining user experience, visual design, and digital development to strengthen the organization’s digital presence. With a Master of Science in User Experience and Interaction Design from Thomas Jefferson University, she brings expertise in product design, user research, and web experiences. At TRIIBE, she has shaped projects like the TRIIBE 100 website, creating cohesive designs that communicate the organization’s mission and empower its community.",
    linkedIn: "https://www.linkedin.com/in/tanujabodas23/",
  },
  {
    name: "Nancy Thadhani",
    role: "Head of Research",
    imagePath: "/images/team/nancy-thadhani.jpg",
    description: "Nancy Thadhani leads research at TRIIBE, supporting initiatives that strengthen the nonprofit startup ecosystem. A student at Vellore Institute of Technology, she focuses on understanding the challenges early-stage nonprofits face in accessing funding, mentorship, and community. Through her research, Nancy contributes to TRIIBE’s mission of empowering young changemakers with the resources and support needed to sustain and grow their impact.",
    linkedIn: "https://www.linkedin.com/in/nancy-thadhani-48501730a/",
  },
];

/* export const honoraryMembers: HonoraryMember[] = [
  {
    name: "Chirag Nijjer",
    imagePath: "/images/team/chirag-nijjer.jpg",
    linkedIn: "https://www.linkedin.com/in/chiragspeaks/",
  },
  {
    name: "Rowana Miller",
    imagePath: "/images/team/rowana-miller.jpg",
    linkedIn: "https://www.linkedin.com/in/rowana-miller-7506bb179/",
  },
  {
    name: "Anthony Valencia",
    imagePath: "/images/team/anthony-valencia.jpg",
    linkedIn: "https://www.linkedin.com/in/anthony-valencia-1a1a8695/",
  },
  {
    name: "Roman Pikalenko",
    imagePath: "/images/team/roman-pikalenko.jpg",
    linkedIn: "https://www.linkedin.com/in/roman-pikalenko/",
  },
  {
    name: "Davi Santos",
    imagePath: "/images/team/davi-santos.jpg",
    linkedIn: "https://www.instagram.com/davi_santos/",
  },
  {
    name: "Jaden Cappe",
    imagePath: "/images/team/jaden-cappe.jpg",
    linkedIn: "https://www.linkedin.com/in/jaden-cappe/",
  },
  {
    name: "Maximilian Lehmann",
    imagePath: "/images/team/maximilian-lehmann.jpg",
    linkedIn: "https://www.linkedin.com/in/maximilian-lehmann/",
  },
  {
    name: "George Shi",
    imagePath: "/images/team/george-shi.jpg",
    linkedIn: "https://www.linkedin.com/in/george-shi-4a9b18190/",
  },
  {
    name: "Frederick Tsao",
    imagePath: "/images/team/frederick-tsao.jpg",
    linkedIn: "https://www.linkedin.com/in/frederick-mochizuki-tsao/",
  },
  {
    name: "Dominic Yap",
    imagePath: "/images/team/dominic-yap.jpg",
    linkedIn: "https://www.linkedin.com/in/dominic-yap-62b546266/",
  },
  {
    name: "Dylan Hanson",
    imagePath: "/images/team/dylan-hanson.jpg",
    linkedIn: "https://www.linkedin.com/in/~dylan/",
  },
  {
    name: "Keshav Sani",
    imagePath: "/images/team/keshav-sani.jpg",
    linkedIn: "https://www.linkedin.com/in/keshav-sani-853550204/",
  },
  {
    name: "Aaradhya Thakur",
    imagePath: "/images/team/aaradhya-thakur.jpg",
    linkedIn: "https://www.linkedin.com/in/aaradhya-thakur-674b1b1a4/",
  },
  {
    name: "Stephanie Pacheco",
    imagePath: "/images/team/stephanie-pacheco.jpg",
    linkedIn: "https://www.linkedin.com/in/stephanie-pacheco-086225201/",
  },
  {
    name: "Tahnoon Murtza",
    imagePath: "/images/team/tahnoon-murtza.jpg",
    linkedIn: "https://www.linkedin.com/in/tahnoon-m-b4071419a/",
  },
  {
    name: "Sina Albanese",
    imagePath: "/images/team/sina-albanese.jpg",
    linkedIn: "https://www.linkedin.com/in/sina-albanese/",
  },
  {
    name: "Himal Pandey",
    imagePath: "/images/team/himal-pandey.jpg",
    linkedIn: "https://www.linkedin.com/in/himalpandey/",
  },
  {
    name: "Will Reynolds",
    imagePath: "/images/team/will-reynolds.jpg",
    linkedIn: "https://www.linkedin.com/in/wreynoldsnz/",
  },
  {
    name: "Jacob Shulman",
    imagePath: "/images/team/jacob-shulman.jpg",
    linkedIn: "https://www.linkedin.com/in/jacob-shulman-85a44720b/",
  },
  {
    name: "Luis Utrilla",
    imagePath: "/images/team/luis-utrilla.jpg",
    linkedIn: "https://www.linkedin.com/in/luis-utri-athlete-zero/",
  },
  {
    name: "Alex Garfin",
    imagePath: "/images/team/alex-garfin.jpg",
    linkedIn: "https://www.instagram.com/alexgarfin/",
  },
  {
    name: "Mahir Laul",
    imagePath: "/images/team/mahir-laul.jpg",
    linkedIn: "https://www.linkedin.com/in/mahirlaul/",
  },
  {
    name: "Aria Mohajer",
    imagePath: "/images/team/aria-mohajer.png",
    linkedIn: "https://www.linkedin.com/in/aria-mohajer/",
  },
]; */
