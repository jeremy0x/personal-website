import type { JSX } from "react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTelegram,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiFramer,
  SiGreensock,
  SiNextdotjs,
  SiRemix,
  SiVite,
  SiPostgresql,
  SiFigma,
  SiFlutter,
  SiDart,
  SiGoogleplay,
} from "react-icons/si";
import { FaAppStore } from "react-icons/fa";

export interface ProjectData {
  name: string;
  link: string;
  githubLink?: string;
  description: string;
  detailedDescription?: string;
  logos: JSX.Element[];
  imageSrc: string;
  videoSrc?: string;
}

export const projectsData: ProjectData[] = [
  {
    name: "Curtain Reveal",
    link: "https://gsap-concepts.jeremy0x.dev/curtain-reveal/",
    description: "Immersive curtain reveal and counting preloader animation concept.",
    detailedDescription:
      "A premium curtain reveal and counting preloader animation concept built with GSAP, CustomEase, and SplitText. Features elegant image fan-out and smooth typography transitions.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/curtain-reveal.jpg",
    videoSrc: "/projects/curtain-reveal.mp4",
  },

  {
    name: "Card Shuffle Reveal",
    link: "https://gsap-concepts.jeremy0x.dev/card-shuffle-reveal/",
    description: "Radial card deck preloader, horizontal toss reveal, and expanding typography hero.",
    detailedDescription:
      "An experimental card shuffle preloader and reveal timeline concept built with GSAP and CustomEase. Features radial fan layout animations, horizontal card tossing, and dynamically scaling typography.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/card-shuffle-reveal.jpg",
    videoSrc: "/projects/card-shuffle-reveal.mp4",
  },

  {
    name: "Trailer Intro",
    link: "https://gsap-concepts.jeremy0x.dev/trailer-intro/",
    description: "Kinetic title sequence reveal with staggered text blocks, Anime.js typography animation, and floating replay controls.",
    detailedDescription:
      "An experimental kinetic trailer intro reveal timeline concept built with GSAP and Anime.js. Features staggered title wipes, kinetic text block reveals, and dynamic letter-by-letter typography animations.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/trailer-intro.jpg",
    videoSrc: "/projects/trailer-intro.mp4",
  },

  {
    name: "Circle Wipe Intro",
    link: "https://gsap-concepts.jeremy0x.dev/circle-wipe-intro/",
    description: "Brand intro sequence with floating food items, radial circle wipe reveals, and interactive navigation.",
    detailedDescription:
      "An interactive brand intro concept featuring floating elements, smooth multi-layered radial circle wipe transition panels, and a custom overlay mobile menu powered by GSAP.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/circle-wipe-intro.jpg",
    videoSrc: "/projects/circle-wipe-intro.mp4",
  },

  {
    name: "Reelpay Mobile App",
    link: "https://reelpay-web-link.onelink.me/FMTg/925gmol4",
    description:
      "Mobile application connecting UGC creators and influencers with brand collaborations.",
    detailedDescription:
      "A dedicated mobile platform built for content creators. It enables creators to find brand campaigns, manage job workflows, build professional video portfolios, and receive secure payments.",
    logos: [
      <SiFlutter className="text-lg" key="flutter" title="Flutter" />,
      <SiDart className="text-lg" key="dart" title="Dart" />,
      <SiGoogleplay className="text-lg" key="googleplay" title="Google Play Store" />,
      <FaAppStore className="text-lg" key="appstore" title="Apple App Store" />,
    ],
    imageSrc: "/projects/reelpay-play-store.jpg",
  },

  {
    name: "Noblocks",
    link: "https://noblocks.xyz",
    githubLink: "https://github.com/paycrest/noblocks",
    description:
      "Intuitive interface for moving between stablecoins and local bank or mobile money accounts.",
    detailedDescription:
      "An intuitive interface for moving between stablecoins and local currency. You can cash out stablecoins to bank or mobile money, or buy stablecoins with fiat—powered by Paycrest's decentralized liquidity network across multiple regions, including Kenya (KES), Uganda (UGX), Nigeria (NGN), Tanzania (TZS), and more.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/noblocks.jpg",
  },

  {
    name: "BriefIntel",
    link: "https://reelpay.co/briefintel",
    description:
      "AI-powered tool for brands to optimize UGC briefs and analyze campaign performance.",
    detailedDescription:
      "An intelligent platform within Reelpay that enables brands to analyze UGC campaign performance and generate optimized content briefs. Streamlines the brief creation process by generating requirements directly from product links.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
      <SiFigma className="text-lg" key="figma" title="Figma" />,
    ],
    imageSrc: "/projects/briefintel.jpg",
  },

  {
    name: "Football for Peace",
    link: "https://football-for-peace.vercel.app",
    description:
      "Interactive showcase of the Football for Peace initiative, celebrating its South American heritage and global mission.",
    detailedDescription:
      "An immersive, animated timeline experience detailing the history and impact of the Football for Peace (Fútbol Por La Paz) initiative, highlighting its United Nations partnerships (UNOSDP) and support from global icons like Pelé and Maradona.",
    logos: [
      <SiVite className="text-xl" key="vite" title="Vite" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/ffp.jpg",
    videoSrc: "/projects/ffp.mp4",
  },

  {
    name: "Kazlat LIMS",
    link: "https://lims.kazlatpublicanalysts.com",
    description:
      "Lab information management system for Kazlat to track samples, invoices, and certificates.",
    detailedDescription:
      "Production LIMS for Kazlat Public Analysts that tracks sample submissions through analysis, automates invoice generation, and produces signed certificates for clients. Built with Next.js, TypeScript, Tailwind CSS, Supabase/PostgreSQL, and Framer Motion.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiPostgresql className="text-lg" key="postgres" title="PostgreSQL" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/kazlat-lims.jpg",
  },

  {
    name: "Paycrest",
    link: "https://paycrest.io",
    description:
      "Core business infrastructure for Paycrest, spanning their marketing website and merchant operations dashboard.",
    detailedDescription:
      "Crafted Paycrest's end-to-end customer-facing rails, including the high-converting marketing website and the core Remix-based operations dashboard tracking merchant transactions, settlements, and liquidity flows.",
    logos: [
      <SiNextdotjs key="next.js" className="text-lg" title="Next.js" />,
      <SiRemix key="remix" className="text-sm" title="Remix JS" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/paycrest.jpg",
  },

  {
    name: "Surgechain",
    link: "https://app.surgechain.io",
    description:
      "DEX terminal for tracking trending tokens, news, pump-fun launches, and perpetuals with live trading.",
    detailedDescription:
      "Full-featured DEX trading terminal that brings news, pump-fun style memecoins, trending tokens, and perpetuals into a single interface, with real order execution wired into on-chain liquidity. Built with Next.js, TypeScript, Tailwind CSS, and Supabase/PostgreSQL.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiPostgresql className="text-lg" key="postgres" title="PostgreSQL" />,
    ],
    imageSrc: "/projects/surgechain.jpg",
  },

  {
    name: "Lync",
    link: "https://thelync.app",
    description: "Landing page for Lync product.",
    detailedDescription:
      "Landing page showcasing the Lync product. Features modern design and clear product communication.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/lync-landinge-page.jpg",
    videoSrc: "/projects/lync.mp4",
  },

  {
    name: "Noblocks Blog",
    link: "https://noblocks.xyz/blog",
    githubLink: "https://github.com/paycrest/noblocks/tree/main/app/blog",
    description: "Blog platform powered by Sanity.io for Noblocks.",
    detailedDescription:
      "Content management system for Noblocks blog using Sanity.io headless CMS. Features dynamic content rendering, SEO optimization, and seamless integration with the main platform.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/noblocks-blog.jpg",
  },

  {
    name: "AI Titans",
    link: "https://t.me/AI_Titans_bot",
    description: "Battle-focused tap-to-earn RPG built as a Telegram Mini App.",
    detailedDescription:
      "Telegram Mini App that lets players command mech titans, battle through tap-to-earn encounters, and sync rewards directly inside chat. Includes Tailwind-driven UI, Telegram SDK auth, and real-time battle state updates.",
    logos: [
      <SiVite className="text-xl" key="vite" title="Vite" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
      <BiLogoTelegram key="telegram" title="Telegram Mini Apps SDK" />,
    ],
    imageSrc: "/projects/ai-titans.jpg",
  },

  {
    name: "$Dogatoshi",
    link: "https://dogatoshi.jeremy0x.dev/",
    githubLink: "https://github.com/jeremy0x/dogatoshi",
    description: "Informative website for $Dogatoshi meme coin community.",
    detailedDescription:
      "Community website providing project information and details. Built with JavaScript and Tailwind CSS with an engaging, energetic UI.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
    ],
    imageSrc: "/projects/dogatoshi.jpg",
  },

  {
    name: "Sesshin",
    link: "https://sesshin.jeremy0x.dev",
    githubLink: "https://github.com/jeremy0x/Sesshin",
    description: "Custom brand website with immersive animations.",
    detailedDescription:
      "Custom website for Sesshin brand featuring GSAP-powered animations. Combines modern design with smooth transitions and interactive elements.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/sesshin.jpg",
    videoSrc: "/projects/sesshin.mp4",
  },

  {
    name: "BahamaFoodie",
    link: "http://hellobahamafoodie.com",
    description: "Digital plant-based restaurant platform in the Bahamas.",
    detailedDescription:
      "Platform for a plant-based restaurant in The Bahamas. Featured menu browsing, online ordering, and delivery tracking. Built with vanilla JavaScript and GSAP animations.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/hellobahamafoodie.jpg",
  },

  {
    name: "RoomLink",
    link: "https://roomlinkng.com/",
    description:
      "Nigeria's agent-free property rental platform connecting verified landlords and renters.",
    detailedDescription:
      "An agent-free rental platform in Nigeria that directly connects verified landlords and renters, facilitating verified listings, secure in-app monthly payments, and direct messaging to eliminate middleman fees.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/roomlink.jpg",
  },

  {
    name: "Shape Up Fitness",
    link: "https://shapeupfitnessonline.com",
    githubLink: "https://github.com/jeremy0x/project-suf",
    description:
      "Fitness platform with integrated shopping management and admin dashboard features.",
    detailedDescription:
      "Information and business platform for Shape Up Fitness gym. Features facility showcases, schedules, trainer profiles, shopping management capabilities, and admin features.",
    logos: [
      <SiVite key="vite" title="Vite" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/shape-up-fitness.jpg",
  },

  {
    name: "Sentinel Finance",
    link: "https://sentfi.jeremy0x.dev",
    githubLink: "https://github.com/jeremy0x/sentinel-finance",
    description: "Decentralized commerce platform with payment integration.",
    detailedDescription:
      "Proof-of-concept dCommerce platform combining e-commerce with blockchain. Features modern UI, secure payments, and transaction monitoring. Built with vanilla JavaScript and GSAP.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/sentfi.jpg",
  },
];
