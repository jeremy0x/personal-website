import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromBottomAnimation } from "../utils/framerAnimations";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export const Socials = () => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 flex flex-col gap-8 text-xl text-neutral-400"
      {...slideInFromBottomAnimation}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <Link href="https://github.com/jeremy0x" target="blank">
        <AiFillGithub className="transition-all duration-300 hover:scale-125" />
      </Link>

      <Link href="https://linkedin.com/in/jeremy0x" target="blank">
        <AiFillLinkedin className="transition-all duration-300 hover:scale-125" />
      </Link>

      <Link href="https://twitter.com/jeremy0x_" target="blank">
        <AiOutlineTwitter className="transition-all duration-300 hover:scale-125" />
      </Link>
    </motion.div>
  );
};
