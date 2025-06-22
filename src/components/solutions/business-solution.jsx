import React from 'react'
import { Link } from "react-router-dom";

// components
import Header from '../shared/header.jsx';
import Footer from "../shared/footer.jsx";

export default function BusinessSolution() {
  return (
    <>
      <div>
        {/*====================  Header Start ====================*/}
        <Header />
        {/*====================  Header End ====================*/}

        {/*====================  Main Start ====================*/}
        <div id="main-wrapper">
          <div className="site-wrapper-reveal">
            <div className="bg-white">
              <div className="about-banner-wrap banner-space bg-img" data-bg="images/bg/business-solution-hero-bg.webp">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 m-auto">
                      <div className="about-banner-content text-center">
                        <h1 className="mb-15 text-white">Business solution</h1>
                        <h5 className="font-weight--normal text-white">Reach out to the world’s most reliable IT services.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===========  feature-large-images-wrapper  Start =============*/}
              <div className="feature-large-images-wrapper section-space--ptb_100">
                <div className="container">
                  <div className="cybersecurity-about-box">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="conact-us-wrap-one managed-it">
                          <h5 className="heading ">Mitech specializes in <span className="text-color-primary"> technological and IT-related services</span> such as product engineering, warranty management, building cloud, infrastructure, network, etc. </h5>
                        </div>
                      </div>
                      <div className="col-lg-7 offset-lg-1">
                        <div className="cybersecurity-about-text">
                          <div className="text">The IT services that Mitech are running can be segmented by the type of skills employed to deliver the service (design, build, run). Technically, these fall into three main categories: business process services, application services, and infrastructure services.</div>
                          <div className="button-group-wrap">
                            <a href="#" className="ht-btn ht-btn-md me-md-3 mb-20">Get a FREE no-obligation quote</a>
                            <a href="#" className="ht-btn ht-btn-md ht-btn--solid">Live chat with a consultant</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===========  feature-large-images-wrapper  End =============*/}
              {/*===========  feature-images-wrapper  Start =============*/}
              <div className="feature-images-wrapper bg-gray section-space--ptb_100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* section-title-wrap Start */}
                      <div className="section-title-wrap text-center section-space--mb_30">
                        <h3 className="heading">Reliable IT Services for <span className="text-color-primary"> Businesses</span></h3>
                      </div>
                      {/* section-title-wrap Start */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="feature-images__four">
                        <div className=" row">
                          <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                            {/* ht-box-icon Start */}
                            <a href="#" className="ht-box-images style-04">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-05-image-01-60x60.webp" alt="BITS"/>
                                </div>
                                <div className="content">
                                  <h5 className="heading">IT Design</h5>
                                  <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.</div>
                                </div>
                              </div>
                            </a>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                            {/* ht-box-icon Start */}
                            <a href="#" className="ht-box-images style-04">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-05-image-02-60x60.webp" alt="BITS"/>
                                </div>
                                <div className="content">
                                  <h5 className="heading">IT Management </h5>
                                  <div className="text">It’s possible to simultaneously manage and transform information from one server to another.</div>
                                </div>
                              </div>
                            </a>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                            {/* ht-box-icon Start */}
                            <a href="#" className="ht-box-images style-04">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-05-image-03-60x60.webp" alt="BITS"/>
                                </div>
                                <div className="content">
                                  <h5 className="heading">Data Security</h5>
                                  <div className="text">Back up your database, store in a safe and secure place while still maintaining its accessibility.</div>
                                </div>
                              </div>
                            </a>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                            {/* ht-box-icon Start */}
                            <a href="#" className="ht-box-images style-04">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-05-image-04-60x60.webp" alt="BITS"/>
                                </div>
                                <div className="content">
                                  <h5 className="heading">Workforce Management</h5>
                                  <div className="text">Suspe ndisse suscipit sagittis leo sit met condime ntum esti laiolainx bulum iscipit sagittis leo sit met con ndisse suscipit sagittis leo sit met cone su</div>
                                </div>
                              </div>
                            </a>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                            {/* ht-box-icon Start */}
                            <a href="#" className="ht-box-images style-04">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-05-image-05-60x60.webp" alt="BITS"/>
                                </div>
                                <div className="content">
                                  <h5 className="heading">Business Reform</h5>
                                  <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.</div>
                                </div>
                              </div>
                            </a>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                            {/* ht-box-icon Start */}
                            <a href="#" className="ht-box-images style-04">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-05-image-06-60x60.webp" alt="BITS"/>
                                </div>
                                <div className="content">
                                  <h5 className="heading">Infrastructure Plan</h5>
                                  <div className="text">Mitech takes into account all conditions and budgets needed for building infrastructure plan..</div>
                                </div>
                              </div>
                            </a>
                            {/* ht-box-icon End */}
                          </div>
                        </div>
                      </div>
                      <div className="section-under-heading text-center section-space--mt_60">Challenges are just opportunities in disguise. <a href="#">Take the challenge!</a></div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===========  feature-images-wrapper  End =============*/}
              {/*========= About Delivering Wrapper Start ===========*/}
              <div className="about-delivering-wrapper section-space--ptb_100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title-wrap text-center section-space--mb_20">
                        <h3 className="heading">Business IT Support Features</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="delivering-optimal-wrap">
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">IT Design </h5>
                            <div className="desc">We provide the most responsive and functional IT design for companies and businesses worldwide. </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title"> Data Security </h5>
                            <div className="desc">Back up your database, store in a safe and secure place while still maintaining its accessibility. </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Infrastructure Plan </h5>
                            <div className="desc">Mitech takes into account all conditions and budgets needed for building infrastructure plan. </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="delivering-optimal-wrap">
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">IT Management </h5>
                            <div className="desc">It’s possible to simultaneously manage and transform key information from one server to another. </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Business Reform</h5>
                            <div className="desc">We propose feasible &amp; practical plans for successfully transform businesses based on their needs. </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Firewall Advancement </h5>
                            <div className="desc">Enhancing the strength and security of firewalls to protect online data from malicious sources. </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*========= About Resources Wrapper Start ===========*/}
              <div className="about-resources-wrapper">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                      <div className="resources-left-box">
                        <div className="resources-inner">
                          <h6 className="sub-title mb-20">Resources</h6>
                          <h3 className="heading">Get a copy of brochure on <span className="text-color-primary"> Brand New IT Tech.</span></h3>
                          <div className="button mt-30">
                            <a href="#" className="ht-btn ht-btn-md">Download now (3MB)</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                      <div className="resources-right-box">
                        <div className="resources-right-inner text-center">
                          <div className="resources-images">
                            <img className="img-fluid" src="images/banners/managed-it-services-book-cover.webp" alt="BITS"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*========= About Resources Wrapper End ===========*/}
              {/*====================  testimonial section ====================*/}
              <div className="testimonial-slider-area section-space--pt_100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title-wrap text-center section-space--mb_40">
                        <h6 className="section-sub-title mb-20">Testimonials</h6>
                        <h3 className="heading">What do people praise about <span className="text-color-primary"> Mitech?</span></h3>
                      </div>
                      <div className="testimonial-slider">
                        <div className="swiper-container testimonial-slider__container">
                          <div className="swiper-wrapper testimonial-slider__wrapper">
                            <div className="swiper-slide">
                              <div className="testimonial-slider__one wow move-up">
                                <div className="testimonial-slider--info">
                                  <div className="testimonial-slider__media">
                                    <img src="images/testimonial/mitech-testimonial-avata-02-90x90.webp" className="img-fluid" alt="BITS"/>
                                  </div>
                                  <div className="testimonial-slider__author">
                                    <div className="testimonial-rating">
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                    </div>
                                    <div className="author-info">
                                      <h6 className="name">Abbie Ferguson</h6>
                                      <span className="designation">Marketing</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="testimonial-slider__one wow move-up">
                                <div className="testimonial-slider--info">
                                  <div className="testimonial-slider__media">
                                    <img src="images/testimonial/mitech-testimonial-avata-03-90x90.webp" className="img-fluid" alt="BITS"/>
                                  </div>
                                  <div className="testimonial-slider__author">
                                    <div className="testimonial-rating">
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                    </div>
                                    <div className="author-info">
                                      <h6 className="name">Monica Blews</h6>
                                      <span className="designation">Web designer</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="testimonial-slider__one wow move-up">
                                <div className="testimonial-slider--info">
                                  <div className="testimonial-slider__media">
                                    <img src="images/testimonial/mitech-testimonial-avata-04-90x90.webp" className="img-fluid" alt="BITS"/>
                                  </div>
                                  <div className="testimonial-slider__author">
                                    <div className="testimonial-rating">
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                    </div>
                                    <div className="author-info">
                                      <h6 className="name">Abbie Ferguson</h6>
                                      <span className="designation">WEB DESIGNER</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="testimonial-slider__one wow move-up">
                                <div className="testimonial-slider--info">
                                  <div className="testimonial-slider__media">
                                    <img src="images/testimonial/mitech-testimonial-avata-01-90x90.webp" className="img-fluid" alt="BITS"/>
                                  </div>
                                  <div className="testimonial-slider__author">
                                    <div className="testimonial-rating">
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                    </div>
                                    <div className="author-info">
                                      <h6 className="name">Abbie Ferguson</h6>
                                      <span className="designation">WEB DESIGNER</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-pagination swiper-pagination-t01 section-space--mt_30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*====================  End of testimonial section  ====================*/}
              {/*====================  brand logo slider area ====================*/}
              <div className="brand-logo-slider-area section-space--ptb_60">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* brand logo slider */}
                      <div className="brand-logo-slider__container-area">
                        <div className="swiper-container brand-logo-slider__container">
                          <div className="swiper-wrapper brand-logo-slider__one">
                            <div className="swiper-slide brand-logo brand-logo--slider">
                              <a href="#">
                                <div className="brand-logo__image">
                                  <img src="images/brand/mitech-client-logo-01.webp" className="img-fluid" alt="BITS"/>
                                </div>
                                <div className="brand-logo__image-hover">
                                  <img src="images/brand/mitech-client-logo-01-hover.webp" className="img-fluid" alt="BITS"/>
                                </div>
                              </a>
                            </div>
                            <div className="swiper-slide brand-logo brand-logo--slider">
                              <a href="#">
                                <div className="brand-logo__image">
                                  <img src="images/brand/mitech-client-logo-02.webp" className="img-fluid" alt="BITS"/>
                                </div>
                                <div className="brand-logo__image-hover">
                                  <img src="images/brand/mitech-client-logo-02-hover.webp" className="img-fluid" alt="BITS"/>
                                </div>
                              </a>
                            </div>
                            <div className="swiper-slide brand-logo brand-logo--slider">
                              <a href="#">
                                <div className="brand-logo__image">
                                  <img src="images/brand/mitech-client-logo-03.webp" className="img-fluid" alt="BITS"/>
                                </div>
                                <div className="brand-logo__image-hover">
                                  <img src="images/brand/mitech-client-logo-03-hover.webp" className="img-fluid" alt="BITS"/>
                                </div>
                              </a>
                            </div>
                            <div className="swiper-slide brand-logo brand-logo--slider">
                              <a href="#">
                                <div className="brand-logo__image">
                                  <img src="images/brand/mitech-client-logo-04.webp" className="img-fluid" alt="BITS"/>
                                </div>
                                <div className="brand-logo__image-hover">
                                  <img src="images/brand/mitech-client-logo-04-hover.webp" className="img-fluid" alt="BITS"/>
                                </div>
                              </a>
                            </div>
                            <div className="swiper-slide brand-logo brand-logo--slider">
                              <a href="#">
                                <div className="brand-logo__image">
                                  <img src="images/brand/mitech-client-logo-05.webp" className="img-fluid" alt="BITS"/>
                                </div>
                                <div className="brand-logo__image-hover">
                                  <img src="images/brand/mitech-client-logo-05-hover.webp" className="img-fluid" alt="BITS"/>
                                </div>
                              </a>
                            </div>
                            <div className="swiper-slide brand-logo brand-logo--slider">
                              <a href="#">
                                <div className="brand-logo__image">
                                  <img src="images/brand/mitech-client-logo-06.webp" className="img-fluid" alt="BITS"/>
                                </div>
                                <div className="brand-logo__image-hover">
                                  <img src="images/brand/mitech-client-logo-06-hover.webp" className="img-fluid" alt="BITS"/>
                                </div>
                              </a>
                            </div>
                            <div className="swiper-slide brand-logo brand-logo--slider">
                              <a href="#">
                                <div className="brand-logo__image">
                                  <img src="images/brand/mitech-client-logo-07.webp" className="img-fluid" alt="BITS"/>
                                </div>
                                <div className="brand-logo__image-hover">
                                  <img src="images/brand/mitech-client-logo-07-hover.webp" className="img-fluid" alt="BITS"/>
                                </div>
                              </a>
                            </div>
                            <div className="swiper-slide brand-logo brand-logo--slider">
                              <a href="#">
                                <div className="brand-logo__image">
                                  <img src="images/brand/mitech-client-logo-08.webp" className="img-fluid" alt="BITS"/>
                                </div>
                                <div className="brand-logo__image-hover">
                                  <img src="images/brand/mitech-client-logo-08-hover.webp" className="img-fluid" alt="BITS"/>
                                </div>
                              </a>
                            </div>
                            <div className="swiper-slide brand-logo brand-logo--slider">
                              <a href="#">
                                <div className="brand-logo__image">
                                  <img src="images/brand/mitech-client-logo-09.webp" className="img-fluid" alt="BITS"/>
                                </div>
                                <div className="brand-logo__image-hover">
                                  <img src="images/brand/mitech-client-logo-09-hover.webp" className="img-fluid" alt="BITS"/>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*====================  End of brand logo slider area  ====================*/}
              {/*============ Contact Us Area Start =================*/}
              <div className="contact-us-area service-contact-bg section-space--ptb_100">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-4 me-auto">
                      <div className="contact-info sytle-one text-left">
                        <div className="contact-info-title-wrap text-center">
                          <h3 className="heading text-white mb-10">4.9/5.0</h3>
                          <div className="ht-star-rating lg-style">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                          <p className="sub-text">by 700+ customers for 3200+ clients</p>
                        </div>
                        <div className="contact-list-item">
                          <a href="tel:190068668" className="single-contact-list">
                            <div className="content-wrap">
                              <div className="content">
                                <div className="icon">
                                  <span className="fas fa-phone" />
                                </div>
                                <div className="main-content">
                                  <h6 className="heading">Call for advice now!</h6>
                                  <div className="text">1900 68668</div>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a href="mailto:hello@mitech.com" className="single-contact-list">
                            <div className="content-wrap">
                              <div className="content">
                                <div className="icon">
                                  <span className="far fa-envelope" />
                                </div>
                                <div className="main-content">
                                  <h6 className="heading">Say hello</h6>
                                  <div className="text">hello@mitech.com</div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 me-auto ms-auto">
                      <div className="business-solution-form-wrap">
                        <div className="contact-title text-center section-space--mb_40">
                          <h5 className="mb-10">Book appointment</h5>
                          <p className="text">It's out pleasure to have a chance to cooperate.</p>
                        </div>
                        {/* <form id="contact-form" action="https://whizthemes.com/mail-php/jowel/mitech/php/hero-mail.php" method="post"> */}
                        <form id="contact-form" action="php/hero-mail.php" method="post">
                          <div className="contact-form__two">
                            <div className="contact-input">
                              <div className="contact-inner">
                                <input name="con_name" type="text" placeholder="Name *" />
                              </div>
                              <div className="contact-inner">
                                <input name="con_email" type="email" placeholder="Email *" />
                              </div>
                            </div>
                            <div className="contact-select">
                              <div className="form-item contact-inner">
                                <span className="inquiry">
                                  <select id="Visiting" name="Visiting">
                                    <option disabled selected>Select Department to email</option>
                                    <option value="Your inquiry about">Your inquiry about</option>
                                    <option value="General Information Request">General Information Request</option>
                                    <option value="Partner Relations">Partner Relations</option>
                                    <option value="Careers">Careers</option>
                                    <option value="Software Licencing">Software Licencing</option>
                                  </select>
                                </span>
                              </div>
                            </div>
                            <div className="contact-inner contact-message">
                              <textarea name="con_message" placeholder="Please describe what you need." defaultValue={""} />
                            </div>
                            <div className="comment-submit-btn">
                              <button className="ht-btn ht-btn-md" type="submit">Get a free consultation</button>
                              <p className="form-messege" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*============ Contact Us Area End =================*/}
            </div>
          </div>
          {/*====================  footer area ====================*/}
          <div className="footer-area-wrapper reveal-footer bg-gray">
            <div className="footer-area section-space--ptb_80">
              <div className="container">
                <div className="row footer-widget-wrapper">
                  <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                    <div className="footer-widget__logo mb-30">
                      <img src="images/logo/dark-logo-160x48.webp" width={160} height={48} className="img-fluid" alt="BITS"/>
                    </div>
                    <ul className="footer-widget__list">
                      <li>58 Howard Street #2 San Francisco, CA 941</li>
                      <li><a href="mailto:contact@aeroland.com" className="hover-style-link">contact@aeroland.com</a></li>
                      <li><a href="tel:123344556" className="hover-style-link text-black font-weight--bold">(+68)1221 09876</a></li>
                      <li><a href="https://hasthemes.com/" className="hover-style-link text-color-primary">www.mitech.xperts.com</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                    <h6 className="footer-widget__title mb-20">IT Services</h6>
                    <ul className="footer-widget__list">
                      <li><a href="#" className="hover-style-link">Managed IT</a></li>
                      <li><a href="#" className="hover-style-link">IT Support</a></li>
                      <li><a href="#" className="hover-style-link">IT Consultancy</a></li>
                      <li><a href="#" className="hover-style-link">Cloud Computing</a></li>
                      <li><a href="#" className="hover-style-link">Cyber Security</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                    <h6 className="footer-widget__title mb-20">Quick links</h6>
                    <ul className="footer-widget__list">
                      <li><a href="#" className="hover-style-link">Pick up locations</a></li>
                      <li><a href="#" className="hover-style-link">Terms of Payment</a></li>
                      <li><a href="#" className="hover-style-link">Privacy Policy</a></li>
                      <li><a href="#" className="hover-style-link">Where to Find Us</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                    <h6 className="footer-widget__title mb-20">Support</h6>
                    <ul className="footer-widget__list">
                      <li><a href="#" className="hover-style-link">Forum Support</a></li>
                      <li><a href="#" className="hover-style-link">Help &amp; FAQ</a></li>
                      <li><a href="#" className="hover-style-link">Contact Us</a></li>
                      <li><a href="#" className="hover-style-link">Pricing and plans</a></li>
                      <li><a href="#" className="hover-style-link">Cookies Policy</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                    <div className="footer-widget__title section-space--mb_50" />
                    <ul className="footer-widget__list">
                      <li><a href="#" className="image_btn" aria-label="Google play Button"><img className="img-fluid" src="images/icons/aeroland-button-google-play.webp" alt="BITS"/></a></li>
                      <li><a href="#" className="image_btn" aria-label="App Store Button"><img className="img-fluid" src="images/icons/aeroland-button-app-store.webp" alt="BITS"/></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright-area section-space--pb_30">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 text-center text-md-start">
                    <span className="copyright-text">© 2023 Mitech. <a href="https://hasthemes.com/">All Rights Reserved.</a></span>
                  </div>
                  <div className="col-md-6 text-center text-md-end">
                    <ul className="list ht-social-networks solid-rounded-icon">
                      <li className="item">
                        <a href="https://twitter.com" target="_blank" aria-label="Twitter" className="social-link hint--bounce hint--top hint--primary">
                          <i className="fab fa-twitter link-icon" />
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary">
                          <i className="fab fa-facebook-f link-icon" />
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="social-link hint--bounce hint--top hint--primary">
                          <i className="fab fa-instagram link-icon" />
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://linkedin.com" target="_blank" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary">
                          <i className="fab fa-linkedin link-icon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====================  End of footer area  ====================*/}
        </div>
        {/*====================  Main End ====================*/}

        {/*====================  scroll top ====================*/}
        <a href="#" className="scroll-top" id="scroll-top">
          <i className="arrow-top fas fa-chevron-up" />
          <i className="arrow-bottom fas fa-chevron-up" />
        </a>
        {/*====================  End of scroll top  ====================*/}
      </div >

    </>
  )
}
