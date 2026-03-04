import React from 'react';
import Button from './Button';
import { ASSETS } from '../constants';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full h-[572px] bg-gray-200 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={ASSETS.ABOUT_BG} 
          alt="Building" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-cyc-blue/40"></div>
      </div>

      {/* Content Box */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-cyc-blue w-full max-w-[597px] min-h-[350px] flex flex-col items-center justify-center p-12 text-center shadow-lg"
        >
          <h2 className="text-white text-[56px] font-light mb-6 tracking-wide">
            ABOUT
          </h2>
          <p className="text-white text-[16px] mb-12 font-light">
            Find out about our mission and history.
          </p>
          <Button>Learn More</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;