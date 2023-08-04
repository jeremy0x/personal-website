import Link from 'next/link';
import { motion } from 'framer-motion';
import { slideInFromBottomAnimation } from '../utils/framerAnimations';

const Navbar = () => {
  return (
    <motion.nav
      {...slideInFromBottomAnimation}
      transition={{ delay: 0.5, duration: 1 }}
      className='flex flex-row justify-between p-6 fixed inset-0 w-full z-10 h-fit uppercase'
    >
      <Link href='/' className='font-kaisei text-7xl hover:animate-spin h-12'>
        *
      </Link>

      <div className='flex flex-row justify-between gap-8 sm:gap-16 font-medium text-sm tracking-wider pt-4'>
        <Link href='./projects'>
          <div className='hover:-translate-y-1 transition-all duration-300'>
            Projects
          </div>
        </Link>

        <Link href='./contact'>
          <div className='hover:-translate-y-1 transition-all duration-300'>
            Contact
          </div>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
