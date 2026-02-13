"use client";
import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { BiSolidPaperPlane } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { useTheme } from "next-themes";

import { handleSubmit } from "@/utils/handleSubmit";
import { fadeInAnimation } from "@/utils/framerAnimations";
import { Breadcrumbs, InputField } from "@/components";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
                    Messages get delivered to my email. I&apos;ll get back to
                    you as soon as possible.
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

              <form
                onSubmit={(event) => handleSubmit({ event, setIsLoading })}
                method="POST"
                className="grid w-full max-w-xl flex-1 gap-10 rounded-xl backdrop-blur-sm backdrop-filter md:bg-neutral-100/30 md:p-14 md:shadow-xl dark:md:bg-neutral-900/30"
              >
                <h1 className="text-center text-2xl font-black tracking-widest uppercase sm:text-3xl">
                  Contact Form
                </h1>

                <p className="text-center text-sm tracking-wider text-neutral-600 dark:text-gray-400">
                  It actually works, I promise :)
                </p>

                <div className="grid gap-8">
                  <InputField type="text" name="name" placeholder="Your name" />
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Your email"
                  />
                  <InputField
                    textarea
                    name="message"
                    placeholder="Message"
                    rows={2}
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-opacity-30 mx-auto mt-4 flex w-fit flex-row items-center justify-center gap-3 rounded-xl bg-neutral-200 px-10 py-4 tracking-wider uppercase shadow-2xl transition-all hover:-translate-y-1 active:translate-y-1 disabled:animate-pulse disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:-translate-y-0 dark:bg-zinc-800"
                  >
                    <span>{isLoading ? "Sending..." : "Send Message"}</span>
                    {isLoading ? (
                      <ImSpinner9 className="animate-spin text-xl" />
                    ) : (
                      <BiSolidPaperPlane className="text-xl" />
                    )}
                  </button>
                </div>

                {isLoading && (
                  <motion.p
                    className="mt-4 text-center text-sm text-neutral-600 dark:text-gray-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    Please wait 30 seconds to 1 minute for message delivery.
                  </motion.p>
                )}
              </form>

              <Toaster
                position="bottom-right"
                theme={theme === "dark" ? "dark" : "light"}
              />
            </div>
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
