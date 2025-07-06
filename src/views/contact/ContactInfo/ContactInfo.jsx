import React from 'react';

import { contactInfoConfig } from './contactInfoConfig';

const ContactInfo = () => {
  // config
  const { data } = contactInfoConfig;

  // render
  return (
    <div className="contact-area py-120">
      <div className="container">
        <div className="contact-content">
          <div className="row">
            {data.contactInfo.map((info, index) => (
              <div key={index} className="col-md-3">
                <div className="contact-info">
                  <div className="contact-info-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-info-content">
                    <h5>{info.title}</h5>
                    <p>{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;