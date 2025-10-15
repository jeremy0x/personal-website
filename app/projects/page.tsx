"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Blur, FloatingContactIcon, Navbar, ProjectModal } from "@/components";
import ParticlesComponent from "@/components/Particles";
import { fadeInAnimation } from "@/utils/framerAnimations";
import { ProjectData } from "@/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
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

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          className="mx-auto flex min-h-screen items-center justify-center bg-white pt-10 text-neutral-900 dark:bg-neutral-900 dark:text-white"
          {...fadeInAnimation}
        >
          <ParticlesComponent id="tsparticles" />

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
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              spaceBetween={20}
              className="mySwiper"
              onSwiper={setSwiper}
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

            <p className="relative z-10 mt-4 text-center text-sm text-neutral-600 dark:text-gray-500">
              Click on any project card to see more details, including tech
              stack and live preview.
            </p>

            <p className="relative z-10 mt-2 text-center text-sm text-neutral-600 dark:text-gray-500">
              Use pagination or drag to navigate through projects.
            </p>
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
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
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
          className="rounded-xl bg-black/30 transition-all"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 w-full cursor-pointer rounded-xl bg-white/30 opacity-40 transition-opacity duration-500 dark:bg-black/50 sm:opacity-100 sm:hover:opacity-20" />

      <div className="absolute bottom-0 left-0 w-full p-2">
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
    name: "Paycrest",
    link: "https://paycrest.io",
    description:
      "A revolutionary decentralized payment protocol enabling seamless crypto-to-fiat transactions.",
    detailedDescription:
      "Paycrest is a cutting-edge payment protocol that bridges the gap between cryptocurrency and traditional fiat payments. Built with Remix.js and TypeScript, it offers a secure, efficient, and user-friendly platform for businesses and individuals to accept crypto payments while receiving fiat currency. The platform features real-time transaction monitoring, automated settlement, and robust security measures.",
    logos: [
      <SiRemix key="remix" className="text-lg" title="Remix JS" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
    ],
    imageSrc: "/projects/paycrest.jpg",
  },
  {
    name: "Noblocks",
    link: "https://noblocks.xyz",
    githubLink: "https://github.com/paycrest/noblocks",
    description:
      "Next-generation crypto payment solution eliminating P2P stress with zero gas fees.",
    detailedDescription:
      "Noblocks is an advanced upgrade from the Zap platform, offering a more sophisticated and efficient crypto payment solution. Built with Next.js and TypeScript, it eliminates gas fees and provides instant settlements while significantly reducing the complexity and stress of peer-to-peer transactions. The platform features a modern, responsive UI with Framer Motion animations, real-time transaction tracking, and comprehensive merchant tools that streamline the entire payment process.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/noblocks.jpg",
  },
  {
    name: "Zap by Paycrest",
    link: "https://zap-beta.jeremy0x.dev/",
    githubLink: "https://github.com/paycrest/zap",
    description:
      "Hackathon-winning crypto payment solution (Deprecated) - Upgraded to Noblocks.",
    detailedDescription:
      "The initial version of Paycrest's crypto payment solution, developed during the Based Africa hackathon. Built with Next.js, TypeScript, and Framer Motion, it demonstrated the core functionality of crypto-to-fiat payments. The project was a winner in the hackathon and served as the foundation for the more advanced Noblocks solution. The platform has been deprecated in favor of Noblocks but remains a significant milestone in Paycrest's development journey.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/zap.jpg",
  },

  {
    name: "Shape Up Fitness",
    link: "https://shapeupfitnessonline.com",
    description:
      "Informative platform showcasing fitness services and gym facilities.",
    detailedDescription:
      "A comprehensive information platform for Shape Up Fitness gym, built with React and TypeScript. The website showcases the gym's facilities, services offered, workout schedules, and trainer profiles. Features a modern, responsive design with smooth animations powered by Framer Motion, optimized for both desktop and mobile users.",
    logos: [
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
      <SiVite key="vite" title="Vite" />,
    ],
    imageSrc: "/projects/shape-up-fitness.jpg",
  },
  {
    name: "Salvage Yard Store",
    link: "https://www.salvageyardstore.com",
    description: "Dual-sided e-commerce platform for automotive parts trading.",
    detailedDescription:
      "A comprehensive e-commerce platform built with Next.js and TypeScript, featuring separate interfaces for buyers and sellers. The platform enables salvage yards to list their inventory while allowing buyers to browse, search, and purchase parts. Features include inventory management, real-time stock updates, customer accounts, and order tracking. The platform uses Tailwind CSS for styling and Framer Motion for smooth animations.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/salvage-yard-store.jpg",
  },
  {
    name: "Sentinel Finance",
    link: "https://sentfi.jeremy0x.dev",
    githubLink: "https://github.com/jeremy0x/sentinel-finance",
    description:
      "Decentralized commerce platform with integrated payment solutions.",
    detailedDescription:
      "Sentinel Finance is a proof-of-concept dCommerce platform that combines traditional e-commerce with blockchain technology. Built with vanilla JavaScript and enhanced with GSAP animations, it features a modern UI, secure payment processing, and real-time transaction monitoring. The platform demonstrates the potential of decentralized commerce.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/sentfi.jpg",
  },
  {
    name: "Valtrix",
    link: "https://valtrix.jeremy0x.dev/",
    githubLink: "https://github.com/valtrix-co/website",
    description:
      "Official website for Valtrix - showcasing innovative blockchain solutions.",
    detailedDescription:
      "The official website for Valtrix, built with modern web technologies. Features a clean, professional design with smooth animations and transitions. The site effectively communicates Valtrix's mission and services while maintaining optimal performance and accessibility.",
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
    description:
      "Custom brand website with immersive animations and modern design.",
    detailedDescription:
      "A custom website for the Sesshin brand, featuring immersive animations powered by GSAP. The site combines modern design principles with smooth transitions and interactive elements. Built with vanilla JavaScript for optimal performance and flexibility.",
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
    description: "Informative website for the $Dogatoshi meme coin community.",
    detailedDescription:
      "An informative website for the $Dogatoshi meme coin, built with JavaScript and Tailwind CSS. The site provides community information, project details, and an engaging UI that reflects the fun and energetic nature of the project.",
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
    description:
      "Proof of concept Bitcoin wallet with Runes Network protocol support.",
    detailedDescription:
      "A proof of concept Bitcoin wallet that demonstrates support for the Runes Network protocol. Built with JavaScript and Tailwind CSS, it showcases a user-friendly interface for managing Bitcoin transactions and Runes Network assets. The project serves as a demonstration of the potential integration between Bitcoin wallets and the Runes Network.",
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
    description:
      "Waitlist platform for the now-launched MentorMeInTech mentorship program.",
    detailedDescription:
      "A waitlist platform for MentorMeInTech, a mentorship program connecting tech professionals with aspiring developers. Built with vanilla JavaScript, it featured a clean design, email collection, and social sharing capabilities. The platform successfully captured user interest and built anticipation for the program launch. The project has since evolved into the full platform at mentormeintech.com.",
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
    githubLink: "https://github.com/jeremy0x/foodie-fetch_react",
    description:
      "Personal project: Recipe finder app based on available ingredients.",
    detailedDescription:
      "A personal project built with React and TypeScript that helps users discover meals based on ingredients they have. Features include ingredient-based search, recipe filtering, nutritional information, and step-by-step cooking instructions. The clean, intuitive interface is styled with Tailwind CSS, showcasing modern web development practices.",
    logos: [
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
    ],
    imageSrc: "/projects/foodie-fetch.jpg",
  },
  {
    name: "LingoLookup",
    link: "https://lingolookup.jeremy0x.dev",
    githubLink: "https://github.com/jeremy0x/lingo-lookup",
    description:
      "Personal project: Comprehensive dictionary app with advanced features.",
    detailedDescription:
      "A personal project built with React and TypeScript that serves as a comprehensive dictionary application. Users can explore word definitions, synonyms, antonyms, pronunciation, and usage examples. The app includes features like word of the day, search history, and favorites. The clean, intuitive interface is styled with Tailwind CSS, demonstrating modern web development techniques.",
    logos: [
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
    ],
    imageSrc: "/projects/lingo-lookup.jpg",
  },
  {
    name: "Mullti",
    link: "https://mullti.jeremy0x.dev",
    description: "Dual-sided e-commerce platform with unique design.",
    detailedDescription:
      "A custom e-commerce platform built with Next.js and Tailwind CSS, featuring separate interfaces for buyers and sellers. The platform enables users to list their products while allowing buyers to browse, search, and make purchases. Features include product catalog, shopping cart, user authentication, and order management. The platform is designed with a unique aesthetic and optimized for both desktop and mobile users.",
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
    description:
      "Custom website for a Dutch client with modern design elements.",
    detailedDescription:
      "A custom website built for a Dutch client using Next.js and Tailwind CSS. The site features a modern, minimalist design with smooth animations and transitions. The responsive layout ensures optimal viewing experience across all devices.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoJavascript key="javaScript" title="JavaScript" />,
    ],
    imageSrc: "/projects/sways.jpg",
  },
  {
    name: "BahamaFoodie",
    link: "https://hellobahamafoodie.com",
    description:
      "Digital plant-based restaurant platform (No longer maintained).",
    detailedDescription:
      "A digital platform for a plant-based restaurant in The Bahamas. Built with vanilla JavaScript and enhanced with GSAP animations, it featured menu browsing, online ordering, and delivery tracking. The site is no longer actively maintained but served as a foundation for future restaurant platform projects.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
      <SiGreensock key="greensock" title="GSAP" />,
    ],
    imageSrc: "/projects/hellobahamafoodie.jpg",
  },
];
