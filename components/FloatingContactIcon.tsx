import Link from "next/link";
import { BiSolidPaperPlane } from "react-icons/bi";

export const FloatingContactIcon = () => {
  return (
    <Link href="/contact" title="Contact">
      <div className="fixed bottom-4 right-6 z-50 flex items-center justify-center rounded-full bg-neutral-200 p-2.5 text-neutral-800 shadow-lg transition-all duration-300 hover:scale-125 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-950">
        <BiSolidPaperPlane className="text-md md:text-lg" />
      </div>
    </Link>
  );
};
