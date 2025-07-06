import React from 'react';

import HeroSection from './HeroSection/HeroSection';
import AboutSection from './AboutSection/AboutSection';
import CounterSection from './CounterSection/CounterSection';
import FaqSection from './FaqSection/FaqSection';
import TestimonialSection from './TestimonialSection/TestimonialSection';
import TeamSection from './TeamSection/TeamSection';
import PartnerSection from './PartnerSection/PartnerSection';

const About = () => {
  // render
  return (
    <main className="main">
      {/* <HeroSection /> */}
      <AboutSection />
      <CounterSection />
      <FaqSection />
      <TestimonialSection />
      <TeamSection />
      <PartnerSection />
    </main>
  );
};

export default About;