
import React from 'react';
import { ASSETS } from '../constants';
import { motion } from 'framer-motion';

const AboutHero: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col md:flex-row min-h-[693px]">
        {/* Image Column */}
        <div className="w-full md:w-[45%] h-[400px] md:h-auto relative overflow-hidden">
          <img 
            src={ASSETS.ABOUT_HERO_IMG} 
            alt="PSU Students" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Column */}
        <div className="w-full md:w-[55%] flex flex-col justify-center px-8 py-16 md:px-20 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[40px] md:text-[60px] font-bold text-cyc-blue leading-[1.1] mb-6">
              Who We Are
            </h1>
            <h2 className="text-[20px] md:text-[24px] text-cyc-terracotta mb-8 leading-snug">
              Empowering Small Businesses and Student Consultants
            </h2>
            <p className="text-cyc-blue text-[16px] leading-relaxed max-w-2xl font-normal">
              Consult Your Community at Penn State is the first CYC chapter in Pennsylvania. CYC is a registered 501(c)(3) nonprofit organization committed to delivering high-quality pro bono consulting services to small businesses. Since its founding in 2013, CYC has expanded to over 20 chapters at top universities across the nation, creating a movement that empowers both small business owners and student consultants.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
