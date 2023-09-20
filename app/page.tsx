'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Blur, MetaTag, Navbar, Preloader, Socials } from '@/components';
import { fadeInAnimation, fadeInOutAnimation } from '@/utils/framerAnimations';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <MetaTag title='Home — Jeremy' />

      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Preloader setIsLoading={setIsLoading} />
        ) : (
          <motion.main
            className='min-h-screen bg-neutral-900 text-white uppercase flex items-center justify-center container mx-auto'
            {...fadeInOutAnimation}
          >
            <motion.div className='page-content' {...fadeInOutAnimation}>
              <Navbar />

              <Blur />

              <motion.div className='grid gap-4 z-20'>
                <motion.p
                  {...fadeInAnimation}
                  transition={{ delay: 1, duration: 1 }}
                  className='text-sm font-normal pl-16 sm:pl-36 tracking-widest text-neutral-400'
                >
                  I am
                </motion.p>
                <motion.h1
                  className='font-black tracking-wide text-6xl sm:text-9xl'
                  {...fadeInAnimation}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  Jeremy
                </motion.h1>
                <motion.p
                  className='text-sm font-light text-right tracking-widest text-neutral-400'
                  {...fadeInAnimation}
                  transition={{ delay: 2.5, duration: 1.5 }}
                >
                  a frontend developer
                </motion.p>
              </motion.div>

              <Socials />
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
