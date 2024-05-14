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
import { SiFramer, SiNextdotjs, SiRemix } from "react-icons/si";
import ParticlesComponent from "@/components/Particles";

export default function Projects() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          className="mx-auto flex min-h-screen items-center justify-center bg-neutral-900 text-white"
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
          className="rounded-lg bg-black/30 transition-all"
        />
      </Link>

      <Link
        href={link}
        target="blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 left-0 right-0 top-0 w-full cursor-alias rounded-lg bg-black/60 transition-opacity duration-500 hover:opacity-40"
      ></Link>

      <div className="absolute bottom-0 left-0 w-full p-2">
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-md bg-black/60 px-2 py-4 text-center">
          <p className="text-sm font-medium sm:text-base">{description}</p>
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
    name: "Paycrest",
    link: "https://paycrest.io",
    description: "Decentralized Crypto-to-Fiat Payment Protocol.",
    logos: [
      <SiRemix key="remix" className="text-lg" title="Remix JS" />,
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
    ],
    imageSrc: "/paycrest.jpg",
  },
  {
    name: "$Dogatoshi",
    link: "https://dogatoshi.dog",
    githubLink: "https://github.com/jeremy0x/dogatoshi",
    description: "A website for the $Dogatoshi meme coin.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
    ],
    imageSrc: "/dogatoshi.jpg",
  },
  {
    name: "SentFi",
    link: "https://sentfi.vercel.app",
    githubLink: "https://github.com/jeremy0x/sentinel-finance",
    description: "Proof-of-concept website for a dCommerce platform.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/sentfi.jpg",
  },
  {
    name: "Elder Wallet",
    link: "https://elderwallet-dev.vercel.app",
    githubLink: "https://github.com/jeremy0x/elder-wallet",
    description: "Manages bitcoin and blockchain protocols on Runes Network.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
    ],
    imageSrc: "/elder-wallet.jpg",
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
    imageSrc: "/hellobahamafoodie.jpg",
  },

  {
    name: "Valtrix",
    link: "https://valtrix.co",
    githubLink: "https://github.com/jeremy0x/interllo",
    description: "Official website for Valtrix.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/valtrix.jpg",
  },
  {
    name: "MentorMeInTech Waitlist",
    link: "https://mentormeintech.com",
    description: "MentorMeInTech - a platform for mentorship in tech.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/mentormeintech.jpg",
  },

  {
    name: "foodieFetch",
    link: "https://foodie-fetch.vercel.app",
    githubLink: "https://github.com/jeremy0x/foodie-fetch_react",
    description: "Find recipes with the ingredients you have.",
    logos: [
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
    ],
    imageSrc: "/foodie-fetch.jpg",
  },
  {
    name: "LingoLookup",
    link: "https://lingo-lookup.vercel.app",
    githubLink: "https://github.com/jeremy0x/lingo-lookup",
    description: "Explore word definitions, synonyms, pronunciation, and more.",
    logos: [
      <BiLogoReact key="react" title="React" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoTypescript key="typescript" title="TypeScript" />,
    ],
    imageSrc: "/lingo-lookup.jpg",
  },
  {
    name: "Sesshin",
    link: "https://sesshin.vercel.app",
    githubLink: "https://github.com/jeremy0x/Sesshin",
    description: "Custom website for a brand named Sesshin.",
    logos: [
      <BiLogoJavascript key="js" title="JavaScript" />,
      <BiLogoHtml5 key="html" title="HTML" />,
      <BiLogoCss3 key="css" title="CSS" />,
    ],
    imageSrc: "/sesshin.jpg",
  },
  {
    name: "Mullti",
    link: "https://mullti.vercel.app",
    description:
      "E-commerce platform for buyers & sellers, tailored to client's design.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoJavascript key="javaScript" title="JavaScript" />,
    ],
    imageSrc: "/mullti.jpg",
  },
  {
    name: "Sways",
    link: "https://sways.vercel.app",
    description: "A simple website for a Dutch client with a given design.",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <BiLogoJavascript key="javaScript" title="JavaScript" />,
    ],
    imageSrc: "/sways.jpg",
  },
  {
    name: "Altos (ClientView)",
    link: "https://www.useclientview.com/",
    description: "Altos - an ad tracking platform (now ClientView).",
    logos: [
      <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
      <BiLogoJavascript key="javascript" title="JavaScript" />,
      <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
      <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
    ],
    imageSrc: "/altos.jpg",
  },
];
