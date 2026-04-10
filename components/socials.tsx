import Link from "next/link";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { fadeInAnimation } from "../utils/framerAnimations";
import { DECORATIVE_LINE_CLASS, SITE_CHROME_STACK_GAP } from "../utils/siteChrome";

export const Socials = () => {
  return (
    <motion.div className="fixed inset-x-0 bottom-6 z-10" {...fadeInAnimation}>
      <div className="mx-auto flex w-full items-center sm:container">
        <div
          className={`flex flex-col items-center ${SITE_CHROME_STACK_GAP} pl-4 text-xl text-neutral-600 sm:pl-6 dark:text-gray-400`}
        >
          <span className={DECORATIVE_LINE_CLASS} />

          <Link
            href="https://github.com/jeremy0x"
            target="blank"
            title="GitHub"
          >
            <AiFillGithub className="transition-all duration-300 hover:scale-125 hover:text-neutral-900 dark:hover:text-white" />
          </Link>

          <Link
            href="https://linkedin.com/in/jeremy0x"
            target="blank"
            title="LinkedIn"
          >
            <AiFillLinkedin className="transition-all duration-300 hover:scale-125 hover:text-neutral-900 dark:hover:text-white" />
          </Link>

          <Link href="https://x.com/thejeremy0x" target="blank" title="Twitter">
            <FaXTwitter className="transition-all duration-300 hover:scale-125 hover:text-neutral-900 dark:hover:text-white" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
