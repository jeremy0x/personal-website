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
import { SiFramer, SiNextdotjs, SiRemix } from "react-icons/si";

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
        <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-white/80 px-2 py-4 text-center backdrop-blur-sm dark:bg-black/60">
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
    description: "Decentralized Crypto-to-Fiat Payment Protocol.",
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
      "Upgrade from Zap, fast, secure and gasless crypto-to-fiat payments.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/noblocks.jpg",
  },
  // {
  //   name: "Basepay",
  //   link: "https://basepay.link",
  //   description:
  //     "Receive direct fiat payments with crypto powered by stablecoins.",
  //   logos: [
  //     <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
  //     <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
  //     <BiLogoTypescript key="typescript" title="TypeScript" />,
  //     <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
  //   ],
  //   imageSrc: "/projects/basepay.jpg",
  // },
  {
    name: "Zap by Paycrest",
    link: "https://zap-beta.jeremy0x.codes/",
    githubLink: "https://github.com/paycrest/zap",
    description:
      "dApp for instant crypto-to-fiat payments. (Deprecated) - Use Noblocks instead.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/projects/zap.jpg",
  },

  {
    name: "$Dogatoshi",
    link: "https://dogatoshi.jeremy0x.codes/",
    githubLink: "https://github.com/jeremy0x/dogatoshi",
    description: "A website for the $Dogatoshi meme coin.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
    ],
    imageSrc: "/projects/dogatoshi.jpg",
  },
  {
    name: "Sentinel Finance",
    link: "https://sentfi.jeremy0x.codes",
    githubLink: "https://github.com/jeremy0x/sentinel-finance",
    description: "Proof-of-concept website for a dCommerce platform.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/projects/sentfi.jpg",
  },
  {
    name: "Elder Wallet",
    link: "https://elderwallet.jeremy0x.codes",
    githubLink: "https://github.com/jeremy0x/elder-wallet",
    description: "Manages bitcoin and blockchain protocols on Runes Network.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
    ],
    imageSrc: "/projects/elder-wallet.jpg",
  },
  {
    name: "Valtrix",
    link: "https://valtrix.jeremy0x.codes/",
    githubLink: "https://github.com/valtrix-co/website",
    description: "Official website for Valtrix.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/projects/valtrix.jpg",
  },
  {
    name: "MentorMeInTech Waitlist",
    link: "https://mentormeintech.jeremy0x.codes",
    description:
      "Waitlist for the MentorMeInTech web app - a mentorship platform.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/projects/mentormeintech.jpg",
  },

  {
    name: "foodieFetch",
    link: "https://foodie-fetch.jeremy0x.codes",
    githubLink: "https://github.com/jeremy0x/foodie-fetch_react",
    description: "Find recipes with the ingredients you have.",
    logos: [
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
    ],
    imageSrc: "/projects/foodie-fetch.jpg",
  },
  {
    name: "LingoLookup",
    link: "https://lingolookup.jeremy0x.codes",
    githubLink: "https://github.com/jeremy0x/lingo-lookup",
    description: "Explore word definitions, synonyms, pronunciation, and more.",
    logos: [
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
    ],
    imageSrc: "/projects/lingo-lookup.jpg",
  },
  {
    name: "Sesshin",
    link: "https://sesshin.jeremy0x.codes",
    githubLink: "https://github.com/jeremy0x/Sesshin",
    description: "Custom website for a brand named Sesshin.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/projects/sesshin.jpg",
  },
  {
    name: "Mullti",
    link: "https://mullti.jeremy0x.codes",
    description:
      "E-commerce platform for buyers & sellers, tailored to client's design.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoJavascript key="javaScript" title="JavaScript" />,
    ],
    imageSrc: "/projects/mullti.jpg",
  },
  {
    name: "Sways",
    link: "https://sways.jeremy0x.codes",
    description: "A simple website for a Dutch client with a given design.",
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
    description: "Digital plant-based restaurant in The Bahamas.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/projects/hellobahamafoodie.jpg",
  },
];
