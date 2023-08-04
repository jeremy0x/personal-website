'use client';
import { useState } from 'react';
import Blur from '@/components/Blur';
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import Preloader from '@/components/Preloader';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInAnimation, fadeInOutAnimation } from '@/utils/framerAnimations';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
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
                  className='text-sm font-normal pl-16 sm:pl-36 tracking-widest'
                >
                  I am
                </motion.p>
                <motion.h1
                  className='tracking-in-contract-bck font-black text-6xl sm:text-9xl'
                  {...fadeInAnimation}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  Jeremy
                </motion.h1>
                <motion.p
                  className='text-sm font-light text-right tracking-widest'
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
