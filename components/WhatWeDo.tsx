
import React from 'react';
import { WHAT_WE_DO_DATA } from '../constants';
import { motion } from 'framer-motion';

const WhatWeDo: React.FC = () => {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="w-full bg-white py-20 text-center">
        <h2 className="text-[40px] md:text-[60px] font-bold text-cyc-blue">
          What We Do
        </h2>
      </div>

      {/* Rows */}
      {WHAT_WE_DO_DATA.map((item, index) => (
        <div 
          key={index}
          className={`w-full ${item.color === 'terracotta' ? 'bg-cyc-terracotta' : 'bg-cyc-blue'} min-h-[320px] flex flex-col md:flex-row`}
        >
          {/* Left Title Column */}
          <div className="w-full md:w-[40%] flex items-center justify-start px-8 md:pl-20 md:pr-4 py-8 md:py-0">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-[28px] md:text-[32px] font-bold leading-tight"
            >
              {item.title}
            </motion.h3>
          </div>

          {/* Right Content Column */}
          <div className="w-full md:w-[60%] flex flex-col justify-center px-8 md:pr-20 md:pl-8 pb-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white text-[18px] md:text-[20px] font-normal mb-4">
                {item.subtitle}
              </h4>
              <p className="text-white text-[15px] md:text-[16px] leading-relaxed font-light opacity-90">
                {item.description}
              </p>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhatWeDo;
