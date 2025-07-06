import React from 'react';

import { partnerConfig } from './partnerConfig';

const PartnerSection = () => {
  const { data } = partnerConfig;

  return (
    <div className="partner-area bg pt-50 pb-50">
      <div className="container">
        <div className="partner-wrapper partner-slider owl-carousel owl-theme">
          {data.partners.map((partner, index) => (
            <img 
              key={index} 
              src={partner.logo} 
              alt="thumb"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;