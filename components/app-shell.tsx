"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { Navbar } from "@/components";
import { Socials } from "./socials";
import { fadeInAnimation } from "@/utils/framerAnimations";

const ParticlesComponent = dynamic(() => import("@/components/particles"), {
  ssr: false,
});

export const AppShell = () => {
  const pathname = usePathname();
  const showSocials = pathname !== "/projects";

  return (
    <>
      <Suspense fallback={null}>
        <Navbar animationDelay={0.2} />
      </Suspense>
      {showSocials && <Socials />}
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        {...fadeInAnimation}
      >
        <Suspense fallback={null}>
          <ParticlesComponent id="tsparticles" />
        </Suspense>
      </motion.div>
    </>
  );
};

