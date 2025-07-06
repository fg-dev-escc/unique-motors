import React from 'react';

import { serviceSectionConfig } from './serviceSectionConfig';

const ServiceSection = () => {
  // config
  const { data } = serviceSectionConfig;

  // render
  return (
    <div id="servicios" className="service-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">{data.heading.tagline}</span>
              <h2 className="site-title">
                {data.heading.title.before} <span>{data.heading.title.highlight}</span>
              </h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {data.services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="service-item">
                <span className="service-count">{service.count}</span>
                <div className="service-icon">
                  <img src={service.icon} alt={service.iconAlt} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href={service.link}>{service.title}</a>
                  </h3>
                  <p className="service-text">
                    {service.description}
                  </p>
                  <div className="service-arrow">
                    <a href={service.button.link} className="theme-btn">
                      {service.button.text} <i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;