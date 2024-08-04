'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <motion.div className='w-full h-full relative flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}  // Start with the photo off-screen and transparent
        animate={{ opacity: 1, y: 0 }}   // End with the photo in its final position and fully opaque
        transition={{ delay: 0.5, duration: 0.4, ease: 'easeInOut' }}   // Adjust transition timing as needed
        className='w-[390px] h-[390px] xl:w-[590px] xl:h-[590px] mix-blend-lighten'
      >
        <Image src="/img.png" priority quality={100} fill alt="Profile photo" className='object-contain rounded-full ' />
      </motion.div>
      <motion.div className='absolute mt-8 ml-8' >
        <motion.svg className="w-[400px] xl:w-[600px] h-[400px] xl:h-[600px]"
          fill="transparent"
          viewBox="0 0 600 600"
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle cx="300"
            cy="300"
            r="280"
            stroke="#0e1ddc"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "15 25 92 72", "4 250 22 22"],
              transition: { duration: 20, repeat: Infinity, repeatType: 'reverse' },
              rotate: [0, 360],
            }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default Photo;
