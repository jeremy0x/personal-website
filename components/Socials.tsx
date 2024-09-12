import Link from "next/link";
import { type FC } from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { fadeInAnimation } from "../utils/framerAnimations";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Socials = ({ animationDelay = 0.5 }) => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 flex flex-col gap-8 text-xl text-gray-400"
      {...fadeInAnimation}
      transition={{ delay: animationDelay, duration: 1 }}
    >
      <Link href="https://github.com/jeremy0x" target="blank" title="GitHub">
        <AiFillGithub className="transition-all duration-300 hover:scale-125" />
      </Link>

      <Link
        href="https://linkedin.com/in/jeremy0x"
        target="blank"
        title="LinkedIn"
      >
        <AiFillLinkedin className="transition-all duration-300 hover:scale-125" />
      </Link>

      <Link href="https://x.com/jeremy0x_" target="blank" title="Twitter">
        <FaXTwitter className="transition-all duration-300 hover:scale-125" />
      </Link>
    </motion.div>
  );
};
