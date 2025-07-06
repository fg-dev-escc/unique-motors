import React, { useState } from 'react';

import { contactFormConfig } from './contactFormConfig';

const ContactForm = () => {
  // state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const { data } = contactFormConfig;

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
    <div className="contact-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="contact-img">
              <img src={data.image.src} alt={data.image.alt} />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="contact-form">
              <div className="contact-form-header">
                <h2>{data.form.title}</h2>
                <p>
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
  );
};

export default ContactForm;