"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

import ParticlesComponent from "@/components/Particles";
import { Blur, Navbar, Preloader, Socials } from "@/components";
import {
  fadeInAnimation,
  fadeInFromLeftAnimation,
} from "@/utils/framerAnimations";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader isLoading setIsLoading={setIsLoading} />
        ) : (
          <motion.main
            className="container relative mx-auto flex min-h-screen w-full items-center justify-center bg-neutral-900 uppercase text-white"
            {...fadeInAnimation}
          >
            <ParticlesComponent id="tsparticles" />
            <motion.div className="page-content" {...fadeInAnimation}>
              <Navbar animationDelay={4} />

              <Blur />

              <motion.div className="z-20 grid gap-2">
                <motion.p
                  {...fadeInAnimation}
                  transition={{ delay: 1, duration: 1 }}
                  className="z-10 text-xs font-normal tracking-widest text-gray-400 sm:text-sm"
                >
                  I am
                </motion.p>

                <motion.h1
                  className="relative z-10 text-7xl font-black tracking-wide sm:text-9xl"
                  {...fadeInAnimation}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  <span className="relative inline-block">
                    <span className="relative z-10">JEREMY</span>
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
                  className="z-10 text-right text-sm font-medium tracking-wider text-gray-400 sm:text-lg"
                  {...fadeInAnimation}
                  transition={{ delay: 2.5, duration: 1.5 }}
                >
                  a frontend developer
                </motion.p>

                <Link href="/projects">
                  <motion.div
                    {...fadeInFromLeftAnimation}
                    transition={{ delay: 3, duration: 1 }}
                    className="group relative mt-8 flex w-fit items-center gap-2"
                    whileHover="hover"
                    whileFocus="hover"
                  >
                    <BsArrowRight className="text-sm text-gray-500 transition-colors group-hover:text-white sm:text-lg" />
                    <span className="relative">
                      <span className="text-xs font-medium uppercase tracking-wider text-gray-400 transition-colors group-hover:text-white sm:text-sm">
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
              </motion.div>

              <motion.div
                {...fadeInAnimation}
                transition={{ delay: 4, duration: 3 }}
              >
                <Image
                  src="/arrow-up.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="absolute right-4 top-20 w-20 animate-pulse opacity-80 md:right-28"
                />
              </motion.div>

              <Socials animationDelay={4} />
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
