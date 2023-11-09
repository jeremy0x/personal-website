import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../utils/framerAnimations";

export const Navbar = () => {
  return (
    <nav className="fixed inset-0 z-10 h-fit w-full bg-neutral-900 bg-opacity-20 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-0">
      <motion.div
        {...fadeInAnimation}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mx-auto flex flex-row justify-between p-4 uppercase sm:container sm:p-6"
      >
        <Link href="/" className="font-kaisei h-12 text-7xl hover:animate-spin">
          *
        </Link>

        <div className="flex flex-row items-center justify-between gap-8 text-sm font-medium tracking-wider text-neutral-400 sm:gap-16">
          <Link href="/projects">
            <div className="transition-all duration-300 hover:-translate-y-1 active:translate-y-1">
              <span className="text-xs sm:text-sm">Projects</span>
            </div>
          </Link>

          <Link href="/contact">
            <div className="transition-all duration-300 hover:-translate-y-1 active:translate-y-1">
              <span className="text-xs sm:text-sm">Contact</span>
            </div>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};
