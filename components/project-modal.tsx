import { useEffect, useRef, useState, type JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { ProjectData } from "@/types";

interface TechStackIconsProps {
  logos: JSX.Element[];
}

function TechStackIcons({ logos }: TechStackIconsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      hideTimeoutRef.current = null;
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      layout
      className="flex flex-wrap items-center gap-3 text-xl text-neutral-600 dark:text-gray-400"
    >
      {logos.map((logo, index) => {
        const title = logo.props?.title || "";
        return (
          <motion.div
            key={index}
            layout
            className="flex items-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105">
              {logo}
            </div>
            <AnimatePresence mode="wait">
              {hoveredIndex === index && title && (
                <motion.span
                  initial={{ opacity: 0, x: -8, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: -8, width: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="pointer-events-none text-xs font-semibold whitespace-nowrap text-neutral-900 dark:text-white"
                >
                  &nbsp; {title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  const modalVariants = {
    hidden: {
      y: isMobile ? "100%" : 0,
      scale: isMobile ? 1 : 0.95,
      opacity: isMobile ? 1 : 0,
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: isMobile ? "100%" : 0,
      scale: isMobile ? 1 : 0.95,
      opacity: isMobile ? 1 : 0,
    },
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-xs sm:items-center sm:p-4"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            ref={modalRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className={`relative flex max-h-[90vh] w-full flex-col bg-white text-neutral-900 shadow-xl dark:bg-neutral-900 dark:text-white ${isMobile ? "rounded-t-2xl" : "max-w-2xl rounded-2xl"}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-2.5 right-2.5 z-10 size-3 cursor-pointer rounded-full bg-red-500 transition-colors hover:scale-110 hover:bg-red-600"
              aria-label="Close modal"
              title="Close modal"
            />

            <div className="flex flex-1 flex-col overflow-y-auto p-6">
              <div className="space-y-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.imageSrc}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>

                <div className="space-y-4">
                  <h2
                    id="modal-title"
                    className="text-xl font-bold tracking-tight"
                  >
                    {project.name}
                  </h2>

                  <p className="text-neutral-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {project.detailedDescription && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold">
                        Project Details:
                      </h3>
                      <p className="text-neutral-600 dark:text-gray-400">
                        {project.detailedDescription}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-sm font-semibold">Tech Stack:</h3>
                    <TechStackIcons logos={project.logos} />
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 flex flex-wrap gap-4 border-t border-neutral-200 bg-white px-6 py-4 md:rounded-b-2xl dark:border-neutral-700 dark:bg-neutral-900">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
              >
                <BiLinkExternal />
                View Live
              </Link>
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
                >
                  <BiLogoGithub />
                  View Code
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
