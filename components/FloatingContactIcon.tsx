import Link from "next/link";
import { BiSolidPaperPlane } from "react-icons/bi";

export const FloatingContactIcon = () => {
  return (
    <Link href="/contact" title="Contact">
      <div className="fixed bottom-4 right-6 z-50 flex items-center justify-center rounded-full bg-neutral-800 p-2.5 text-white shadow-lg transition hover:bg-neutral-950 md:p-4">
        <BiSolidPaperPlane className="text-md md:text-2xl" />
      </div>
    </Link>
  );
};
