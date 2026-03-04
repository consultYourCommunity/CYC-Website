
import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ServicesSection />
    </>
  );
};

export default HomePage;
