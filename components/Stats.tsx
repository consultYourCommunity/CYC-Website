import React from 'react';
import { STATS_DATA } from '../constants';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[980px] mx-auto px-5 flex flex-col items-start gap-16">
        {STATS_DATA.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <span className="text-[60px] md:text-[80px] lg:text-[90px] font-bold text-cyc-blue leading-none mb-2">
              {stat.value}
            </span>
            <p className="text-cyc-blue text-[20px] md:text-[24px] font-bold leading-tight">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;