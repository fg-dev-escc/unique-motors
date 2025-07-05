import React from 'react';

import { heroConfig } from './heroConfig';

const HeroSection = () => {
  // config
  const { data, styles } = heroConfig;

  // render
  return (
    <div className="hero-section">
      <div className="hero-slider owl-carousel owl-theme">
        {data.slides.map((slide, index) => (
          <div key={index} className="hero-single" style={{
            ...styles.heroSingle,
            background: `url(${slide.image})`
          }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-9 col-lg-7">
                  <div className="hero-content" style={styles.heroContent}>
                    <h6 className="hero-sub-title wow animate__animated animate__fadeInUp"
                        data-wow-duration="1s" data-wow-delay=".25s" style={styles.heroSubtitle}>
                      {slide.subtitle}
                    </h6>
                    <h1 className="hero-title wow animate__animated animate__fadeInUp" 
                        data-wow-duration="1s" data-wow-delay=".50s" style={styles.heroTitle}
                        dangerouslySetInnerHTML={{ __html: slide.title }}>
                    </h1>
                    <p className="wow animate__animated animate__fadeInUp" 
                       data-wow-duration="1s" data-wow-delay=".75s" style={styles.heroDescription}>
                      {slide.description}
                    </p>
                    <div className="hero-btn wow animate__animated animate__fadeInUp" 
                         data-wow-duration="1s" data-wow-delay="1s" style={styles.heroButtons}>
                      <a href={data.routes.about} className="theme-btn" style={styles.primaryButton}>
                        {data.buttons.aboutMore}<i className="far fa-arrow-right"></i>
                      </a>
                      <a href={data.routes.cars} className="theme-btn theme-btn2" style={styles.secondaryButton}>
                        {data.buttons.learnMore}<i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;