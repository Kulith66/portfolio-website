"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// components
import Stairs from './Stairs';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div 
          initial={{ opacity: 1 }} 
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeOut' }
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
          <Stairs />
        </div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;

