import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../utils/framerAnimations";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export const Socials = () => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 flex flex-col gap-8 text-xl text-neutral-400"
      {...fadeInAnimation}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <Link href="https://github.com/jeremy0x" target="blank">
        <AiFillGithub className="transition-all duration-300 hover:scale-125" />
      </Link>

      <Link href="https://linkedin.com/in/jeremy0x" target="blank">
        <AiFillLinkedin className="transition-all duration-300 hover:scale-125" />
      </Link>

      <Link href="https://x.com/jeremy0x_" target="blank">
        <FaXTwitter className="transition-all duration-300 hover:scale-125" />
      </Link>
    </motion.div>
  );
};
