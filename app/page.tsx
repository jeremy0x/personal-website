"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Blur, Navbar, Preloader, Socials } from "@/components";
import { fadeInAnimation } from "@/utils/framerAnimations";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader setIsLoading={setIsLoading} />
        ) : (
          <motion.main
            className="container relative mx-auto flex min-h-screen w-full items-center justify-center bg-neutral-900 uppercase text-white"
            {...fadeInAnimation}
          >
            <motion.div className="page-content" {...fadeInAnimation}>
              <Navbar />

              <Blur />

              <motion.div className="z-20 grid gap-4">
                <motion.p
                  {...fadeInAnimation}
                  transition={{ delay: 1, duration: 1 }}
                  className="pl-16 text-sm font-normal tracking-widest text-neutral-400 sm:pl-36"
                >
                  I am
                </motion.p>
                <motion.h1
                  className="text-7xl font-black tracking-wide sm:text-9xl"
                  {...fadeInAnimation}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  Jeremy
                </motion.h1>
                <motion.p
                  className="text-right text-base tracking-widest text-neutral-400 sm:text-lg"
                  {...fadeInAnimation}
                  transition={{ delay: 2.5, duration: 1.5 }}
                >
                  a frontend developer
                </motion.p>
              </motion.div>

              <motion.div
                {...fadeInAnimation}
                transition={{ delay: 3, duration: 3 }}
              >
                <Image
                  src="/arrow-up.svg"
                  alt=""
                  width={125}
                  height={125}
                  className="absolute right-4 top-28 animate-pulse opacity-90 md:right-28"
                />
              </motion.div>

              <Socials />
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
