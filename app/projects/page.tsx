"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Blur, Navbar, Socials } from "@/components";
import { fadeInAnimation } from "@/utils/framerAnimations";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import {
  BiLinkExternal,
  BiLogoCss3,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { ImSpinner9 } from "react-icons/im";
import { SiFramer, SiNextdotjs } from "react-icons/si";

export default function Projects() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          className="mx-auto flex min-h-screen items-center justify-center bg-neutral-900 text-white"
          {...fadeInAnimation}
        >
          <motion.div className="page-content" {...fadeInAnimation}>
            <Blur />
            <Navbar />

            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
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
              }}
              modules={[EffectCoverflow, Pagination]}
              spaceBetween={35}
              className="mySwiper"
            >
              {projectsData.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>

            <Socials />
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { name, link, githubLink, description, logos, imageSrc } = project;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      <Link
        href={link}
        target="blank"
        rel="noopener noreferrer"
        className="cursor-alias"
      >
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
          className="rounded-xl bg-black/30 grayscale-[0.7] filter transition-all hover:grayscale-0"
        />
      </Link>

      <div className="absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-black/60 py-4 text-center">
        <p className="text-sm font-medium sm:text-lg">{description}</p>

        <div className="flex items-center gap-4 text-2xl">
          <Link
            href={link}
            target="blank"
            rel="noopener noreferrer"
            title="External Link"
          >
            <BiLinkExternal />
          </Link>
          {githubLink && (
            <Link
              href={githubLink}
              target="blank"
              rel="noopener noreferrer"
              title="GitHub Link"
            >
              <BiLogoGithub />
            </Link>
          )}
          {logos}
        </div>
      </div>
    </div>
  );
}

interface ProjectData {
  name: string;
  link: string;
  githubLink?: string;
  description: string;
  logos: JSX.Element[];
  imageSrc: string;
}

const projectsData: ProjectData[] = [
  {
    name: "Altos (ClientView)",
    link: "https://app.helloaltos.com",
    description: "Altos - an ad tracking platform (now ClientView).",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" />,
      <BiLogoJavascript key="javascript" />,
      <BiLogoTailwindCss key="tailwind" />,
      <SiFramer className="text-lg" key="framer" />,
    ],
    imageSrc: "/altos.jpg",
  },
  {
    name: "SentFi",
    link: "https://sentfi.vercel.app",
    githubLink: "https://github.com/jeremy0x/sentinel-finance",
    description: "Proof-of-concept website for a dCommerce platform.",
    logos: [
      <BiLogoJavascript key="js" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
    ],
    imageSrc: "/sentfi.jpg",
  },
  {
    name: "BahamaFoodie",
    link: "https://hellobahamafoodie.com",
    description: "Digital plant-based restaurant in The Bahamas.",
    logos: [
      <BiLogoJavascript key="js" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
    ],
    imageSrc: "/hellobahamafoodie.jpg",
  },
  {
    name: "Interllo",
    link: "https://interllo.vercel.app",
    githubLink: "https://github.com/jeremy0x/interllo",
    description: "Official website for Interllo.",
    logos: [
      <BiLogoJavascript key="js" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
    ],
    imageSrc: "/interllo.jpg",
  },
  {
    name: "foodieFetch",
    link: "https://foodie-fetch.vercel.app",
    githubLink: "https://github.com/jeremy0x/foodie-fetch_react",
    description: "Find recipes with the ingredients you have.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTailwindCss key="tailwind" />,
      <BiLogoTypescript key="typescript" />,
    ],
    imageSrc: "/foodie-fetch.jpg",
  },
  {
    name: "LingoLookup",
    link: "https://lingo-lookup.vercel.app",
    githubLink: "https://github.com/jeremy0x/lingo-lookup",
    description: "Explore word definitions, synonyms, pronunciation, and more.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTailwindCss key="tailwind" />,
      <BiLogoTypescript key="typescript" />,
    ],
    imageSrc: "/lingo-lookup.jpg",
  },
  {
    name: "Sesshin",
    link: "https://sesshin.vercel.app",
    githubLink: "https://github.com/jeremy0x/Sesshin",
    description: "Custom website for a brand named Sesshin.",
    logos: [
      <BiLogoJavascript key="js" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
    ],
    imageSrc: "/sesshin.jpg",
  },
];
