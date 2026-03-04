
import React from 'react';
import { VALUES_DATA } from '../constants';
import { IntegrityIcon, ExcellenceIcon, TeamworkIcon, EmpowermentIcon } from './Icons';
import { motion } from 'framer-motion';

const OurValues: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'integrity': return IntegrityIcon;
      case 'excellence': return ExcellenceIcon;
      case 'teamwork': return TeamworkIcon;
      case 'empowerment': return EmpowermentIcon;
      default: return IntegrityIcon;
    }
  };

  return (
    <section className="w-full">
      {/* Title Section */}
      <div className="w-full bg-cyc-blue pt-16 pb-12 text-center">
        <h2 className="text-[40px] md:text-[56px] font-bold text-white underline underline-offset-8 decoration-2">
          Our Values
        </h2>
      </div>

      {/* Grid Section */}
      <div className="w-full bg-cyc-blue px-5 py-20">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {VALUES_DATA.map((value, index) => {
            const Icon = getIcon(value.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-8 text-white">
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="text-white text-[24px] font-bold mb-6 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-white text-[16px] font-normal leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* White separator line */}
      <div className="w-full bg-cyc-blue">
        <hr className="border-white mx-auto" style={{ maxWidth: '90%' }} />
      </div>
    </section>
  );
};

export default OurValues;
