"use client";

import { useLayoutEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const PRELOADER_SESSION_KEY = "hasSeenHiPreloader";

const PRELOADER_VISIBLE_MS = 2000;
const PRELOADER_TOTAL_MS = 2500;

export const Preloader = () => {
  const prefersReducedMotion = useReducedMotion();
  const [fadeOut, setFadeOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useLayoutEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem(PRELOADER_SESSION_KEY);

    if (hasSeenAnimation) {
      setTimeout(() => {
        setIsLoading(false);
        setShouldRender(false);
      }, 0);
      return;
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

  const d = prefersReducedMotion ? 0.01 : 0.8;
  const e = prefersReducedMotion ? 0.01 : 0.3;
  const s = prefersReducedMotion ? 0 : 0.7;
  const t = prefersReducedMotion ? 0.01 : 0.5;
  const u = prefersReducedMotion ? 0 : 1.0;
  const v = prefersReducedMotion ? 0.15 : 0.5;
  const w = prefersReducedMotion ? 0 : 1.3;

  return (
    <motion.div
      id="site-preloader"
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white ${
        isLoading ? "pointer-events-auto" : "pointer-events-none"
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: v }}
    >
      {isLoading && (
        <div
          className="flex flex-col items-center"
          style={{
            opacity: fadeOut ? 0 : 1,
            transition: `opacity ${v}s`,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-32 h-32">
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: d, ease: "easeInOut" }}
            />
            <motion.path
              d="M 32 38 Q 35 33 38 38"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: e, delay: s, ease: "easeOut" }}
            />
            <motion.path
              d="M 62 38 Q 65 33 68 38"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: e, delay: s, ease: "easeOut" }}
            />
            <motion.path
              d="M 25 58 Q 50 78 75 58"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: t, delay: u, ease: "easeOut" }}
            />
          </svg>
          <motion.p
            className="mt-6 text-3xl font-bold tracking-widest"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: w }}
          >
            Hi
          </motion.p>
        </div>
      )}
    </motion.div>
  );
};
