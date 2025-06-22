import React from 'react'
import { Link } from "react-router-dom";

// components
import Header from '../../shared/header.jsx';
import Footer from "../../shared/footer.jsx";

export default function ItServices() {
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
                    <h2 className="breadcrumb-title">IT Services</h2>
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
              {/*===========  feature-images-wrapper  Start =============*/}
              <div className="feature-images-wrapper section-space--ptb_100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* section-title-wrap Start */}
                      <div className="section-title-wrap text-center">
                        <h3 className="heading">Preparing for your success, <br /> we provide <span className="text-color-primary">  truly prominent IT solutions.</span></h3>
                      </div>
                      {/* section-title-wrap Start */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="feature-images__one">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 wow move-up">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-images style-01">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-01-image-01-100x108.webp" alt="BITS" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">IT Design </h5>
                                  <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.
                                  </div>
                                  <div className="circle-arrow">
                                    <div className="middle-dot" />
                                    <div className="middle-dot dot-2" />
                                    <a href="#">
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-4 col-md-6 wow move-up">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-images style-01">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-01-image-02-100x108.webp" alt="BITS" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">IT Management</h5>
                                  <div className="text">It’s possible to simultaneously manage and transform information from one server to another.
                                  </div>
                                  <div className="circle-arrow">
                                    <div className="middle-dot" />
                                    <div className="middle-dot dot-2" />
                                    <a href="#">
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-4 col-md-6 wow move-up">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-images style-01">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-01-image-03-100x108.webp" alt="BITS" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">Data Security</h5>
                                  <div className="text">Back up your database, store in a safe and secure place while still maintaining its accessibility.
                                  </div>
                                  <div className="circle-arrow">
                                    <div className="middle-dot" />
                                    <div className="middle-dot dot-2" />
                                    <a href="#">
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-4 col-md-6 wow move-up">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-images style-01">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-01-image-04-100x108.webp" alt="BITS" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">Business Reform</h5>
                                  <div className="text">We propose feasible &amp; practical plans for successfully transform businesses based on their needs.
                                  </div>
                                  <div className="circle-arrow">
                                    <div className="middle-dot" />
                                    <div className="middle-dot dot-2" />
                                    <a href="#">
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-4 col-md-6 wow move-up">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-images style-01">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-01-image-05-100x108.webp" alt="BITS" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">Infrastructure Plan</h5>
                                  <div className="text">Mitech takes into account all conditions and budgets needed for building infrastructure plan.
                                  </div>
                                  <div className="circle-arrow">
                                    <div className="middle-dot" />
                                    <div className="middle-dot dot-2" />
                                    <a href="#">
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                          <div className="col-lg-4 col-md-6 wow move-up">
                            {/* ht-box-icon Start */}
                            <div className="ht-box-images style-01">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img className="img-fulid" src="images/icons/mitech-box-image-style-01-image-06-100x108.webp" alt="BITS" />
                                </div>
                                <div className="content">
                                  <h5 className="heading">Firewall Advancement</h5>
                                  <div className="text">Enhancing the strength and security of firewalls to protect online data from malicious sources.
                                  </div>
                                  <div className="circle-arrow">
                                    <div className="middle-dot" />
                                    <div className="middle-dot dot-2" />
                                    <a href="#">
                                      <i className="fas fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ht-box-icon End */}
                          </div>
                        </div>
                      </div>
                      <div className="section-under-heading text-center section-space--mt_80">Challenges are just opportunities in disguise. <a href="#">Take the challenge!</a></div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===========  feature-images-wrapper  End =============*/}
              {/*============ Contact Us Area Start =================*/}
              <div className="contact-us-area infotechno-contact-us-bg section-space--pt_100">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="image">
                        <img className="img-fluid" src="images/banners/home-cybersecurity-contact-bg-image.webp" alt="BITS" />
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
          </div>
        </div>
        {/*====================  Main End ====================*/}

        {/*====================  Footer Start ====================*/}
        <Footer />
        {/*====================  Footer End ====================*/}
      </div >

    </>
  )
}
