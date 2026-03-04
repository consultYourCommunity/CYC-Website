import React, { useRef } from 'react';
import { ASSETS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Text fade effect: Fades out faster (0 to 200px scroll)
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textY = useTransform(scrollY, [0, 200], [0, 50]);

  return (
    <section ref={ref} className="relative w-full h-[700px] bg-gray-900 overflow-hidden">
      {/* Background Image - Static (No Parallax) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={ASSETS.HERO_BG} 
          alt="PSU Students" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white text-center px-4"
      >
        <h2 className="text-[12px] md:text-[14px] tracking-[0.25em] font-bold mb-4 uppercase drop-shadow-md">
          PSU
        </h2>
        <h1 className="text-[30px] md:text-[42px] leading-tight font-bold tracking-[0.15em] uppercase max-w-4xl drop-shadow-lg">
          Consult Your<br />Community
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;