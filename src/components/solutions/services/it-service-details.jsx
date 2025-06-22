import React from 'react'
import { Link } from "react-router-dom";

// components
import Header from '../../shared/header.jsx';
import Footer from "../../shared/footer.jsx";

export default function ItServiceDetails() {
  return (
    <>
      <div>
        {/*====================  Header Start ====================*/}
        <Header />
        {/*====================  Header End ====================*/}

        {/*====================  Main Start ====================*/}
        <div id="main-wrapper">
          <div className="site-wrapper-reveal">
            <div className="about-banner-wrap banner-space bg-img" data-bg="images/bg/managed-it-services-hero-bg.webp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 m-auto">
                    <div className="about-banner-content text-center">
                      <h1 className="mb-15 text-white">Services Details</h1>
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
                      <div className="modern-number-01">
                        <h3 className="heading mt-30">Learn More About Our <span className="text-color-primary"> Success <br /> Stories</span></h3>
                      </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                      <div className="conact-us-wrap-one managed-it">
                        <h5 className="heading ">BITS specializes in <span className="text-color-primary"> technological and IT-related services</span> such as product engineering, warranty management, building cloud, infrastructure, network, etc. </h5>
                        <div className="sub-heading">We’re available for 8 hours a day!<br />Contact to require a detailed analysis and assessment of your plan.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===========  feature-large-images-wrapper  End =============*/}
            <div className="accordion-wrapper section-space--pb_100">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-6 pe-5">
                    <div className="faq-two-wrapper section-space--mt_40">
                      <div id="accordion_two">
                        <div className="card">
                          <div className="card-header" id="heading__10">
                            <h5 className="mb-0 font-weight--bold">
                              <button className="btn-link" data-bs-toggle="collapse" data-bs-target="#tab__10" aria-expanded="true" aria-controls="tab__10">
                                New multiple site connectivity <span>
                                  <i className="fas fa-chevron-circle-down" />
                                  <i className="fas fa-chevron-circle-right" /> </span>
                              </button>
                            </h5>
                          </div>
                          <div id="tab__10" className="show" aria-labelledby="heading__10" data-bs-parent="#accordion_two">
                            <div className="card-body">
                              <p>We use a newly developed technology to connect sites that are based on different types of servers and networks, SiteConnect, which helps to reduce the misinterpretation of signals as well as the loss of data during transfering. </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="heading__11">
                            <h5 className="mb-0">
                              <button className="btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse__11" aria-expanded="false" aria-controls="collapse__11">
                                IT Security &amp; Software<span>
                                  <i className="fas fa-chevron-circle-down" />
                                  <i className="fas fa-chevron-circle-right" /></span>
                              </button>
                            </h5>
                          </div>
                          <div id="collapse__11" className="collapse" aria-labelledby="heading__11" data-bs-parent="#accordion_two">
                            <div className="card-body">
                              <p>To keep your systems, your devices, and network stay secure, we have developed a new program that limits the access of suspicious objects or people and authenticate all logins to the system. </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="heading__12">
                            <h5 className="mb-0">
                              <button className="btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse__12" aria-expanded="false" aria-controls="collapse__12">
                                Weak hosted capability<span><i className="fas fa-chevron-circle-down" />
                                  <i className="fas fa-chevron-circle-right" /> </span>
                              </button>
                            </h5>
                          </div>
                          <div id="collapse__12" className="collapse" aria-labelledby="heading__12" data-bs-parent="#accordion_two">
                            <div className="card-body">
                              <p>Some hosts are unaware of the potential risks as well as security loopholes in their system. By detecting these errors and taking prompt actions on improving firewalls, we can upgrade the system security. </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="heading__13">
                            <h5 className="mb-0">
                              <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapse__13" aria-expanded="false" aria-controls="collapse__13">
                                Build internal network <span><i className="fas fa-chevron-circle-down" />
                                  <i className="fas fa-chevron-circle-right" /></span>
                              </button>
                            </h5>
                          </div>
                          <div id="collapse__13" className="collapse" aria-labelledby="heading__13" data-bs-parent="#accordion_two">
                            <div className="card-body">
                              <p>The internal network is essential for all companies and corporations, especially for those working in IT sector. To avoid possible risks when sharing internal confidential files and documentation to an external receiver, internal network must be strong. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/* Start single-popup-wrap */}
                    <div className="video-interview section-space--mt_40 video-popup">
                      <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link mt-30">
                        <div className="single-popup-wrap">
                          <img className="img-fluid border-radus-5" src="images/bg/BITS-home-infotechno-box-large-image-03-540x320.webp" alt="BITS" />
                          <div className="ht-popup-video video-button">
                            <div className="video-mark">
                              <div className="wave-pulse wave-pulse-1" />
                              <div className="wave-pulse wave-pulse-2" />
                            </div>
                            <div className="video-button__two">
                              <div className="video-play">
                                <span className="video-play-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* End single-popup-wrap */}
                  </div>
                </div>
              </div>
            </div>
            {/*===========  feature-icon-wrapper  Start =============*/}
            <div className="feature-icon-wrapper section-space--pb_70">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title-wrap text-center section-space--mb_20">
                      <h3 className="heading">Prominent IT Security Services</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="feature-list__three">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="grid-item animate">
                            <div className="ht-box-icon style-03">
                              <div className="icon-box-wrap">
                                <div className="content-header">
                                  <div className="icon">
                                    <i className="far fa-life-ring" />
                                  </div>
                                  <h5 className="heading">
                                    BITS Management Systems
                                  </h5>
                                </div>
                                <div className="content">
                                  <div className="text">Our service offerings enhance customer experience throughout secure &amp; highly functional end-to-end warranty management.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="grid-item animate">
                            <div className="ht-box-icon style-03">
                              <div className="icon-box-wrap">
                                <div className="content-header">
                                  <div className="icon">
                                    <i className="fas fa-lock" />
                                  </div>
                                  <h5 className="heading">
                                    Reliable Multi-function Technology
                                  </h5>
                                </div>
                                <div className="content">
                                  <div className="text">Develop and propose product improvements through periodical and accurate testing, repairing &amp; refining every version.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="grid-item animate">
                            <div className="ht-box-icon style-03">
                              <div className="icon-box-wrap">
                                <div className="content-header">
                                  <div className="icon">
                                    <i className="fas fa-globe" />
                                  </div>
                                  <h5 className="heading">
                                    Highly Professional Staffs
                                  </h5>
                                </div>
                                <div className="content">
                                  <div className="text">Develop and propose product improvements through periodical and accurate testing, repairing &amp; refining every version.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="grid-item animate">
                            <div className="ht-box-icon style-03">
                              <div className="icon-box-wrap">
                                <div className="content-header">
                                  <div className="icon">
                                    <i className="fas fa-medal" />
                                  </div>
                                  <h5 className="heading">
                                    Infrastructure Integration Technology
                                  </h5>
                                </div>
                                <div className="content">
                                  <div className="text">At BITS, we have a holistic and integrated approach towards core modernization to experience technological evolution.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===========  feature-icon-wrapper  End =============*/}
            {/*========= Pricing Table Area Start ==========*/}
            <div className="pricing-table-area section-space--ptb_100 bg-gray">
              <div className="pricing-table-title-area position-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title-wrapper text-center section-space--mb_40 wow move-up">
                        <h6 className="section-sub-title mb-20">Style 01</h6>
                        <h3 className="section-title">Affordable price plans<span className="text-color-primary"> for you!</span> </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-table-content-area">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center wow move-up">
                      <ul className="nav justify-content-center ht-plans-menu  section-space--mb_60" role="tablist">
                        <li className="tab__item nav-item active">
                          <a className="nav-link active" data-bs-toggle="tab" href="#month-tab" role="tab" aria-selected="true">Per month</a>
                        </li>
                        <li className="tab__item nav-item ">
                          <a className="nav-link" data-bs-toggle="tab" href="#year-tab" role="tab" aria-selected="false">Per year</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-content ht-tab__content wow move-up">
                    <div className="tab-pane fade show active" id="month-tab" role="tabpanel">
                      <div className="row pricing-table-one">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                          <div className="pricing-table__inner">
                            <div className="pricing-table__header">
                              <h6 className="sub-title">Basic</h6>
                              <div className="pricing-table__image">
                                <img src="images/icons/BITS-pricing-box-icon-01-90x90.webp" className="img-fluid" alt="BITS" />
                              </div>
                              <div className="pricing-table__price-wrap">
                                <h6 className="currency">$</h6>
                                <h6 className="price">19</h6>
                                <h6 className="period">/mo</h6>
                              </div>
                            </div>
                            <div className="pricing-table__body">
                              <div className="pricing-table__footer">
                                <a href="#" className="ht-btn ht-btn-md ht-btn--outline">Get started</a>
                              </div>
                              <ul className="pricing-table__list text-left">
                                <li>03 projects</li>
                                <li>Quality &amp; Customer Experience</li>
                                <li><span className="featured">Try for free, forever!</span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular">
                          <div className="pricing-table__inner">
                            <div className="pricing-table__feature-mark">
                              <span>Popular Choice</span>
                            </div>
                            <div className="pricing-table__header">
                              <h6 className="sub-title">Professional</h6>
                              <div className="pricing-table__image">
                                <img src="images/icons/BITS-pricing-box-icon-02-88x88.webp" className="img-fluid" alt="BITS" />
                              </div>
                              <div className="pricing-table__price-wrap">
                                <h6 className="currency">$</h6>
                                <h6 className="price">59</h6>
                                <h6 className="period">/mo</h6>
                              </div>
                            </div>
                            <div className="pricing-table__body">
                              <div className="pricing-table__footer">
                                <a href="#" className="ht-btn  ht-btn-md ">Get started</a>
                              </div>
                              <ul className="pricing-table__list text-left">
                                <li>Unlimited project</li>
                                <li>Power And Predictive Dialing</li>
                                <li>Quality &amp; Customer Experience</li>
                                <li>24/7 phone and email support</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                          <div className="pricing-table__inner">
                            <div className="pricing-table__header">
                              <h6 className="sub-title">Professional</h6>
                              <div className="pricing-table__image">
                                <img src="images/icons/BITS-pricing-box-icon-03-90x90.webp" className="img-fluid" alt="BITS" />
                              </div>
                              <div className="pricing-table__price-wrap">
                                <h6 className="currency">$</h6>
                                <h6 className="price">29</h6>
                                <h6 className="period">/mo</h6>
                              </div>
                            </div>
                            <div className="pricing-table__body">
                              <div className="pricing-table__footer">
                                <a href="#" className="ht-btn ht-btn-md ht-btn--outline">Get started</a>
                              </div>
                              <ul className="pricing-table__list text-left">
                                <li>10 projects</li>
                                <li>Power And Predictive Dialing </li>
                                <li>Quality &amp; Customer Experience </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="year-tab" role="tabpanel">
                      <div className="row pricing-table-one">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                          <div className="pricing-table__inner">
                            <div className="pricing-table__header">
                              <h6 className="sub-title">Basic</h6>
                              <div className="pricing-table__image">
                                <img src="images/icons/BITS-pricing-box-icon-01-90x90.webp" className="img-fluid" alt="BITS" />
                              </div>
                              <div className="pricing-table__price-wrap">
                                <h6 className="currency">$</h6>
                                <h6 className="price">199</h6>
                                <h6 className="period">/mo</h6>
                              </div>
                            </div>
                            <div className="pricing-table__body">
                              <div className="pricing-table__footer">
                                <a href="#" className="ht-btn ht-btn-md ht-btn--outline">Get started</a>
                              </div>
                              <ul className="pricing-table__list text-left">
                                <li>03 projects</li>
                                <li>Quality &amp; Customer Experience</li>
                                <li><span className="featured">Try for free, forever!</span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular">
                          <div className="pricing-table__inner">
                            <div className="pricing-table__feature-mark">
                              <span>Popular Choice</span>
                            </div>
                            <div className="pricing-table__header">
                              <h6 className="sub-title">Professional</h6>
                              <div className="pricing-table__image">
                                <img src="images/icons/BITS-pricing-box-icon-02-88x88.webp" className="img-fluid" alt="BITS" />
                              </div>
                              <div className="pricing-table__price-wrap">
                                <h6 className="currency">$</h6>
                                <h6 className="price">599</h6>
                                <h6 className="period">/mo</h6>
                              </div>
                            </div>
                            <div className="pricing-table__body">
                              <div className="pricing-table__footer">
                                <a href="#" className="ht-btn  ht-btn-md ">Get started</a>
                              </div>
                              <ul className="pricing-table__list text-left">
                                <li>Unlimited project</li>
                                <li>Power And Predictive Dialing</li>
                                <li>Quality &amp; Customer Experience</li>
                                <li>24/7 phone and email support</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                          <div className="pricing-table__inner">
                            <div className="pricing-table__header">
                              <h6 className="sub-title">Professional</h6>
                              <div className="pricing-table__image">
                                <img src="images/icons/BITS-pricing-box-icon-03-90x90.webp" className="img-fluid" alt="BITS" />
                              </div>
                              <div className="pricing-table__price-wrap">
                                <h6 className="currency">$</h6>
                                <h6 className="price">299</h6>
                                <h6 className="period">/mo</h6>
                              </div>
                            </div>
                            <div className="pricing-table__body">
                              <div className="pricing-table__footer">
                                <a href="#" className="ht-btn ht-btn-md ht-btn--outline">Get started</a>
                              </div>
                              <ul className="pricing-table__list text-left">
                                <li>10 projects</li>
                                <li>Power And Predictive Dialing </li>
                                <li>Quality &amp; Customer Experience </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*========= Pricing Table Area End ==========*/}
            {/*========== Call to Action Area Start ============*/}
            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-8 col-lg-7">
                    <div className="cta-content md-text-center">
                      <h3 className="heading text-white">We run all kinds of IT services that vow your <span className="text-color-secondary"> success</span></h3>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5">
                    <div className="cta-button-group--one text-center">
                      <a href="#" className="btn btn--white btn-one"><span className="btn-icon me-2"><i className="far fa-comment-alt" /></span> Let's talk</a>
                      <a href="#" className="btn btn--secondary  btn-two"><span className="btn-icon me-2"><i className="fas fa-info-circle" /></span> Get info</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*========== Call to Action Area End ============*/}
          </div>
          {/*====================  footer area ====================*/}
          <div className="footer-area-wrapper bg-gray">
            <div className="footer-area section-space--ptb_80">
              <div className="container">
                <div className="row footer-widget-wrapper">
                  <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                    <div className="footer-widget__logo mb-30">
                      <img src="images/logo/dark-logo-160x48.webp" width={160} height={48} className="img-fluid" alt="BITS" />
                    </div>
                    <ul className="footer-widget__list">
                      <li>58 Howard Street #2 San Francisco, CA 941</li>
                      <li><a href="mailto:contact@aeroland.com" className="hover-style-link">contact@aeroland.com</a></li>
                      <li><a href="tel:123344556" className="hover-style-link text-black font-weight--bold">(+68)1221 09876</a></li>
                      <li><a href="https://hasthemes.com/" className="hover-style-link text-color-primary">www.BITS.xperts.com</a></li>
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
                      <li><a href="#" className="image_btn" aria-label="Google play Button"><img className="img-fluid" src="images/icons/aeroland-button-google-play.webp" alt="BITS" /></a></li>
                      <li><a href="#" className="image_btn" aria-label="App Store Button"><img className="img-fluid" src="images/icons/aeroland-button-app-store.webp" alt="BITS" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright-area section-space--pb_30">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 text-center text-md-start">
                    <span className="copyright-text">© 2023 BITS. <a href="https://hasthemes.com/">All Rights Reserved.</a></span>
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

        {/*====================  Footer Start ====================*/}
        <Footer />
        {/*====================  Footer End ====================*/}
      </div >

    </>
  )
}
