import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-cyc-terracotta py-24 px-4 text-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-[980px] mx-auto flex flex-col items-center"
      >
        <h2 className="text-white text-[56px] font-light mb-6 tracking-wide">
          SERVICES
        </h2>
        <p className="text-white text-[16px] mb-12 font-light">
          Find out about our pro bono consulting services.
        </p>
        <Button>Learn More</Button>
      </motion.div>
    </section>
  );
};

export default ServicesSection;