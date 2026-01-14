"use client";
import Link from "next/link";
import Image from "next/image";
import { Suspense, useState } from "react";
import { BsArrowRight, BsFileEarmarkPdf } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

import ParticlesComponent from "@/components/Particles";
import {
  BirthdayFireworks,
  Blur,
  Breadcrumbs,
  ConfettiEffect,
  FloatingContactIcon,
  Navbar,
  Preloader,
  Socials,
} from "@/components";
import { fadeInAnimation } from "@/utils/framerAnimations";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", item: "/" }]} />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader isLoading setIsLoading={setIsLoading} />
        ) : (
          <motion.main
            className="relative container mx-auto flex min-h-screen w-full items-center justify-center bg-white text-neutral-900 uppercase dark:bg-neutral-900 dark:text-white"
            {...fadeInAnimation}
          >
            <Suspense fallback={null}>
              <ParticlesComponent id="tsparticles" />
            </Suspense>
            <motion.div className="page-content" {...fadeInAnimation}>
              <Suspense fallback={null}>
                <Navbar />
              </Suspense>

              <Blur />

              <motion.div className="z-20 grid gap-2">
                <motion.p
                  {...fadeInAnimation}
                  className="z-10 text-xs font-medium tracking-widest text-neutral-600 sm:text-sm dark:text-gray-400"
                >
                  Hey, I&apos;m
                </motion.p>

                <motion.h1
                  className="relative z-10 text-7xl font-black tracking-wide sm:text-9xl"
                  {...fadeInAnimation}
                >
                  <span className="relative inline-block">
                    <span className="relative z-10 text-neutral-900 dark:text-white">
                      JEREMY
                    </span>
                    <motion.span
                      className="absolute top-0 left-0 z-0 text-blue-400"
                      initial={{ x: 0, y: 0 }}
                      animate={{ x: [-1, 1, -1], y: [1, -1, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                      }}
                    >
                      JEREMY
                    </motion.span>
                    <motion.span
                      className="absolute top-0 left-0 z-0 text-red-400"
                      initial={{ x: 0, y: 0 }}
                      animate={{ x: [1, -1, 1], y: [-1, 1, -1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                      }}
                    >
                      JEREMY
                    </motion.span>
                  </span>
                </motion.h1>

                <motion.p
                  className="z-10 text-right text-sm font-semibold tracking-wider text-neutral-600 sm:text-lg dark:text-gray-400"
                  {...fadeInAnimation}
                >
                  a frontend engineer
                </motion.p>

                <div className="mt-10 flex items-center justify-between">
                  <Link href="/projects">
                    <motion.div
                      {...fadeInAnimation}
                      className="group relative flex w-fit items-center gap-2"
                      whileHover="hover"
                      whileFocus="hover"
                    >
                      <BsArrowRight className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-900 sm:text-lg dark:text-gray-500 dark:group-hover:text-white" />
                      <span className="relative">
                        <span className="text-xs font-medium tracking-wider text-neutral-500 uppercase transition-colors group-hover:text-neutral-900 sm:text-sm dark:text-gray-400 dark:group-hover:text-white">
                          View Projects
                        </span>
                        <motion.div
                          className="absolute bottom-0 left-0 h-px w-full bg-neutral-400"
                          initial={{ scaleX: 1 }}
                          variants={{
                            hover: { scaleX: 0 },
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </motion.div>
                  </Link>

                  <a
                    href="/Resume_JeremiahAworetan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      {...fadeInAnimation}
                      className="group relative flex w-fit items-center gap-2"
                      whileHover="hover"
                      whileFocus="hover"
                    >
                      <BsFileEarmarkPdf className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-900 sm:text-lg dark:text-gray-500 dark:group-hover:text-white" />
                      <span className="relative">
                        <span className="text-xs font-medium tracking-wider text-neutral-500 uppercase transition-colors group-hover:text-neutral-900 sm:text-sm dark:text-gray-400 dark:group-hover:text-white">
                          Resume
                        </span>
                        <motion.div
                          className="absolute bottom-0 left-0 h-px w-full bg-neutral-400"
                          initial={{ scaleX: 1 }}
                          variants={{
                            hover: { scaleX: 0 },
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </motion.div>
                  </a>
                </div>
              </motion.div>

              <Socials />
              <FloatingContactIcon />

              <ConfettiEffect />
              <BirthdayFireworks />
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
