import React from 'react';

import { contactMapConfig } from './contactMapConfig';

const ContactMap = () => {

  const { data } = contactMapConfig;

  return (
    <div className="contact-map">
      <iframe 
        src={data.map.src}
        style={{ height: '400px', border: 0, width: '100%' }} 
        allowFullScreen="" 
        loading="lazy"
        title={data.map.title}
      />
    </div>
  );
};

export default ContactMap;