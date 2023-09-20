'use client';
import { MetaTag, Navbar, Socials } from '@/components';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInOutAnimation } from '@/utils/framerAnimations';

export default function Projects() {
  return (
    <>
      <MetaTag title='Projects — Jeremy' />

      <AnimatePresence mode='wait'>
        <motion.main
          className='min-h-screen bg-neutral-900 text-white flex items-center justify-center container mx-auto'
          {...fadeInOutAnimation}
        >
          <motion.div className='page-content' {...fadeInOutAnimation}>
            <Navbar />

            <Socials />
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
