"use client";
import Image from "next/image";
import { Blur, Navbar, Socials } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInOutAnimation } from "@/utils/framerAnimations";

export default function Page() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          className="container mx-auto flex min-h-screen items-center justify-center bg-neutral-900 text-white"
          {...fadeInOutAnimation}
        >
          <motion.div className="page-content" {...fadeInOutAnimation}>
            <Blur />
            <Navbar />

            <div className="relative z-10 grid gap-8">
              <Image
                src="/logo.png"
                alt=""
                width={100}
                height={100}
                className="mx-auto hover:animate-spin"
              />
              <div className="text-center text-base text-neutral-300 sm:text-xl">
                <p>Thank you for your message!</p>
                <p>I will get back to you as soon as possible.</p>
                <p className="pt-2 text-xs text-neutral-400">
                  Hover/click on the logo to see it spin!
                </p>
              </div>
            </div>

            <Socials />
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
