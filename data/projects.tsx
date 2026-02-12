import { ProjectData } from "@/types";
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
} from "react-icons/si";

export const projectsData: ProjectData[] = [
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
    name: "Noblocks",
    link: "https://noblocks.xyz",
    githubLink: "https://github.com/paycrest/noblocks",
    description:
      "Open-source, next-gen crypto payment solution with zero gas fees.",
    detailedDescription:
      "Open-source advanced crypto payment platform eliminating P2P transaction complexity. Built with Next.js, TypeScript, and Framer Motion. Features instant settlements, real-time tracking, and comprehensive merchant tools.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/noblocks.jpg",
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
    name: "Paycrest Dashboard",
    link: "https://app.paycrest.io",
    description: "Operations console for Paycrest's crypto-to-fiat rails.",
    detailedDescription:
      "Operations workspace for Paycrest that tracks settlements, liquidity, compliance states, and merchant activity while orchestrating the crypto-to-fiat bridge in real time. Includes wallets overview, analytics, and payout tooling.",
    logos: [
      <SiRemix className="text-sm" key="remix" title="Remix JS" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/paycrest-dashboard.jpg",
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
    name: "Salvage Yard Store",
    link: "https://www.salvageyardstore.com",
    description: "Dual-sided e-commerce platform for electronic devices.",
    detailedDescription:
      "E-commerce platform with separate buyer and seller interfaces. Features inventory management, real-time stock updates, customer accounts, and order tracking. Built with Next.js and TypeScript.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/salvage-yard-store.jpg",
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
  },

  {
    name: "Shape Up Fitness",
    link: "https://shapeupfitnessonline.com",
    githubLink: "https://github.com/jeremy0x/project-suf",
    description: "Platform showcasing fitness services and gym facilities.",
    detailedDescription:
      "Information platform for Shape Up Fitness gym. Features facility showcases, service listings, schedules, and trainer profiles. Built with React, TypeScript, Vite, and Framer Motion.",
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
    name: "Qari",
    link: "https://qariworld.com",
    githubLink: "https://github.com/jeremy0x/project-qari",
    description: "Premium ride-hailing waitlist site centered on fair pricing.",
    detailedDescription:
      "Marketing site for Qari, the Lagos-based ride-hailing platform promising clean vehicles, transparent fixed fares, rider rewards, and WhatsApp-first driver support—designed to grow the waitlist and spotlight its low-commission model.",
    logos: [
      <SiVite className="text-xl" key="vite" title="Vite" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/qari.jpg",
  },

  {
    name: "Step-Up Academy",
    link: "https://academy.stepupsummit.org",
    description:
      "Multi-page academy site that enrolls students into cohorts with payments and automated email flows.",
    detailedDescription:
      "Marketing and enrollment experience for Step-Up Academy, combining a Vite-powered landing with Next.js API routes in a Turborepo to handle Paystack payments and Resend-powered transactional emails for new cohorts and programs.",
    logos: [
      <SiVite className="text-xl" key="vite" title="Vite" />,
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
      <SiPostgresql className="text-lg" key="postgres" title="PostgreSQL" />,
    ],
    imageSrc: "/projects/stepup-academy.jpg",
  },

  {
    name: "Paycrest Landing Page",
    link: "https://paycrest.io",
    description: "Marketing site introducing Paycrest's payments platform.",
    detailedDescription:
      "High-converting landing page that explains Paycrest's crypto-to-fiat infrastructure, highlights instant settlement benefits, and funnels prospects into demos. Built with Next.js, Tailwind CSS, TypeScript, and Framer Motion for polished storytelling.",
    logos: [
      <SiNextdotjs key="next.js" className="text-lg" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/paycrest.jpg",
  },

  {
    name: "Mindlar",
    link: "https://mindlar.com",
    githubLink: "https://github.com/mindlar/landing-page",
    description: "Landing page for a learning community.",
    detailedDescription:
      "Landing page for Mindlar learning community. Features engaging design that communicates community values and offerings.",
    logos: [
      <SiVite className="text-xl" key="vite" title="Vite" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/mindlar-landing-page.jpg",
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
    name: "Valtrix",
    link: "https://valtrix.jeremy0x.dev/",
    githubLink: "https://github.com/valtrix-co/website",
    description:
      "Website for a company that offers software development services.",
    detailedDescription:
      "Official Valtrix website for a creative design agency offering software development services. Features clean, professional design with smooth animations and effective communication of mission and services.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/projects/valtrix.jpg",
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
    name: "Elder Wallet",
    link: "https://elderwallet.jeremy0x.dev",
    githubLink: "https://github.com/jeremy0x/elder-wallet",
    description: "Proof of concept Bitcoin wallet with Runes Network support.",
    detailedDescription:
      "Bitcoin wallet demo showcasing Runes Network protocol integration. Features user-friendly interface for managing Bitcoin and Runes assets.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
    ],
    imageSrc: "/projects/elder-wallet.jpg",
  },

  {
    name: "MentorMeInTech Waitlist",
    link: "https://mentormeintech.jeremy0x.dev",
    description: "Waitlist platform for MentorMeInTech mentorship program.",
    detailedDescription:
      "Waitlist platform connecting tech professionals with aspiring developers. Features email collection and social sharing. Evolved into full platform.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/projects/mentormeintech.jpg",
  },

  {
    name: "foodieFetch",
    link: "https://foodie-fetch.jeremy0x.dev",
    githubLink: "https://github.com/jeremy0x/foodie-fetch",
    description: "Recipe finder app based on available ingredients.",
    detailedDescription:
      "Personal project helping users discover meals from available ingredients. Features ingredient search, filtering, nutritional info, and step-by-step instructions.",
    logos: [
      <BiLogoJavascript key="javaScript" title="JavaScript" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoHtml5 key="html" title="HTML" />,
    ],
    imageSrc: "/projects/foodie-fetch.jpg",
  },

  {
    name: "LingoLookup",
    link: "https://lingolookup.jeremy0x.dev",
    githubLink: "https://github.com/jeremy0x/lingo-lookup",
    description: "Comprehensive dictionary app with advanced features.",
    detailedDescription:
      "Personal dictionary application with definitions, synonyms, antonyms, pronunciation, and examples. Features word of the day, search history, and favorites.",
    logos: [
      <SiVite key="vite" title="Vite" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoJavascript key="javaScript" title="JavaScript" />,
    ],
    imageSrc: "/projects/lingo-lookup.jpg",
  },

  {
    name: "Mullti",
    link: "https://mullti.jeremy0x.dev",
    description: "Dual-sided e-commerce platform with unique design.",
    detailedDescription:
      "E-commerce platform with buyer and seller interfaces. Features product catalog, shopping cart, authentication, and order management with unique design.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoJavascript key="javaScript" title="JavaScript" />,
    ],
    imageSrc: "/projects/mullti.jpg",
  },

  {
    name: "Sways",
    link: "https://sways.jeremy0x.dev",
    githubLink: "https://github.com/jeremy0x/project-sways",
    description: "Custom Dutch brand website with modern design.",
    detailedDescription:
      "Custom website with minimalist design and smooth animations. Responsive layout optimized for all devices. Built with Next.js and Tailwind CSS.",
    logos: [
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoJavascript key="javaScript" title="JavaScript" />,
    ],
    imageSrc: "/projects/sways.jpg",
  },
];

