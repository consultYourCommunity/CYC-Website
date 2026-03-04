
import React from 'react';
import { motion } from 'framer-motion';

const OurMission: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-5">
      <div className="max-w-[980px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8">
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[40px] md:text-[56px] font-bold text-cyc-blue leading-tight"
          >
            Our <br /> Mission
          </motion.h2>
        </div>
        <div className="w-full md:w-1/2">
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[18px] leading-relaxed text-cyc-blue"
          >
            Our mission is service. Our method is consulting. We empower small businesses, develop future leaders, and drive community impact. One project at a time.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
