import React from 'react'
import { Link } from "react-router-dom";

// components
import Header from '../shared/header.jsx';
import Footer from "../shared/footer.jsx";

export default function Industries() {
  return (
    <>
      <div>
        {/*====================  Header Start ====================*/}
        <Header />
        {/*====================  Header End ====================*/}

        {/*====================  Main Start ====================*/}
        <div>
          {/* breadcrumb-area start */}
          <div className="breadcrumb-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title">Industries IT Services</h2>
                    {/* breadcrumb-list start */}
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                      <li className="breadcrumb-item active">IT Services</li>
                    </ul>
                    {/* breadcrumb-list end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* breadcrumb-area end */}
          <div id="main-wrapper">
            <div className="site-wrapper-reveal">
              {/*===========  feature-icon-wrapper  Start =============*/}
              <div className="feature-icon-wrapper section-space--ptb_100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title-wrap text-center section-space--mb_40">
                        <h3 className="heading">Preparing for your success, <br /> we provide <span className="text-color-primary"> truly prominent IT solutions.</span></h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="feature-list__one">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-icon style-01 single-svg-icon-box">
                              <div className="icon-box-wrap">
                                <div className="icon">
                                  {/*<img src="images/svg/linea-basic-heart.svg" alt="">*/}
                                  <div className="svg-icon" id="svg-icon-1" data-svg-icon="images/svg/linea-basic-heart.svg" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">IT Design </h5>
                                  <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.
                                  </div>
                                  <div className="feature-btn">
                                    <a href="#">
                                      <span className="button-text">Discover now</span>
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-3 col-md-6">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-icon style-01 single-svg-icon-box">
                              <div className="icon-box-wrap">
                                <div className="icon">
                                  <div className="svg-icon" id="svg-icon-2" data-svg-icon="images/svg/linea-basic-case.svg" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">IT Management</h5>
                                  <div className="text">It’s possible to simultaneously manage and transform information from one server to another.
                                  </div>
                                  <div className="feature-btn">
                                    <a href="#">
                                      <span className="button-text">Discover now</span>
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-3 col-md-6">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-icon style-01 single-svg-icon-box">
                              <div className="icon-box-wrap">
                                <div className="icon">
                                  <div className="svg-icon" id="svg-icon-3" data-svg-icon="images/svg/linea-basic-alarm.svg" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">Data Security</h5>
                                  <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.
                                  </div>
                                  <div className="feature-btn">
                                    <a href="#">
                                      <span className="button-text">Discover now</span>
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-3 col-md-6">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-icon style-01 single-svg-icon-box">
                              <div className="icon-box-wrap">
                                <div className="icon">
                                  <div className="svg-icon" id="svg-icon-4" data-svg-icon="images/svg/linea-basic-geolocalize-05.svg" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">Business Reform</h5>
                                  <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.
                                  </div>
                                  <div className="feature-btn">
                                    <a href="#">
                                      <span className="button-text">Discover now</span>
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-3 col-md-6">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-icon style-01 single-svg-icon-box">
                              <div className="icon-box-wrap">
                                <div className="icon">
                                  <div className="svg-icon" id="svg-icon-5" data-svg-icon="images/svg/linea-ecommerce-money.svg" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">Infrastructure Plan</h5>
                                  <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.
                                  </div>
                                  <div className="feature-btn">
                                    <a href="#">
                                      <span className="button-text">Discover now</span>
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-3 col-md-6">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-icon style-01 single-svg-icon-box">
                              <div className="icon-box-wrap">
                                <div className="icon">
                                  <div className="svg-icon" id="svg-icon-6" data-svg-icon="images/svg/linea-basic-spread-text-bookmark.svg" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">Firewall Advance</h5>
                                  <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.
                                  </div>
                                  <div className="feature-btn">
                                    <a href="#">
                                      <span className="button-text">Discover now</span>
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-3 col-md-6">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-icon style-01 single-svg-icon-box">
                              <div className="icon-box-wrap">
                                <div className="icon">
                                  <div className="svg-icon" id="svg-icon-7" data-svg-icon="images/svg/linea-music-headphones.svg" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">Desktop Computing</h5>
                                  <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.
                                  </div>
                                  <div className="feature-btn">
                                    <a href="#">
                                      <span className="button-text">Discover now</span>
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-3 col-md-6">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-icon style-01 single-svg-icon-box">
                              <div className="icon-box-wrap">
                                <div className="icon">
                                  <div className="svg-icon" id="svg-icon-8" data-svg-icon="images/svg/linea-basic-gear.svg" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">Software Engineering</h5>
                                  <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.
                                  </div>
                                  <div className="feature-btn">
                                    <a href="#">
                                      <span className="button-text">Discover now</span>
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-12">
                            <div className="section-under-heading text-center section-space--mt_60">Can’t find your industry? <a href="#"> Contact us now!</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===========  feature-icon-wrapper  End =============*/}
              {/*============ Contact Us Area Start =================*/}
              <div className="contact-us-area infotechno-contact-us-bg section-space--pt_100">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="image">
                        <img className="img-fluid" src="images/banners/home-cybersecurity-contact-bg-image.webp" alt="BITS"/>
                      </div>
                    </div>
                    <div className="col-lg-4 ms-auto">
                      <div className="contact-info style-two text-left">
                        <div className="contact-info-title-wrap text-center">
                          <h3 className="heading  mb-10">4.9/5.0</h3>
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
                  </div>
                </div>
              </div>
              {/*============ Contact Us Area End =================*/}
            </div>
            {/*====================  Footer Start ====================*/}
            <Footer />
            {/*====================  Footer End ====================*/}
          </div>
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
