"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { BiSolidPaperPlane } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

import { handleSubmit } from "@/utils/handleSubmit";
import { fadeInAnimation } from "@/utils/framerAnimations";
import { Blur, InputField, Navbar, Socials } from "@/components";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          className="container mx-auto flex min-h-screen items-center justify-center bg-neutral-900 text-white"
          {...fadeInAnimation}
        >
          <motion.div className="page-content" {...fadeInAnimation}>
            <Blur />
            <Navbar />

            <div className="z-10 mx-auto flex flex-col items-center justify-center gap-20 px-2 pb-16 pt-36 sm:px-8 lg:flex-row lg:py-20">
              <article className="z-10 grid max-w-2xl flex-1 gap-10 text-center">
                <div className="space-y-5">
                  <h1 className="text-4xl font-extrabold uppercase tracking-widest">
                    Contact
                  </h1>
                  <p className="max-w-lg text-sm leading-loose tracking-wider text-gray-400">
                    Whether you&apos;re interested in networking, career advice,
                    or casual conversation, I&apos;m eager to connect and learn
                    from our interactions!
                  </p>
                </div>

                <div className="grid gap-10 text-sm">
                  <div className="grid gap-2">
                    <h2 className="text-lg font-bold tracking-widest">
                      Address
                    </h2>
                    <p className="tracking-wider text-gray-400">
                      Akure, Nigeria
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h2 className="text-lg font-bold tracking-widest">Email</h2>
                    <p className="leading-loose tracking-wider text-gray-400">
                      <a
                        href="mailto:hi@jeremy0x.codes"
                        className="underline-offset-2 hover:underline"
                      >
                        hi@jeremy0x.codes
                      </a>
                      <br />
                      <a
                        href="mailto:aworetanjeremiah@gmail.com"
                        className="underline-offset-2 hover:underline"
                      >
                        aworetanjeremiah@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </article>

              <form
                onSubmit={(event) => handleSubmit({ event, setIsLoading })}
                method="POST"
                className="grid w-full max-w-xl flex-1 gap-10 rounded-xl backdrop-blur backdrop-filter md:bg-neutral-900/30 md:p-14 md:shadow-xl"
              >
                <h1 className="text-center text-2xl font-extrabold uppercase tracking-widest sm:text-4xl">
                  Contact Form
                </h1>

                <p className="text-center text-sm tracking-wider text-gray-400">
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
                    className="mx-auto mt-4 flex w-fit flex-row items-center justify-center gap-3 rounded-xl bg-zinc-800 bg-opacity-30 px-10 py-4 uppercase tracking-wider shadow-2xl transition-all hover:-translate-y-1 active:translate-y-1 disabled:animate-pulse disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:-translate-y-0"
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
                    className="mt-4 text-center text-sm text-gray-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    Please wait 30 seconds to 1 minute for message delivery.
                  </motion.p>
                )}
              </form>

              <ToastContainer
                position="bottom-right"
                theme="dark"
                stacked
                pauseOnHover
                pauseOnFocusLoss
                draggable
                bodyClassName="font-sans"
              />
            </div>

            <div className="hidden sm:block">
              <Socials />
            </div>
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
