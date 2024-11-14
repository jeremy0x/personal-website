import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface PreloaderProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const Preloader = ({ isLoading, setIsLoading }: PreloaderProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("hasSeenAnimation");
    if (hasSeenAnimation) {
      setShowAnimation(false);
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    const fadeOutTimer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasSeenAnimation", "true");
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-neutral-900 uppercase text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {isLoading && showAnimation && (
        <motion.p
          className="text-4xl font-bold tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi
        </motion.p>
      )}
    </motion.div>
  );
};
