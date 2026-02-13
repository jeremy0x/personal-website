"use client";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Suspense, useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { ProjectModal } from "@/components";
import { ProjectData } from "@/types";
import { projectsData } from "@/data/projects";
import { fadeInAnimation } from "@/utils/framerAnimations";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  EffectCube,
  Pagination,
  Navigation,
} from "swiper/modules";

import { ImSpinner9 } from "react-icons/im";

const ParticlesComponent = dynamic(() => import("@/components/particles"), {
  ssr: false,
});

export default function Projects() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size for responsive Swiper effect
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Suspense fallback={null}>
          <ParticlesComponent id="tsparticles-projects" />
        </Suspense>
      </motion.div>
      <motion.div {...fadeInAnimation}>
        <Swiper
          key={isMobile ? "cube" : "coverflow"}
          effect={isMobile ? "cube" : "coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? 1 : "auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
          navigation={true}
          modules={[EffectCoverflow, EffectCube, Pagination, Navigation]}
          spaceBetween={20}
          className="mySwiper"
          onSwiper={setSwiper}
          style={{ "--swiper-navigation-size": "25px" } as CSSProperties}
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
          sizes="(min-width: 1024px) 575px, 100vw"
          fetchPriority={index === 0 ? "high" : "auto"}
          onLoad={() => setIsLoading(false)}
          className="rounded-xl bg-black/30 transition-all max-md:w-full"
        />
      </div>

      <div className="absolute top-0 right-0 bottom-0 left-0 w-full cursor-pointer rounded-xl bg-white/10 opacity-40 transition-opacity duration-500 sm:opacity-100 sm:hover:opacity-20 dark:bg-black/40" />

      <div className="absolute bottom-0 left-0 w-full rounded-lg p-2">
        <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-white/80 px-2 py-4 text-center backdrop-blur-xs dark:bg-black/60">
          <p className="text-sm font-medium sm:text-base">{description}</p>
          <div className="flex items-center gap-4 text-2xl">{logos}</div>
        </div>
      </div>
    </div>
  );
}
