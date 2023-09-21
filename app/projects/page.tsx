"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInOutAnimation } from "@/utils/framerAnimations";
import { Blur, Navbar, Socials } from "@/components";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import {
  BiLinkExternal,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

export default function Projects() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          className="mx-auto flex min-h-screen items-center justify-center bg-neutral-900 text-white"
          {...fadeInOutAnimation}
        >
          <motion.div className="page-content" {...fadeInOutAnimation}>
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
                  <ProjectCard project={project} />
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
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative">
      <Link
        href={project.link}
        target="blank"
        rel="noopener noreferrer"
        className="cursor-alias"
      >
        <Image
          alt={`${project.name} screenshot`}
          width={575}
          height={575}
          src={project.imageSrc}
          className="rounded-xl grayscale-[0.7] filter transition-all hover:grayscale-0"
        />
      </Link>

      <div className="absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-black/60 py-4 text-center">
        <p className="text-sm font-medium sm:text-lg">{project.description}</p>

        <div className="flex gap-4 text-2xl">
          <Link href={project.link} target="blank" rel="noopener noreferrer">
            <BiLinkExternal />
          </Link>
          {project.logos}
        </div>
      </div>
    </div>
  );
}

interface ProjectData {
  name: string;
  link: string;
  description: string;
  logos: JSX.Element[];
  imageSrc: string;
}

const projectsData: ProjectData[] = [
  {
    name: "SentFi",
    link: "https://sentfi.netlify.app",
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
    name: "foodieFetch",
    link: "https://foodie-fetch.netlify.app",
    description: "Find recipes with the ingredients you have.",
    logos: [
      <BiLogoTailwindCss key="tailwind" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
    ],
    imageSrc: "/foodie-fetch.jpg",
  },
  {
    name: "LingoLookup",
    link: "https://lingolookup.netlify.app",
    description: "Explore word definitions, synonyms, pronunciation, and more.",
    logos: [
      <BiLogoTailwindCss key="tailwind" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
    ],
    imageSrc: "/lingo-lookup.jpg",
  },
  {
    name: "Sesshin",
    link: "https://sesshin-dev.netlify.app",
    description: "Custom website for a brand named Sesshin.",
    logos: [
      <BiLogoJavascript key="js" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
    ],
    imageSrc: "/sesshin.jpg",
  },
];
