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
  SiThreedotjs,
  SiStripe,
  SiWebflow,
  SiExpo,
  SiFirebase,
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
    name: "Pure H2o",
    link: "https://pureh2o.jeremy0x.dev/",
    description:
      "Redesign of Pure H2o, a UK water purification company.",
    detailedDescription:
      "A redesign of pureh2o.co.uk for Pure H2o, a UK manufacturer of reverse osmosis and ultra-pure water treatment systems, covering the homepage and About page. The homepage features scroll-driven storytelling with a split-word about section, a pinned customer journey timeline, industry and product carousels, animated stats, and a past projects showcase. The About page adds a pinned mission slider, a scroll-driven globe section, and a company history timeline, all built with Framer Motion.",
    logos: [
      <SiVite className="text-xl" key="vite" title="Vite" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoCss3 key="css" title="CSS" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/pureh2o.jpg",
    videoSrc: "/projects/pureh2o.mp4",
  },

  {
    name: "Muse Podcasts",
    link: "https://apps.apple.com/ng/app/muse-podcasts/id6748816132",
    description:
      "Mobile app where podcasts meet community: shows, reels, and creator-led communities in one place.",
    detailedDescription:
      "A podcast and community app for iPhone and iPad. Listeners discover, download, and play episodes offline, scroll a short-form reels feed from creators, join or run communities with real-time group chats, and message creators directly. Includes exclusive creator-only content, a built-in Muse AI assistant inside communities, and safety tooling with reporting, blocking, moderation, and age-appropriate content controls.",
    logos: [
      <BiLogoReact key="react-native" title="React Native" />,
      <SiExpo className="text-lg" key="expo" title="Expo" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <BiLogoTailwindCss key="nativewind" title="NativeWind" />,
      <SiFirebase className="text-lg" key="firebase" title="Firebase" />,
      <FaAppStore className="text-lg" key="appstore" title="Apple App Store" />,
    ],
    imageSrc: "/projects/muse-podcasts.jpg",
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
    imageSrc: "/projects/reelpay-app-store.jpg",
  },

  {
    name: "Rock The House",
    link: "https://rth-prototype.jeremy0x.dev/",
    description:
      "Cinematic website prototype for Rock The House, a live event production group.",
    detailedDescription:
      "A desktop website prototype for Rock The House, a live event production group operating since 1999. Features an image-collage preloader, a full-bleed video hero, Lenis smooth scrolling, and a WebGL-curved featured work reel of video textures built with Three.js and GSAP.",
    logos: [
      <SiVite className="text-xl" key="vite" title="Vite" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
      <SiThreedotjs className="text-lg" key="three" title="Three.js" />,
    ],
    imageSrc: "/projects/rth.jpg",
    videoSrc: "/projects/rth.mp4",
  },

  {
    name: "OWLchemi",
    link: "https://owlchemi.com",
    description:
      "E-commerce store for third-party tested research peptides and compounds.",
    detailedDescription:
      "An animated storefront for OWLchemi, a supplier of research-grade peptides with batch-specific Certificates of Analysis. Features a compliance age gate, GSAP scroll-driven product reveals, Lenis smooth scrolling, a research merch line, and Stripe-powered checkout.",
    logos: [
      <SiVite className="text-xl" key="vite" title="Vite" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
      <SiStripe className="text-lg" key="stripe" title="Stripe" />,
    ],
    imageSrc: "/projects/owlchemi.jpg",
    videoSrc: "/projects/owlchemi.mp4",
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
    name: "Reelpay Web App",
    link: "https://reelpay.co",
    description:
      "Platform for brands to launch UGC campaigns and get authentic videos from vetted human creators.",
    detailedDescription:
      "Reelpay's brand-facing web app and marketing site. Brands post campaign briefs, get matched with vetted creators by niche and content style, then review submissions, request revisions, approve, and download ready-to-use videos from a single dashboard, with secure payments and creator payouts built in. Includes BriefIntel, an AI tool that generates optimized content briefs straight from a product link and analyzes UGC campaign performance, plus a public creator gallery and pricing.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
      <SiFigma className="text-lg" key="figma" title="Figma" />,
    ],
    imageSrc: "/projects/reelpay-web.jpg",
  },
  {
    name: "Paycrest Dashboard",
    link: "https://app.paycrest.io",
    description:
      "Operations dashboard for Paycrest's senders and liquidity providers.",
    detailedDescription:
      "The web app senders and liquidity providers use to run on Paycrest's stablecoin payment routing protocol. Senders complete KYB, manage API keys and webhooks, set their own fees, and track on-ramp and off-ramp orders. Providers set rates for their currency pairs, configure payment service providers and their provision node, and monitor liquidity and order settlements.",
    logos: [
      <SiRemix key="remix" className="text-sm" title="Remix JS" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/paycrest-dashboard.jpg",
  },

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
    name: "Evolve Foundation",
    link: "https://evolve-foundation-malkain.webflow.io/",
    description:
      "Website for Evolve Foundation, a clean energy workforce development nonprofit.",
    detailedDescription:
      "A Webflow site for Evolve Foundation, which connects untapped talent to careers in the clean energy industry through training, employer partnerships, and wraparound support. Features GSAP ScrollTrigger and SplitText animations with Lenis smooth scrolling.",
    logos: [
      <SiWebflow className="text-lg" key="webflow" title="Webflow" />,
      <BiLogoJavascript key="js" title="JavaScript" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/evolve-foundation.jpg",
    videoSrc: "/projects/evolve-foundation.mp4",
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
    name: "Shape Up Fitness",
    link: "https://shapeupfitnessonline.com",
    githubLink: "https://github.com/jeremy0x/project-suf",
    description:
      "Website and online shop for Shape Up Fitness, a gym in Akure, Nigeria.",
    detailedDescription:
      "Bold, editorial site for a community gym near FUTA South Gate. Covers its nine programmes from body toning to boxing and dance aerobics, a live session timetable that tracks the next class in Akure time, membership plans with an FAQ, a gallery, and member testimonials. The built-in shop lets members browse gym wear and accessories with search, a wishlist, a cart, and stock badges, then order on WhatsApp, with admin features for managing products.",
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
    videoSrc: "/projects/bahamafoodie.mp4",
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
