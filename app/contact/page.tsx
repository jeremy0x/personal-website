'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInOutAnimation } from '@/utils/framerAnimations';
import { Blur, Contact, MetaTag, Navbar, Socials } from '@/components';

export default function Page() {
  return (
    <>
      <MetaTag title='Contact — Jeremy' />

      <AnimatePresence mode='wait'>
        <motion.main
          className='min-h-screen bg-neutral-900 text-white flex items-center justify-center container mx-auto'
          {...fadeInOutAnimation}
        >
          <motion.div className='page-content' {...fadeInOutAnimation}>
            <Blur />
            <Navbar />
            <Contact />
            <div className="hidden sm:block">
              <Socials />
            </div>
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
