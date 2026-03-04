
import React from 'react';
import AboutHero from './AboutHero';
import WhatWeDo from './WhatWeDo';
import OurMission from './OurMission';
import OurValues from './OurValues';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <WhatWeDo />
      <OurMission />
      <OurValues />
    </div>
  );
};

export default AboutPage;
