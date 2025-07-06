import React from 'react';

import { testimonialConfig } from './testimonialConfig';

const TestimonialSection = () => {
  // config
  const { data } = testimonialConfig;

  // render
  return (
    <div className="testimonial-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                {data.header.tagline}
              </span>
              <h2 className="site-title text-white">
                {data.header.title.before} <span>{data.header.title.highlight}</span>
              </h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="testimonial-slider owl-carousel owl-theme">
          {data.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-single">
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src={testimonial.avatar} alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon">
                  <i className="flaticon-quote-hand-drawn-symbol"></i>
                </span>
                <p>
                  {testimonial.quote}
                </p>
                <div className="testimonial-quote-icon">
                  <img src={data.quoteIcon} alt="" />
                </div>
              </div>
              <div className="testimonial-rate">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;