"use client";
import Link from "next/link";
import { Suspense } from "react";
import { BsArrowRight, BsFileEarmarkPdf } from "react-icons/bs";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticlesComponent = dynamic(() => import("@/components/particles"), {
  ssr: false,
});
import {
  BirthdayFireworks,
  Blur,
  Breadcrumbs,
  ConfettiEffect,
  Navbar,
  Socials,
} from "@/components";
import { fadeInAnimation } from "@/utils/framerAnimations";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", item: "/" }]} />
      <main className="relative bg-white text-neutral-900 uppercase dark:bg-neutral-900 dark:text-white">
        <div className="container mx-auto flex min-h-screen w-full items-center justify-center">
          <motion.div {...fadeInAnimation}>
            <Suspense fallback={null}>
              <ParticlesComponent id="tsparticles" />
            </Suspense>
          </motion.div>
          <motion.div className="page-content" {...fadeInAnimation}>
            <Suspense fallback={null}>
              <Navbar animationDelay={0.2} />
            </Suspense>

            <Blur />

            <div className="z-20 grid gap-2">
              <p className="z-10 text-xs font-medium tracking-widest text-neutral-600 sm:text-sm dark:text-gray-400">
                Hey, I&apos;m
              </p>

              <motion.h1
                className="relative z-10 text-7xl font-black tracking-wide sm:text-9xl"
              >
                <span className="relative inline-block">
                  <span className="relative z-10 text-neutral-900 dark:text-white">
                    JEREMY
                  </span>
                  {!prefersReducedMotion && (
                    <>
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
                    </>
                  )}
                </span>
              </motion.h1>

              <p className="z-10 text-right text-sm font-semibold tracking-wider text-neutral-600 sm:text-lg dark:text-gray-400">
                a frontend engineer
              </p>

              <div className="mt-10 flex items-center justify-between max-w-4xl mx-auto w-full">
              <Link href="/projects">
                <motion.div
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
            </div>

            <Socials />

            <ConfettiEffect />
            <BirthdayFireworks />
          </motion.div>
        </div>
      </main>
    </>
  );
}
