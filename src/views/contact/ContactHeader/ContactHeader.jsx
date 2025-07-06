import React from 'react';
import { contactHeaderConfig } from './contactHeaderConfig';

const ContactHeader = () => {
  // config
  const { data, styles } = contactHeaderConfig;

  return (
    <div className="contact-header-area bg py-120" style={styles.sectionContainer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">{data.sectionTitle.tagline}</span>
              <h2 className="site-title">
                {data.sectionTitle.title} <span>{data.sectionTitle.titleSpan}</span>
              </h2>
              <div className="heading-divider"></div>
              <p className="site-title-desc">{data.sectionTitle.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;