import React from 'react'
import { Link } from 'react-router-dom';

// components
import Header from '../shared/header.jsx';
import Footer from "../shared/footer.jsx";

export default function CaseStudies() {
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
                    <h2 className="breadcrumb-title">Case Studies 02</h2>
                    {/* breadcrumb-list start */}
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                      <li className="breadcrumb-item active">Case Studies 02</li>
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
              {/*===========  Projects wrapper Start =============*/}
              <div className="projects-wrapper section-space--pb_70 section-space--pt_100 projects-masonary-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title-wrap text-center section-space--mb_40">
                        <h3 className="heading">Our projects<span className="text-color-primary"> make us proud</span></h3>
                      </div>
                      <div className="messonry-button text-center  section-space--mb_60">
                        <button data-filter="*" className="is-checked"><span className="filter-text">All</span><span className="filter-counter">6</span></button>
                        <button data-filter=".cat--1"><span className="filter-text">Cloud Services</span> <span className="filter-counter">1</span></button>
                        <button data-filter=".cat--2"><span className="filter-text">Cyber Security</span> <span className="filter-counter">3</span></button>
                        <button data-filter=".cat--3"><span className="filter-text">IT consultancy</span> <span className="filter-counter">1</span></button>
                        <button data-filter=".cat--4"><span className="filter-text">IT Security</span> <span className="filter-counter">1</span></button>
                      </div>
                    </div>
                  </div>
                  <div className="projects-case-wrap">
                    <div className="row mesonry-list">
                      {/*<div class="resizer"></div>*/}
                      <div className="col-lg-4 col-md-6 cat--2">
                        {/* Projects Wrap Start */}
                        <Link to="/case-study-details" className="projects-wrap style-2">
                          <div className="projects-image-box">
                            <div className="projects-image">
                              <img className="img-fluid" src="images/projects/case-study-01-480x298.webp" alt="BITS" />
                            </div>
                            <div className="content">
                              <div className="post-categories">Cyber Security</div>
                              <h6 className="heading">BITS-Smart Vision</h6>
                            </div>
                          </div>
                        </Link>
                        {/* Projects Wrap End */}
                      </div>
                      <div className="col-lg-4 col-md-6 cat--2 ">
                        {/* Projects Wrap Start */}
                        <Link to="/case-study-details" className="projects-wrap style-2">
                          <div className="projects-image-box">
                            <div className="projects-image">
                              <img className="img-fluid" src="images/projects/case-study-02-480x298.webp" alt="BITS" />
                            </div>
                            <div className="content">
                              <div className="post-categories">Cyber Security</div>
                              <h6 className="heading">Arden-Internal Networking</h6>
                            </div>
                          </div>
                        </Link>
                        {/* Projects Wrap End */}
                      </div>
                      <div className="col-lg-4 col-md-6 cat--2">
                        {/* Projects Wrap Start */}
                        <Link to="/case-study-details" className="projects-wrap style-2">
                          <div className="projects-image-box">
                            <div className="projects-image">
                              <img className="img-fluid" src="images/projects/case-study-03-480x298.webp" alt="BITS" />
                            </div>
                            <div className="content">
                              <div className="post-categories">Cyber Security</div>
                              <h6 className="heading">A Freeserve case study</h6>
                            </div>
                          </div>
                        </Link>
                        {/* Projects Wrap End */}
                      </div>
                      <div className="col-lg-4 col-md-6 cat--1">
                        {/* Projects Wrap Start */}
                        <Link to="/case-study-details" className="projects-wrap style-2">
                          <div className="projects-image-box">
                            <div className="projects-image">
                              <img className="img-fluid" src="images/projects/case-study-04-480x298.webp" alt="BITS" />
                            </div>
                            <div className="content">
                              <div className="post-categories">Cyber Security</div>
                              <h6 className="heading">Aqua – Research and Energy</h6>
                            </div>
                          </div>
                        </Link>
                        {/* Projects Wrap End */}
                      </div>
                      <div className="col-lg-4 col-md-6 cat--3">
                        {/* Projects Wrap Start */}
                        <Link to="/case-study-details" className="projects-wrap style-2">
                          <div className="projects-image-box">
                            <div className="projects-image">
                              <img className="img-fluid" src="images/projects/case-study-05-480x298.webp" alt="BITS" />
                            </div>
                            <div className="content">
                              <div className="post-categories">IT consultancy</div>
                              <h6 className="heading">A Sixbase typical case study</h6>
                            </div>
                          </div>
                        </Link>
                        {/* Projects Wrap End */}
                      </div>
                      <div className="col-lg-4 col-md-6 cat--4">
                        {/* Projects Wrap Start */}
                        <Link to="/case-study-details" className="projects-wrap style-2">
                          <div className="projects-image-box">
                            <div className="projects-image">
                              <img className="img-fluid" src="images/projects/case-study-06-480x298.webp" alt="BITS" />
                            </div>
                            <div className="content">
                              <div className="post-categories">IT Security</div>
                              <h6 className="heading">Healsoul – Technology &amp; Health</h6>
                            </div>
                          </div>
                        </Link>
                        {/* Projects Wrap End */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===========  Projects wrapper End =============*/}
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
            {/*====================  Footer Start ====================*/}
            <Footer />
            {/*====================  Footer End ====================*/}
          </div>
        </div>
        {/*====================  Main End ====================*/}
      </div>

    </>
  )
}
