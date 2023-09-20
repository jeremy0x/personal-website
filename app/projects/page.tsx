"use client";
import { Blur, MetaTag, Navbar, Socials } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInOutAnimation } from "@/utils/framerAnimations";

export default function Projects() {
  return (
    <>
      <MetaTag title="Projects — Jeremy" />

      <AnimatePresence mode="wait">
        <motion.main
          className="container mx-auto flex min-h-screen items-center justify-center bg-neutral-900 text-white"
          {...fadeInOutAnimation}
        >
          <motion.div className="page-content" {...fadeInOutAnimation}>
            <Blur />
            <Navbar />

            <Socials />
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
