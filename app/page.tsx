"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import ParticlesComponent from "@/components/Particles";
import {
  Blur,
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
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader isLoading setIsLoading={setIsLoading} />
        ) : (
          <motion.main
            className="container relative mx-auto flex min-h-screen w-full items-center justify-center bg-white uppercase text-neutral-900 dark:bg-neutral-900 dark:text-white"
            {...fadeInAnimation}
          >
            <ParticlesComponent id="tsparticles" />
            <motion.div className="page-content" {...fadeInAnimation}>
              <Navbar />

              <Blur />

              <motion.div className="z-20 grid gap-2">
                <motion.p
                  {...fadeInAnimation}
                  className="z-10 text-xs font-medium tracking-widest text-neutral-600 dark:text-gray-400 sm:text-sm"
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
                      className="absolute left-0 top-0 z-0 text-blue-400"
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
                      className="absolute left-0 top-0 z-0 text-red-400"
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
                  className="z-10 text-right text-sm font-semibold tracking-wider text-neutral-600 dark:text-gray-400 sm:text-lg"
                  {...fadeInAnimation}
                >
                  a frontend developer
                </motion.p>

                <div className="mt-10 flex items-center justify-between">
                  <Link href="/projects">
                    <motion.div
                      {...fadeInAnimation}
                      className="group relative flex w-fit items-center gap-2"
                      whileHover="hover"
                      whileFocus="hover"
                    >
                      <BsArrowRight className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-gray-500 dark:group-hover:text-white sm:text-lg" />
                      <span className="relative">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-gray-400 dark:group-hover:text-white sm:text-sm">
                          View Projects
                        </span>
                        <motion.div
                          className="absolute bottom-0 left-0 h-[1px] w-full bg-neutral-400"
                          initial={{ scaleX: 1 }}
                          variants={{
                            hover: { scaleX: 0 },
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </motion.div>
                  </Link>

                  <Link href="https://github.com/jeremy0x" target="_blank">
                    <motion.div
                      {...fadeInAnimation}
                      className="group relative flex w-fit items-center gap-2"
                      whileHover="hover"
                      whileFocus="hover"
                    >
                      <FaGithub className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-gray-500 dark:group-hover:text-white sm:text-lg" />
                      <span className="relative">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-gray-400 dark:group-hover:text-white sm:text-sm">
                          GitHub
                        </span>
                        <motion.div
                          className="absolute bottom-0 left-0 h-[1px] w-full bg-neutral-400"
                          initial={{ scaleX: 1 }}
                          variants={{
                            hover: { scaleX: 0 },
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>

              {/* <motion.div {...fadeInAnimation}>
                <Image
                  src="/arrow-up.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="absolute -right-4 top-20 w-20 animate-pulse opacity-80 invert dark:invert-0 md:right-10"
                />
              </motion.div> */}

              <Socials />
              <FloatingContactIcon />

              <ConfettiEffect />
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
