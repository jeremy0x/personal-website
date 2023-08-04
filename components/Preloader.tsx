import { motion } from 'framer-motion';
import { languages } from '../utils/languages';
import { fadeInOutAnimation } from '../utils/framerAnimations';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface PreloaderProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Preloader = ({ setIsLoading }: PreloaderProps) => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    // language switch interval
    const preloaderInterval = setInterval(() => {
      setCurrentLanguageIndex(
        (prevIndex) => (prevIndex + 1) % languages.length
      );
    }, 200);

    // preloader timeout
    setTimeout(() => {
      clearInterval(preloaderInterval);
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(preloaderInterval);
    };
  }, []);

  return (
    <motion.div
      className='min-h-screen bg-neutral-900 text-white uppercase flex items-center justify-center'
      {...fadeInOutAnimation}
    >
      <motion.div className='preloader-text' {...fadeInOutAnimation}>
        <p className='text-3xl font-bold'>{languages[currentLanguageIndex]}</p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
