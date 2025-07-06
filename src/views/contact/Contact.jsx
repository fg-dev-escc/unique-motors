import React from 'react';

import HeroSection from './HeroSection/HeroSection';
import ContactInfo from './ContactInfo/ContactInfo';
import ContactForm from './ContactForm/ContactForm';
import ContactMap from './ContactMap/ContactMap';

const Contact = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default Contact;