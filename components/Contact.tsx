import { InputField } from "./Input";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { BiSolidPaperPlane } from "react-icons/bi";
import { handleSubmit } from "@/utils/handleSubmit";

export const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-20 px-2 pb-16 pt-36 sm:px-8 lg:flex-row lg:py-20">
      <article className="grid max-w-2xl flex-1 gap-10 text-center">
        <h1 className="text-4xl font-extrabold uppercase tracking-widest">
          Contact
        </h1>

        <p className="max-w-lg text-sm leading-8 tracking-wider text-neutral-400">
          Whether you&apos;re interested in networking, or career advice, or
          want to have a casual conversation, I look forward to communicating
          with you and learning from our interactions!
        </p>

        <div className="grid gap-10 text-sm">
          <div className="grid gap-2">
            <h2 className="text-lg font-bold tracking-widest">Address</h2>
            <p className="tracking-wider text-neutral-400">
              Ondo State, Nigeria
            </p>
          </div>
          <div className="grid gap-2">
            <h2 className="text-lg font-bold tracking-widest">Email</h2>
            <p className="tracking-wider text-neutral-400">
              <a
                href="mailto:aworetanjeremiah@gmail.com"
                className="underline-offset-2 hover:underline"
              >
                aworetanjeremiah@gmail.com
              </a>
              ,
              <a
                href="mailto:hello@jeremy0x.tech"
                className="underline-offset-2 hover:underline"
              >
                hello@jeremy0x.tech
              </a>
            </p>
          </div>
        </div>
      </article>

      <form
        onSubmit={(event) => handleSubmit({ event, setIsLoading })}
        method="POST"
        className="grid w-full max-w-xl flex-1 gap-10 rounded-xl bg-opacity-50 backdrop-blur-lg backdrop-filter md:p-14 md:shadow-2xl"
      >
        <h1 className="text-center text-xl font-extrabold uppercase tracking-widest sm:text-4xl">
          Contact Form
        </h1>

        <p className="text-center text-sm tracking-wider text-neutral-400">
          It actually works, I promise.{" "}
          <a
            href="https://formsubmit.co/"
            className="underline-offset-2 hover:underline"
            target="blank"
          >
            FormSubmit
          </a>
          &apos;s got my back!
        </p>

        <div className="grid gap-8">
          <InputField type="text" name="name" placeholder="Your name" />
          <InputField type="email" name="email" placeholder="Your email" />
          <InputField textarea name="message" placeholder="Message" rows={1} />

          <button
            type="submit"
            disabled={isLoading}
            className="mx-auto mt-4 flex w-fit flex-row items-center justify-center gap-3 rounded-xl bg-zinc-800 bg-opacity-30 px-10 py-4 uppercase tracking-wider shadow-2xl transition-all hover:-translate-y-1 active:translate-y-1 disabled:animate-pulse disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span>{isLoading ? "Sending..." : "Send Message"}</span>
            {isLoading ? (
              <ImSpinner9 className="animate-spin text-xl" />
            ) : (
              <BiSolidPaperPlane className="text-xl" />
            )}
          </button>
        </div>
      </form>

      <Toaster position="bottom-center" />
    </div>
  );
};
