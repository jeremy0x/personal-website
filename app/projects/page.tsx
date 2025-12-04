"use client";
import Image from "next/image";
import { Suspense, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Blur,
  Breadcrumbs,
  FloatingContactIcon,
  Navbar,
  ProjectModal,
} from "@/components";
import ParticlesComponent from "@/components/Particles";
import { fadeInAnimation } from "@/utils/framerAnimations";
import { ProjectData } from "@/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTelegram,
  BiLogoTypescript,
} from "react-icons/bi";
import { ImSpinner9 } from "react-icons/im";
import {
  SiFramer,
  SiGreensock,
  SiNextdotjs,
  SiRemix,
  SiVite,
} from "react-icons/si";

export default function Projects() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );

  const handleSlideClick = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && swiper) {
        swiper.slidePrev();
      } else if (e.key === "ArrowRight" && swiper) {
        swiper.slideNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [swiper]);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Projects", item: "/projects" },
        ]}
      />
      <AnimatePresence mode="wait">
        <motion.main
          className="mx-auto flex min-h-dvh items-center justify-center bg-white pt-20 text-neutral-900 dark:bg-neutral-900 dark:text-white"
          {...fadeInAnimation}
        >
          <Suspense fallback={null}>
            <ParticlesComponent id="tsparticles" />
          </Suspense>

          <motion.div className="page-content" {...fadeInAnimation}>
            <Blur />
            <Navbar />

            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
              }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              spaceBetween={20}
              className="mySwiper"
              onSwiper={setSwiper}
              style={
                { "--swiper-navigation-size": "25px" } as React.CSSProperties
              }
            >
              {projectsData.map((project, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  style={{ maxWidth: "100%", width: "100%" }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onClick={() => handleProjectClick(project)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <FloatingContactIcon />
        </motion.main>
      </AnimatePresence>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const { name, description, logos, imageSrc } = project;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative" onClick={onClick}>
      <div className="cursor-pointer">
        {isLoading && (
          <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center">
            <ImSpinner9 className="animate-spin text-4xl" />
          </div>
        )}
        <Image
          alt={`${name} screenshot`}
          width={575}
          height={575}
          src={imageSrc}
          priority={index === 0}
          onLoad={() => setIsLoading(false)}
          className="rounded-xl bg-black/30 transition-all max-md:w-full"
        />
      </div>

      <div className="absolute top-0 right-0 bottom-0 left-0 w-full cursor-pointer rounded-xl bg-white/30 opacity-40 transition-opacity duration-500 sm:opacity-100 sm:hover:opacity-20 dark:bg-black/50" />

      <div className="absolute bottom-0 left-0 w-full rounded-lg p-2">
        <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-white/80 px-2 py-4 text-center backdrop-blur-xs dark:bg-black/60">
          <p className="text-sm font-medium sm:text-base">{description}</p>
          <div className="flex items-center gap-4 text-2xl">{logos}</div>
        </div>
      </div>
    </div>
  );
}

const projectsData: ProjectData[] = [
  {
    name: "Noblocks",
    link: "https://noblocks.xyz",
    githubLink: "https://github.com/paycrest/noblocks",
    description: "Next-gen crypto payment solution with zero gas fees.",
    detailedDescription:
      "Advanced crypto payment platform eliminating P2P transaction complexity. Built with Next.js, TypeScript, and Framer Motion. Features instant settlements, real-time tracking, and comprehensive merchant tools.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/noblocks.jpg",
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
    name: "Valtrix",
    link: "https://valtrix.jeremy0x.dev/",
    githubLink: "https://github.com/valtrix-co/website",
    description: "Official website showcasing blockchain solutions.",
    detailedDescription:
      "Official Valtrix website with clean, professional design. Features smooth animations and effective communication of mission and services.",
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
    name: "Zap by Paycrest",
    link: "https://zap-beta.jeremy0x.dev/",
    githubLink: "https://github.com/paycrest/zap",
    description: "Hackathon-winning crypto payment solution (Deprecated).",
    detailedDescription:
      "Initial Paycrest payment solution from Based Africa hackathon. Winner project demonstrating core crypto-to-fiat functionality. Deprecated in favor of Noblocks.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/zap.jpg",
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
