import React from 'react';

import { faqConfig } from './faqConfig';

const FaqSection = () => {
  // config
  const { data } = faqConfig;

  // render
  return (
    <div className="faq-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faq-right">
              <div className="site-heading mb-3">
                <span className="site-title-tagline">
                  {data.content.tagline}
                </span>
                <h2 className="site-title my-3">
                  {data.content.title.before} <span>{data.content.title.highlight}</span> {data.content.title.after}
                </h2>
              </div>
              <p className="about-text">
                {data.content.description}
              </p>
              <div className="faq-img mt-3">
                <img src={data.image.src} alt={data.image.alt} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
              {data.faqs.map((faq, index) => (
                <div key={index} className="accordion-item">
                  <h2 className="accordion-header" id={`heading${faq.id}`}>
                    <button 
                      className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} 
                      type="button" 
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq.id}`} 
                      aria-expanded={index === 0 ? 'true' : 'false'} 
                      aria-controls={`collapse${faq.id}`}
                    >
                      <span><i className="far fa-question"></i></span> {faq.question}
                    </button>
                  </h2>
                  <div 
                    id={`collapse${faq.id}`} 
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading${faq.id}`} 
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;