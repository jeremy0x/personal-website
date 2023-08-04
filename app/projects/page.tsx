'use client';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInOutAnimation } from '@/utils/framerAnimations';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects — Jeremy</title>
      </Head>

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
