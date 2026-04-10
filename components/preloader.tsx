"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const PRELOADER_SESSION_KEY = "hasSeenHiPreloader";
const PRELOADER_VISIBLE_MS = 1500;
const PRELOADER_TOTAL_MS = 2000;

export const Preloader = () => {
  const prefersReducedMotion = useReducedMotion();
  const [fadeOut, setFadeOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem(PRELOADER_SESSION_KEY);

    if (hasSeenAnimation) {
      const frameId = window.requestAnimationFrame(() => {
        setIsLoading(false);
        setShouldRender(false);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    const fadeDelay = prefersReducedMotion ? 0 : PRELOADER_VISIBLE_MS;
    const totalDuration = prefersReducedMotion ? 150 : PRELOADER_TOTAL_MS;
    const exitDuration = prefersReducedMotion ? 150 : 500;

    const fadeTimer = window.setTimeout(() => {
      setFadeOut(true);
    }, fadeDelay);

    const doneTimer = window.setTimeout(() => {
      sessionStorage.setItem(PRELOADER_SESSION_KEY, "true");
      setIsLoading(false);
    }, totalDuration);

    const unmountTimer = window.setTimeout(() => {
      setShouldRender(false);
    }, totalDuration + exitDuration);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
      window.clearTimeout(unmountTimer);
    };
  }, [prefersReducedMotion]);

  if (!shouldRender) {
    return null;
  }

  const transitionDuration = prefersReducedMotion ? 0.15 : 0.5;

  return (
    <motion.div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-white uppercase text-neutral-900 dark:bg-neutral-900 dark:text-white ${
        isLoading ? "pointer-events-auto" : "pointer-events-none"
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: transitionDuration }}
    >
      {isLoading && (
        <motion.p
          className="text-4xl font-bold tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: transitionDuration }}
        >
          Hi
        </motion.p>
      )}
    </motion.div>
  );
};
