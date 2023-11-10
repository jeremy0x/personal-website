import { motion } from "framer-motion";
import { languages } from "../utils/languages";
import { fadeInAnimation } from "../utils/framerAnimations";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface PreloaderProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const Preloader = ({ setIsLoading }: PreloaderProps) => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const preloaderInterval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => {
        if (prevIndex === languages.length - 1) {
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
    }, 200);

    setTimeout(() => {
      clearInterval(preloaderInterval);
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(preloaderInterval);
    };
  }, [setIsLoading]);

  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-neutral-900 uppercase text-white"
      {...fadeInAnimation}
    >
      <motion.div className="preloader-text" {...fadeInAnimation}>
        <p className="text-3xl font-bold">{languages[currentLanguageIndex]}</p>
      </motion.div>
    </motion.div>
  );
};
