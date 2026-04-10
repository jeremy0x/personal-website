"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { isSeasonalWindow, isBirthdayWindow } from "@/utils/dates";
import { ConfettiEffect } from "./confetti-effect";
import { BirthdayFireworks } from "./birthday-fireworks";

export const EasterEggHints = () => {
  const searchParams = useSearchParams();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [birthdayTriggered, setBirthdayTriggered] = useState(false);

  const seasonalParam =
    searchParams?.get("seasonal")?.toLowerCase() === "true";
  const birthdayParam =
    searchParams?.get("birthday")?.toLowerCase() === "true";

  const now = useMemo(() => new Date(), []);
  const inSeasonalWindow = isSeasonalWindow(now);
  const isBirthday = isBirthdayWindow(now);

  useEffect(() => {
    if (birthdayParam || isBirthday) {
      setBirthdayTriggered(true);
    }
  }, [birthdayParam, isBirthday]);

  const hints: { label: string; href: string }[] = [];

  if (!inSeasonalWindow) {
    hints.push(
      seasonalParam
        ? { label: "Normal mode", href: "/" }
        : { label: "Festive mode", href: "/?seasonal=true" },
    );
  }

  const hintKey = hints.map((h) => h.label).join("-");

  return (
    <>
      {birthdayTriggered && (
        <>
          <ConfettiEffect />
          <BirthdayFireworks />
        </>
      )}

      <AnimatePresence mode="wait">
        {hints.length > 0 && (
          <motion.div
            key={hintKey}
            className="fixed inset-x-0 bottom-6 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: isFirstRender ? 0.8 : 0.3,
              delay: isFirstRender ? 3 : 0,
            }}
            onAnimationComplete={() => setIsFirstRender(false)}
          >
            <div className="mx-auto flex w-full items-center justify-end sm:container">
              <div className="flex flex-col items-center gap-3 pr-4 sm:pr-6">
                <span className="h-8 w-px bg-neutral-400/60 dark:bg-neutral-600/60" />
                {hints.map((hint) => (
                  <Link key={hint.href} href={hint.href} scroll={false}>
                    <span className="text-[10px] font-medium tracking-[0.2em] text-neutral-400 uppercase [writing-mode:vertical-rl] transition-colors hover:text-neutral-600 dark:text-neutral-600 dark:hover:text-neutral-400">
                      {hint.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
