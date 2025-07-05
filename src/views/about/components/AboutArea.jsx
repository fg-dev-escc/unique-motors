import React from 'react';

const AboutArea = () => {
  return (
    <div className="about-area py-120 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="about-left">
              <div className="about-img">
                <img className="about-img-1" src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" alt="" />
              </div>
              <div className="about-shape"><img src="assets/img/shape/02.png" alt="" /></div>
              <div className="about-experience">
                <div className="about-experience-icon">
                  <img src="assets/img/icon/car-rent.svg" alt="" />
                </div>
                <b>30 Years Of <br /> Quality Service</b>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right">
              <div className="site-heading mb-3">
                <span className="site-title-tagline">About Us</span>
                <h2 className="site-title">
                  We Provide Quality <span>Car Rental</span> Services
                </h2>
              </div>
              <p className="about-text">
                There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't
                look even slightly believable.
              </p>
              <div className="about-list-wrapper">
                <ul className="about-list list-unstyled">
                  <li>
                    At vero eos et accusamus et iusto odio
                  </li>
                  <li>
                    Established fact that a reader will be distracted
                  </li>
                  <li>
                    Sed ut perspiciatis unde omnis iste natus sit
                  </li>
                </ul>
              </div>
              <a href="about.html" className="theme-btn mt-4">Discover More <i
                      className="far fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;