import React from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import AboutArea from './components/AboutArea';
import CounterArea from './components/CounterArea';
import TeamArea from './components/TeamArea';

const About = () => {
  return (
    <main className="main">
      <Breadcrumb 
        title="About Us"
        items={[
          { label: 'Home', path: '/' },
          { label: 'About Us', path: '/about', active: true }
        ]}
      />

      {/* about area */}
      <div className="about-area py-120 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="about-left">
                <div className="about-img">
                  <img className="about-img-1" src="assets/img/about/01.jpg" alt="" />
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
      {/* about area end */}

      {/* counter area */}
      <div className="counter-area pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <img src="assets/img/icon/car.svg" alt="" />
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="500" data-speed="3000">500</span>
                  <h6 className="title">+ Available Cars </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <img src="assets/img/icon/car-rent.svg" alt="" />
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="900" data-speed="3000">900</span>
                  <h6 className="title">+ Happy Clients</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <img src="assets/img/icon/driver.svg" alt="" />
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="1500" data-speed="3000">1500</span>
                  <h6 className="title">+ Experts Driver</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <img src="assets/img/icon/experince.svg" alt="" />
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="30" data-speed="3000">30</span>
                  <h6 className="title">+ Years Of Experience</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter area end */}

      {/* faq area */}
      <div className="faq-area py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-right">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline">Faq's</span>
                  <h2 className="site-title my-3">General <span>frequently</span> asked questions</h2>
                </div>
                <p className="about-text">There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even.</p>
                <div className="faq-img mt-3">
                  <img src="assets/img/faq/01.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <span><i className="far fa-question"></i></span> How Long Does A Car Rent Take ?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show"
                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure of the moment, so
                      blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
                      eu orci id odio facilisis pharetra.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <span><i className="far fa-question"></i></span> How Can I Become A Member
                      ?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure of the moment, so
                      blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
                      eu orci id odio facilisis pharetra.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <span><i className="far fa-question"></i></span> What Payment Gateway You Support ?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse"
                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure of the moment, so
                      blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
                      eu orci id odio facilisis pharetra.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour" aria-expanded="false"
                      aria-controls="collapseFour">
                      <span><i className="far fa-question"></i></span> How Can I Cancel My Request ?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse"
                    aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure of the moment, so
                      blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
                      eu orci id odio facilisis pharetra.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq area end */}

      {/* testimonial-area */}
      <div className="testimonial-area py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Testimonials</span>
                <h2 className="site-title text-white">What Client <span>Say's</span></h2>
                <div className="heading-divider"></div>
              </div>
            </div>
          </div>
          <div className="testimonial-slider owl-carousel owl-theme">
            <div className="testimonial-single">
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src="assets/img/testimonial/01.jpg" alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Sylvia H Green</h4>
                  <p>Customer</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon"><i className="flaticon-quote-hand-drawn-symbol"></i></span>
                <p>
                  There are many variations of passages available but the majority have
                  suffered to the alteration in some injected.
                </p>
                <div className="testimonial-quote-icon">
                  <img src="assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-rate">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src="assets/img/testimonial/02.jpg" alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Gordo Novak</h4>
                  <p>Customer</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon"><i className="flaticon-quote-hand-drawn-symbol"></i></span>
                <p>
                  There are many variations of passages available but the majority have
                  suffered to the alteration in some injected.
                </p>
                <div className="testimonial-quote-icon">
                  <img src="assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-rate">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src="assets/img/testimonial/03.jpg" alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Reid E Butt</h4>
                  <p>Customer</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon"><i className="flaticon-quote-hand-drawn-symbol"></i></span>
                <p>
                  There are many variations of passages available but the majority have
                  suffered to the alteration in some injected.
                </p>
                <div className="testimonial-quote-icon">
                  <img src="assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-rate">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src="assets/img/testimonial/04.jpg" alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Parker Jimenez</h4>
                  <p>Customer</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon"><i className="flaticon-quote-hand-drawn-symbol"></i></span>
                <p>
                  There are many variations of passages available but the majority have
                  suffered to the alteration in some injected.
                </p>
                <div className="testimonial-quote-icon">
                  <img src="assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-rate">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src="assets/img/testimonial/05.jpg" alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Heruli Nez</h4>
                  <p>Customer</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon"><i className="flaticon-quote-hand-drawn-symbol"></i></span>
                <p>
                  There are many variations of passages available but the majority have
                  suffered to the alteration in some injected.
                </p>
                <div className="testimonial-quote-icon">
                  <img src="assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-rate">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial-area end */}

      {/* team-area */}
      <div className="team-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Team</span>
                <h2 className="site-title">Meet Our <span>Team</span></h2>
                <div className="heading-divider"></div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-3">
              <div className="team-item">
                <div className="team-img">
                  <img src="assets/img/team/01.jpg" alt="thumb" />
                </div>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5><a href="#">Chad Smith</a></h5>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item">
                <div className="team-img">
                  <img src="assets/img/team/02.jpg" alt="thumb" />
                </div>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5><a href="#">Malissa Fie</a></h5>
                    <span>Technician</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item">
                <div className="team-img">
                  <img src="assets/img/team/03.jpg" alt="thumb" />
                </div>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5><a href="#">Arron Rodri</a></h5>
                    <span>CEO & Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item">
                <div className="team-img">
                  <img src="assets/img/team/04.jpg" alt="thumb" />
                </div>
                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5><a href="#">Tony Pinto</a></h5>
                    <span>Mechanic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team-area end */}

      {/* partner area */}
      <div className="partner-area bg pt-50 pb-50">
        <div className="container">
          <div className="partner-wrapper partner-slider owl-carousel owl-theme">
            <img src="assets/img/partner/01.png" alt="thumb" />
            <img src="assets/img/partner/02.png" alt="thumb" />
            <img src="assets/img/partner/01.png" alt="thumb" />
            <img src="assets/img/partner/02.png" alt="thumb" />
            <img src="assets/img/partner/01.png" alt="thumb" />
            <img src="assets/img/partner/02.png" alt="thumb" />
            <img src="assets/img/partner/01.png" alt="thumb" />
          </div>
        </div>
      </div>
      {/* partner area end */}
    </main>
  );
};

export default About;