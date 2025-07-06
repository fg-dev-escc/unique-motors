import React from 'react';

import { aboutSectionConfig } from './aboutSectionConfig';

const AboutSection = () => {

  const { data } = aboutSectionConfig;

  return (
    <div className="about-area py-120 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="about-left">
              <div className="about-img">
                <img 
                  className="about-img-1" 
                  src={data.images.main} 
                  alt={data.images.mainAlt}
                />
              </div>
              <div className="about-shape">
                <img src={data.images.shape} alt={data.images.shapeAlt} />
              </div>
              <div className="about-experience">
                <div className="about-experience-icon">
                  <img src={data.experience.icon} alt={data.experience.iconAlt} />
                </div>
                <b dangerouslySetInnerHTML={{ __html: data.experience.text }} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right">
              <div className="site-heading mb-3">
                <span className="site-title-tagline">
                  {data.content.tagline}
                </span>
                <h2 className="site-title">
                  {data.content.title.before} <span>{data.content.title.highlight}</span> {data.content.title.after}
                </h2>
              </div>
              <p className="about-text">
                {data.content.description}
              </p>
              <div className="about-list-wrapper">
                <ul className="about-list list-unstyled">
                  {data.content.features.map((feature, index) => (
                    <li key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={data.content.button.link} className="theme-btn mt-4">
                {data.content.button.text} <i className="far fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;