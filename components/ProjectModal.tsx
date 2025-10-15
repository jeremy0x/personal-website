import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { ProjectData } from "@/types";

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
            className={`relative max-h-[90vh] w-full overflow-y-auto bg-white p-6 text-neutral-900 shadow-xl dark:bg-neutral-900 dark:text-white 
                ${isMobile ? "rounded-t-2xl" : "max-w-2xl rounded-xl"}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-neutral-100 p-2 text-xl text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-gray-400 dark:hover:bg-neutral-700"
              aria-label="Close modal"
            >
              <IoClose />
            </button>

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
                  className="text-2xl font-bold tracking-tight"
                >
                  {project.name}
                </h2>

                <p className="text-neutral-600 dark:text-gray-400">
                  {project.description}
                </p>

                {project.detailedDescription && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold">Project Details:</h3>
                    <p className="text-neutral-600 dark:text-gray-400">
                      {project.detailedDescription}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-sm font-semibold">Tech Stack:</h3>
                  <div className="flex flex-wrap gap-3 text-xl text-neutral-600 dark:text-gray-400">
                    {project.logos}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
