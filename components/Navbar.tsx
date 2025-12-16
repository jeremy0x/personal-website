 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../utils/framerAnimations";
import { ThemeToggle } from ".";
import { useEffect, useMemo, useState } from "react";
export const Navbar = ({ animationDelay = 0.5 }) => {
  const [forceSeasonal, setForceSeasonal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setForceSeasonal(params.get("seasonal")?.toLowerCase() === "true");
  }, []);

  const isSeasonal = useMemo(() => {
    const now = new Date();
    const month = now.getMonth();
    const date = now.getDate();

    const inWindow = (month === 11 && date >= 1) || (month === 0 && date <= 5);
    return forceSeasonal || inWindow;
  }, [forceSeasonal]);

  const logoSrc = isSeasonal ? "/logo_seasonal.svg" : "/logo-icon.svg";

  return (
    <nav className="fixed inset-0 z-20 h-fit w-full bg-transparent backdrop-blur-sm transition-all duration-75">
      <motion.div
        {...fadeInAnimation}
        transition={{ delay: animationDelay, duration: 0.5 }}
        className="mx-auto flex flex-row justify-between p-4 uppercase sm:container sm:p-6"
      >
        <Link href="/" title="Home">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="inline-block"
          >
            <Image
              src={logoSrc}
              alt="Logo"
              width={0}
              height={0}
              className="w-7 invert sm:w-8 dark:invert-0"
            />
          </motion.div>
        </Link>

        <div className="flex flex-row items-center justify-between gap-8 text-sm font-medium tracking-wider sm:gap-16">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <ThemeToggle />
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <motion.div
        className="group relative"
        whileHover="hover"
        whileFocus="hover"
      >
        <span className="text-xs text-gray-600 transition-all duration-300 group-hover:text-neutral-950 sm:text-sm dark:text-gray-400 dark:group-hover:text-white">
          {children}
        </span>
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 w-full bg-neutral-400 transition-all duration-300"
          initial={{ scaleX: 0 }}
          variants={{
            hover: { scaleX: 1, originX: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
};
