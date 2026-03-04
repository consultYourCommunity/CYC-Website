import React from 'react';
import { ASSETS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-cyc-blue text-white pt-20 pb-12">
      <div className="max-w-[980px] mx-auto px-5">
        <div className="bg-[#0D2F6F]/30 backdrop-blur-sm p-12 rounded flex flex-col md:flex-row justify-center items-center md:items-start md:justify-around gap-12 border-4 border-white/5">
          
          {/* Email Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[16px] font-bold mb-4 tracking-widest uppercase">EMAIL</h3>
            <a 
              href="mailto:pennstate@consultyourcommunity.org" 
              className="text-[14px] md:text-[16px] underline hover:no-underline font-light"
            >
              pennstate@consultyourcommunity.org
            </a>
          </div>

          {/* Social Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[16px] font-bold mb-4 tracking-widest uppercase">FOLLOW</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/consult-your-community-psu/" target="_blank" rel="noreferrer">
                <img src={ASSETS.LINKEDIN_ICON} alt="LinkedIn" className="w-6 h-6 object-contain" />
              </a>
              <a href="https://www.instagram.com/pennstatecyc/" target="_blank" rel="noreferrer">
                <img src={ASSETS.INSTAGRAM_ICON} alt="Instagram" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 text-center">
          <p className="text-[14px]">© Consult Your Community PSU</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;