import Link from 'next/link';
import { motion } from 'framer-motion';
import { slideInFromBottomAnimation } from '../utils/framerAnimations';
import { PiBriefcaseFill } from 'react-icons/pi';
import { BiSolidMessageRoundedDetail } from 'react-icons/bi';

export const Navbar = () => {
  return (
    <nav className='fixed inset-0 w-full z-10 h-fit bg-neutral-900 backdrop-blur-sm lg:backdrop-blur-0 lg:bg-transparent bg-opacity-20'>
      <motion.div {...slideInFromBottomAnimation}
      transition={{ delay: 0.5, duration: 1 }} className="flex flex-row justify-between p-2 sm:p-6 container mx-auto uppercase">
        <Link href='/' className='font-kaisei text-7xl hover:animate-spin h-12'>
          *
        </Link>
        <div className='flex flex-row justify-between items-center gap-8 sm:gap-16 font-medium text-sm tracking-wider text-neutral-400'>
          <Link href='./projects'>
            <div className='hover:-translate-y-1 transition-all duration-300 active:translate-y-1'>
              <span className="hidden sm:block">Projects</span>
              <PiBriefcaseFill className="sm:hidden text-2xl" />
            </div>
          </Link>
          <Link href='./contact'>
            <div className='hover:-translate-y-1 transition-all duration-300 active:translate-y-1'>
              <span className="hidden sm:block">Contact</span>
              <BiSolidMessageRoundedDetail className="sm:hidden text-2xl" />
            </div>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};
