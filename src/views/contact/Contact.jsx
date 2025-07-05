import React, { useState } from 'react';

import Breadcrumb from '../../components/ui/Breadcrumb';

import { contactConfig } from './contactConfig';

const Contact = () => {
  // state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // config
  const { data, styles } = contactConfig;

  // handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage(data.messages.success);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage(data.messages.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // render
  return (
    <>
      <Breadcrumb title={data.breadcrumb.title} currentPage={data.breadcrumb.currentPage} />
      
      {/* contact section */}
      <div className="contact-area py-120" style={styles.sectionContainer}>
        <div className="container">
          {/* contact info */}
          <div className="contact-content">
            <div className="row">
              {data.contactInfo.map((info, index) => (
                <div key={index} className="col-md-3">
                  <div className="contact-info" style={styles.contactInfo}>
                    <div className="contact-info-icon" style={styles.contactIcon}>
                      <i className={info.icon}></i>
                    </div>
                    <div className="contact-info-content">
                      <h5 style={styles.contactTitle}>{info.title}</h5>
                      <p style={styles.contactContent}>{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* contact form section */}
          <div className="contact-wrapper">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="contact-img">
                  <img src={data.image.src} alt={data.image.alt} style={styles.image} />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="contact-form" style={styles.formContainer}>
                  <div className="contact-form-header">
                    <h2 style={styles.formTitle}>{data.form.title}</h2>
                    <p style={styles.formDescription}>
                      {data.form.description}
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            placeholder={data.form.placeholders.name}
                            value={formData.name}
                            onChange={handleInputChange}
                            style={styles.formInput}
                            required 
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            placeholder={data.form.placeholders.email} 
                            value={formData.email}
                            onChange={handleInputChange}
                            style={styles.formInput}
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="subject"
                        placeholder={data.form.placeholders.subject} 
                        value={formData.subject}
                        onChange={handleInputChange}
                        style={styles.formInput}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <textarea 
                        name="message" 
                        cols="30" 
                        rows="5" 
                        className="form-control"
                        placeholder={data.form.placeholders.message}
                        value={formData.message}
                        onChange={handleInputChange}
                        style={styles.formInput}
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="theme-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? data.form.buttons.submitting : data.form.buttons.submit} 
                      <i className="far fa-paper-plane"></i>
                    </button>
                    <div className="col-md-12 mt-3">
                      <div className={`form-messege ${submitMessage.includes('Thank you') ? 'text-success' : 'text-danger'}`}>
                        {submitMessage}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <iframe 
          src={data.map.src}
          style={styles.mapContainer} 
          allowFullScreen="" 
          loading="lazy"
          title={data.map.title}
        />
      </div>
    </>
  );
};

export default Contact;