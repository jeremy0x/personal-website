"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { fadeInAnimation } from "@/utils/framerAnimations";
import { Breadcrumbs } from "@/components";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setMounted(true);
      setCalendlyUrl(
        "https://calendly.com/jeremy0x/chat?hide_landing_page_details=1&hide_gdpr_banner=1",
      );
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ]}
      />
      <AnimatePresence mode="wait">
        <motion.main
          className="container mx-auto flex min-h-screen items-center justify-center text-neutral-900 dark:text-white"
          {...fadeInAnimation}
        >
          <motion.div className="page-content" {...fadeInAnimation}>
            <div className="z-10 mx-auto flex flex-col items-center justify-center gap-20 px-2 pt-36 pb-16 sm:px-8 lg:flex-row lg:py-20">
              <article className="z-10 grid max-w-2xl flex-1 gap-10 text-center">
                <div className="space-y-5">
                  <h1 className="text-3xl font-black tracking-widest uppercase">
                    Contact
                  </h1>
                  <p className="max-w-lg text-sm leading-loose tracking-wider text-neutral-600 dark:text-gray-400">
                    Feel free to reach out via email or schedule a quick chat with me using the calendar.
                  </p>
                </div>

                <div className="grid gap-10 text-sm">
                  <div className="grid gap-2">
                    <h2 className="text-lg font-bold tracking-widest">Email</h2>
                    <p className="leading-loose tracking-wider text-neutral-600 dark:text-gray-400">
                      <a
                          href="mailto:aworetanjeremiah@gmail.com"
                          className="underline-offset-2 hover:underline"
                      >
                        aworetanjeremiah@gmail.com
                      </a>
                    </p>
                  </div>

                  <div className="grid gap-2">
                    <h2 className="text-lg font-bold tracking-widest">
                      Time Zone
                    </h2>
                    <p className="leading-loose tracking-wider text-neutral-600 dark:text-gray-400">
                      GMT+1
                    </p>
                  </div>
                </div>
              </article>

              <div className="z-10 w-full max-w-xl flex-1 rounded-xl border border-neutral-200/50 bg-white p-2 shadow-xl dark:border-neutral-800/20">
                {mounted ? (
                  <iframe
                    src={calendlyUrl}
                    width="100%"
                    height="550"
                    style={{ minWidth: "320px", border: 0, backgroundColor: "#ffffff" }}
                    title="Schedule a chat"
                    className="rounded-lg"
                  />
                ) : (
                  <div className="relative h-[550px] w-full overflow-hidden rounded-lg bg-neutral-50 before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-linear-to-r before:from-transparent before:via-neutral-200/50 before:to-transparent" />
                )}
              </div>
            </div>
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
