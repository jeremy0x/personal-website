"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../utils/framerAnimations";
import { ThemeToggle } from ".";
import { useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface NavbarProps {
  animationDelay?: number;
}

export const Navbar = ({ animationDelay = 0.5 }: NavbarProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const isSeasonalWindow = (now: Date) => {
    const month = now.getMonth();
    const date = now.getDate();
    return (month === 11 && date >= 1) || (month === 0 && date <= 5);
  };

  const isSeasonal = useMemo(() => {
    const seasonalParam = searchParams?.get("seasonal");
    if (seasonalParam && seasonalParam.toLowerCase() === "true") {
      return true;
    }
    return isSeasonalWindow(new Date());
  }, [searchParams]);

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
              alt="Jeremiah Aworetan logo"
              width={32}
              height={32}
              className="w-7 invert sm:w-8 dark:invert-0"
              priority
            />
          </motion.div>
        </Link>

        <div className="flex flex-row items-center justify-between gap-8 text-sm font-medium tracking-wider sm:gap-16">
          <NavLink href="/projects" isActive={pathname === "/projects"}>
            Projects
          </NavLink>
          <NavLink href="/contact" isActive={pathname === "/contact"}>
            Contact
          </NavLink>
          <ThemeToggle />
        </div>
      </motion.div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink = ({ href, children, isActive }: NavLinkProps) => {
  return (
    <Link href={href} aria-current={isActive ? "page" : undefined}>
      <motion.div
        className="group relative"
        whileHover="hover"
        whileFocus="hover"
      >
        <span
          className={`text-xs transition-all duration-300 sm:text-sm ${
            isActive
              ? "text-neutral-950 dark:text-white"
              : "text-gray-600 dark:text-gray-400 group-hover:text-neutral-950 dark:group-hover:text-white"
          }`}
        >
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
