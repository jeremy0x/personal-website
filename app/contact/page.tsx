"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { SiGmail, SiCalendly } from "react-icons/si";
import { RiTimeZoneLine } from "react-icons/ri";

import { fadeInAnimation } from "@/utils/framerAnimations";
import { Breadcrumbs } from "@/components/breadcrumbs";

const CALENDLY_URL = "https://calendly.com/jeremy0x/chat";

export default function Page() {
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
            <motion.div className="page-content w-full" {...fadeInAnimation}>
            <div className="z-10 mx-auto flex max-w-4xl flex-col items-center justify-center gap-16 px-4 pt-36 pb-16 sm:px-8">
              <article className="z-10 grid max-w-2xl gap-6 text-center">
                <h1 className="text-4xl font-black tracking-widest uppercase sm:text-5xl">
                  Contact
                </h1>
                <p className="mx-auto max-w-lg text-sm leading-loose tracking-wider text-neutral-600 sm:text-base dark:text-gray-400">
                  Feel free to reach out via email or schedule a quick chat.
                  I&apos;ll get back to you as soon as possible.
                </p>
              </article>

              <div className="grid w-full grid-cols-1 justify-items-center gap-12 sm:grid-cols-3">
                {/* Email Card */}
                <a
                  href="mailto:aworetanjeremiah@gmail.com"
                  className="contact-card group z-10"
                >
                  <div className="contact-card-content">
                    <SiGmail className="mb-4 text-3xl text-neutral-400 transition-colors group-hover:text-neutral-900 dark:text-gray-500 dark:group-hover:text-white" />
                    <h2 className="mb-2 text-xs font-bold tracking-widest text-neutral-400 uppercase">
                      Email
                    </h2>
                    <p className="text-sm font-medium tracking-wide text-neutral-600 group-hover:text-neutral-950 dark:text-gray-400 dark:group-hover:text-white">
                      aworetanjeremiah@gmail.com
                    </p>
                  </div>
                </a>

                {/* Calendar Card */}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card group z-10"
                >
                  <div className="contact-card-content">
                    <SiCalendly className="mb-4 text-3xl text-neutral-400 transition-colors group-hover:text-neutral-900 dark:text-gray-500 dark:group-hover:text-white" />
                    <h2 className="mb-2 text-xs font-bold tracking-widest text-neutral-400 uppercase">
                      Calendar
                    </h2>
                    <p className="flex items-center gap-1.5 text-sm font-medium tracking-wide text-neutral-600 group-hover:text-neutral-950 dark:text-gray-400 dark:group-hover:text-white">
                      Schedule a chat{" "}
                      <FiExternalLink className="text-xs opacity-70" />
                    </p>
                  </div>
                </a>

                {/* Timezone Card */}
                <div className="contact-card z-10">
                  <div className="contact-card-content">
                    <RiTimeZoneLine className="mb-4 text-3xl text-neutral-400 dark:text-gray-500" />
                    <h2 className="mb-2 text-xs font-bold tracking-widest text-neutral-400 uppercase">
                      Time Zone
                    </h2>
                    <p className="text-sm font-medium tracking-wide text-neutral-600 dark:text-gray-400">
                      UTC+1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
