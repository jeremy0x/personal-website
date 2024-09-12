import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../utils/framerAnimations";

export const Navbar = ({ animationDelay = 0.5 }) => {
  return (
    <nav className="fixed inset-0 z-20 h-fit w-full bg-neutral-900 bg-opacity-70 backdrop-blur-lg lg:bg-transparent lg:backdrop-blur-0">
      <motion.div
        {...fadeInAnimation}
        transition={{ delay: animationDelay, duration: 0.5 }}
        className="mx-auto flex flex-row justify-between p-4 uppercase sm:container sm:p-6"
      >
        <Link href="/" className="hover:animate-spin" title="Home">
          <Image
            src="/logo-icon.svg"
            alt=""
            width={0}
            height={0}
            className="w-6 sm:w-8"
          />
        </Link>

        <div className="flex flex-row items-center justify-between gap-8 text-sm font-medium tracking-wider sm:gap-16">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
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
        <span className="text-xs text-gray-400 transition-colors group-hover:text-white sm:text-sm">
          {children}
        </span>
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 w-full bg-neutral-400"
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
