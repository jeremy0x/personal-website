"use client";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInAnimation } from "@/utils/framerAnimations";
import { Blur, Contact, Navbar, Socials } from "@/components";

export default function Page() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          className="container mx-auto flex min-h-screen items-center justify-center bg-neutral-900 text-white"
          {...fadeInAnimation}
        >
          <motion.div className="page-content" {...fadeInAnimation}>
            <Blur />
            <Navbar />
            <Contact />
            <div className="hidden sm:block">
              <Socials />
            </div>
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
