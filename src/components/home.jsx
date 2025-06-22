import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "./shared/header.jsx";
import Footer from "./shared/footer.jsx";

export default function Home() {
  return (
    <>
      <div>
        {/*====================  Header Start ====================*/}
        <Header />
        {/*====================  Header End ====================*/}

        {/*====================  Main Start ====================*/}
        <div id="main-wrapper">
          <div className="site-wrapper-reveal">
            {/*============ Software Innovation Hero Start ============*/}
            <div className="software-innovation-hero-wrapper section-space--pt_80">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="software-innovation-hero-wrap wow move-up">
                      <div className="software-innovation-hero-text">
                        <p className="sub-heading">Find your solution</p>
                        <h3>Best choice for your</h3>
                        <h1 className="font-weight--reguler mb-30">Startup. </h1>
                        <h6 className="info-heading">
                          The full set of services around <br /> development and maintenance <br /> of complex business-critical applications.
                        </h6>
                        <div className="hero-button  mt-30">
                          <a href="#" className="ht-btn ht-btn-md">
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="software-innovation-hero-image animation_images three mt-30">
                      <img src="images/hero/soft-01.webp" className="img-fluid" alt="BITS" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*============ Software Innovation Hero End ============*/}

            {/*===========  Projects wrapper Start =============*/}
            <div className="projects-wrapper section-space--ptb_100">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="projects-wrap">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          {/* Projects Wrap Start */}
                          <a href="#" className="projects-wrap style-04 wow move-up">
                            <div className="projects-image-box">
                              <div className="projects-image">
                                <div className="image">
                                  <img className="img-fluid" src="images/icons/soft-s1-01-120x120.webp" alt="BITS" />
                                </div>
                              </div>
                              <div className="content text-center">
                                <h5 className="heading">Business &amp; Finance</h5>
                                <div className="text">Lorem dolor sit amet, consectetur elit. Suspeo sitea. spe ndisse suscipit sagittis leo sitea rem ipsum dolor sit</div>
                                <div className="box-projects-arrow">
                                  <span className="button-text">Discover now</span>
                                  <i className="fas fa-arrow-right ml-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* Projects Wrap End */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                          {/* Projects Wrap Start */}
                          <a href="#" className="projects-wrap style-04 wow move-up">
                            <div className="projects-image-box">
                              <div className="projects-image">
                                <div className="image">
                                  <img className="img-fluid" src="images/icons/soft-s1-02-120x120.webp" alt="BITS" />
                                </div>
                              </div>
                              <div className="content text-center">
                                <h5 className="heading">Gaming &amp; Enterteinment</h5>
                                <div className="text">Lorem dolor sit amet, consectetur elit. Suspeo sitea. spe ndisse suscipit sagittis leo sitea rem ipsum dolor sit</div>
                                <div className="box-projects-arrow">
                                  <span className="button-text">Discover now</span>
                                  <i className="fas fa-arrow-right ml-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* Projects Wrap End */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                          {/* Projects Wrap Start */}
                          <a href="#" className="projects-wrap style-04 wow move-up">
                            <div className="projects-image-box">
                              <div className="projects-image">
                                <div className="image">
                                  <img className="img-fluid" src="images/icons/soft-s1-03-120x120.webp" alt="BITS" />
                                </div>
                              </div>
                              <div className="content text-center">
                                <h5 className="heading">Information Technology</h5>
                                <div className="text">Lorem dolor sit amet, consectetur elit. Suspeo sitea. spe ndisse suscipit sagittis leo sitea rem ipsum dolor sit</div>
                                <div className="box-projects-arrow">
                                  <span className="button-text">Discover now</span>
                                  <i className="fas fa-arrow-right ml-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* Projects Wrap End */}
                        </div>
                      </div>
                    </div>
                    <div className="section-under-heading text-center section-space--mt_40">
                      Stop wasting time and money on technology. <a href="#">Let’s get started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===========  Projects wrapper End =============*/}

            {/*=========== About Company Area Start ==========*/}
            <div className="software-innovation-about-company-area software-innovation-about-bg section-space--ptb_120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="image-inner-video-section">
                      <img className="img-fluid border-radus-5" src="images/banners/soft-s2-01.webp" alt="BITS" />
                    </div>
                  </div>
                  <div className="col-lg-6 ms-auto mt-30">
                    <div className="machine-learning-about-content">
                      <div className="section-title mb-20">
                        {/* section-title-wrap Start */}
                        <div className="section-title-wrap text-left section-space--mb_30">
                          <h6 className="section-sub-title mb-20">INDUSTRIES WE SERVE</h6>
                          <h3 className="heading">
                            For your very specific industry, we <span className="text-color-primary">have highly-tailored IT solutions.</span>
                          </h3>
                        </div>
                        {/* section-title-wrap Start */}
                        <p className="dec-text mt-20">
                          Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value
                          through custom software development, product design, QA and consultancy services.
                        </p>
                        <div className="button-box mt-5">
                          <div className="hero-button">
                            <div className="video-popup software-innovation-video-box">
                              <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="single-popup-wrap video-link">
                                <div className="video-content">
                                  <div className="ht-popup-video video-button">
                                    <div className="video-button__two">
                                      <div className="video-play">
                                        <span className="video-play-icon" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="video-text">How we work</div>
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
            </div>
            {/*=========== About Company Area End ==========*/}

            {/*===========  feature-icon-wrapper  Start =============*/}
            <div className="feature-icon-wrapper section-space--ptb_100">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-8">
                    <div className="section-title-wrap text-left section-space--mb_40">
                      <h6 className="section-sub-title mb-20">INDUSTRIES WE SERVE </h6>
                      <h3 className="heading">
                        For your very specific industry, <br />
                        we have <span className="text-color-primary"> highly-tailored IT solutions.</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="button--box text-left text-md-end">
                      <a href="#" className="ht-btn ht-btn-md">
                        Talk to a consultant
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="feature-list__two">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                          {/* ht-box-icon Start */}
                          <div className="ht-box-images style-10">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <img className="img-fulid" src="images/icons/soft-s3-01.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h5 className="heading"> Design and Development</h5>
                                <div className="box-images-arrow">
                                  <Link to="/solutions-AI-ML">
                                    <span className="button-text">Discover now</span>
                                    <i className="fas fa-arrow-right" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ht-box-icon End */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                          {/* ht-box-icon Start */}
                          <div className="ht-box-images style-10">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <img className="img-fulid" src="images/icons/soft-s3-02.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h5 className="heading">Reconciliation Platforms</h5>
                                <div className="box-images-arrow">
                                  <Link to="/solutions-reconciliation-platforms">
                                    <span className="button-text">Discover now</span>
                                    <i className="fas fa-arrow-right" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ht-box-icon End */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                          {/* ht-box-icon Start */}
                          <div className="ht-box-images style-10">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <img className="img-fulid" src="images/icons/soft-s3-03.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h5 className="heading">AI ML Solutions</h5>
                                <div className="box-images-arrow">
                                  <Link to="/solutions-AI-ML">
                                    <span className="button-text">Discover now</span>
                                    <i className="fas fa-arrow-right" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ht-box-icon End */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                          {/* ht-box-icon Start */}
                          <div className="ht-box-images style-10">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <img className="img-fulid" src="images/icons/soft-s3-04.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h5 className="heading">Analytics & BI</h5>
                                <div className="box-images-arrow">
                                  <Link to="/solutions-analytics-BI">
                                    <span className="button-text">Discover now</span>
                                    <i className="fas fa-arrow-right" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ht-box-icon End */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                          {/* ht-box-icon Start */}
                          <div className="ht-box-images style-10">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <img className="img-fulid" src="images/icons/soft-s3-05.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h5 className="heading">Data Quality & Governance</h5>
                                <div className="box-images-arrow">
                                  <Link to="/solutions-data-quality-and-governance">
                                    <span className="button-text">Discover now</span>
                                    <i className="fas fa-arrow-right" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ht-box-icon End */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                          {/* ht-box-icon Start */}
                          <div className="ht-box-images style-10">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <img className="img-fulid" src="images/icons/soft-s3-06.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h5 className="heading">Cloud Solutions</h5>
                                <div className="box-images-arrow">
                                  <Link to="/solutions-cloud">
                                    <span className="button-text">Discover now</span>
                                    <i className="fas fa-arrow-right" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ht-box-icon End */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                          {/* ht-box-icon Start */}
                          <div className="ht-box-images style-10">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <img className="img-fulid" src="images/icons/soft-s3-07.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h5 className="heading">Financial Technology Services</h5>
                                <div className="box-images-arrow">
                                  <Link to="/solutions-financial-technology">
                                    <span className="button-text">Discover now</span>
                                    <i className="fas fa-arrow-right" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ht-box-icon End */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                          {/* ht-box-icon Start */}
                          <div className="ht-box-images style-10">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <img className="img-fulid" src="images/icons/soft-s3-08.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h5 className="heading">Regulatory & Compliance Services</h5>
                                <div className="box-images-arrow">
                                  <Link to="/solutions-regulatory-and-compliance">
                                    <span className="button-text">Discover now</span>
                                    <i className="fas fa-arrow-right" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ht-box-icon End */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===========  feature-icon-wrapper  End =============*/}

            {/*=========== fun fact Wrapper Start ==========*/}
            <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-6 wow move-up">
                    <div className="fun-fact--two text-center">
                      <div className="fun-fact__count counter">120</div>
                      <h6 className="fun-fact__text">Happy clients</h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow move-up">
                    <div className="fun-fact--two text-center">
                      <div className="fun-fact__count counter">32</div>
                      <h6 className="fun-fact__text">Finished projects</h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow move-up">
                    <div className="fun-fact--two text-center">
                      <div className="fun-fact__count counter">73</div>
                      <h6 className="fun-fact__text">Skilled Experts</h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow move-up">
                    <div className="fun-fact--two text-center">
                      <div className="fun-fact__count counter">318</div>
                      <h6 className="fun-fact__text">Media Posts</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=========== fun fact Wrapper End ==========*/}

            {/*===========  Projects wrapper Start =============*/}
            <div className="projects-wrapper projectinfotechno-bg section-space--ptb_100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* section-title-wrap Start */}
                    <div className="section-title-wrap text-center section-space--mb_40">
                      <h6 className="section-sub-title mb-20">Case studies</h6>
                      <h3 className="heading">
                        Proud projects <span className="text-color-primary"> make us excel</span>
                      </h3>
                    </div>
                    {/* section-title-wrap Start */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="projects-wrap swiper-container projects-slider__container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          {/* Projects Wrap Start */}
                          <a href="#" className="projects-wrap style-01 wow move-up">
                            <div className="projects-image-box">
                              <div className="projects-image">
                                <img className="img-fluid" src="images/projects/case-study-01-480x298.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h6 className="heading">BITS-Smart Vision</h6>
                                <div className="post-categories">Cyber Security</div>
                                <div className="text">At BITS, we have a holistic and integrated approach towards core modernization to experience technological evolution.</div>
                                <div className="box-projects-arrow">
                                  <span className="button-text">View case study</span>
                                  <i className="fas fa-arrow-right ml-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* Projects Wrap End */}
                        </div>
                        <div className="swiper-slide">
                          {/* Projects Wrap Start */}
                          <a href="#" className="projects-wrap style-01 wow move-up">
                            <div className="projects-image-box">
                              <div className="projects-image">
                                <img className="img-fluid" src="images/projects/case-study-02-480x298.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h6 className="heading">Arden-Internal Networking</h6>
                                <div className="post-categories">Cyber Security</div>
                                <div className="text">The prospects for a company operating in this new market are varied and exciting. The potential …</div>
                                <div className="box-projects-arrow">
                                  <span className="button-text">View case study</span>
                                  <i className="fas fa-arrow-right ml-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* Projects Wrap End */}
                        </div>
                        <div className="swiper-slide">
                          {/* Projects Wrap Start */}
                          <a href="#" className="projects-wrap style-01 wow move-up">
                            <div className="projects-image-box">
                              <div className="projects-image">
                                <img className="img-fluid" src="images/projects/case-study-03-480x298.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h6 className="heading">A Freeserve case study</h6>
                                <div className="post-categories">Cyber Security</div>
                                <div className="text">The prospects for a company operating in this new market are varied and exciting. The potential …</div>
                                <div className="box-projects-arrow">
                                  <span className="button-text">View case study</span>
                                  <i className="fas fa-arrow-right ml-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* Projects Wrap End */}
                        </div>
                        <div className="swiper-slide">
                          {/* Projects Wrap Start */}
                          <a href="#" className="projects-wrap style-01 wow move-up">
                            <div className="projects-image-box">
                              <div className="projects-image">
                                <img className="img-fluid" src="images/projects/case-study-04-480x298.webp" alt="BITS" />
                              </div>
                              <div className="content">
                                <h6 className="heading">Aqua – Research and Energy</h6>
                                <div className="post-categories">Cyber Security</div>
                                <div className="text">The prospects for a company operating in this new market are varied and exciting. The potential …</div>
                                <div className="box-projects-arrow">
                                  <span className="button-text">View case study</span>
                                  <i className="fas fa-arrow-right ml-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* Projects Wrap End */}
                        </div>
                      </div>
                      <div className="swiper-pagination swiper-pagination-project mt_20" />
                    </div>
                    <div className="section-under-heading text-center section-space--mt_40">
                      Challenges are just opportunities in disguise. <a href="#">Take the challenge!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===========  Projects wrapper End =============*/}

            {/*===========  Our Technologies Start =============*/}
            <div className="technology-service-area technology-service-bg">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="section-title section-space--pt_60">
                      <p className="text-white font-weight--bold">OUR TECHNOLOGY</p>
                      <h3 className="text-white">
                        <span className="text-color-secondary">BITS</span> – Top Software Development Technology
                      </h3>
                      <p className="text-infos text-white mt-30">
                        Our strong passion to modern tech trends and best practices drive in the development of top-notch solutions that are perfectly tailored to provide high
                        quality and affordable software outsourcing solutions to growing startup and enterprise companies in the world.
                      </p>
                      <div className="single-button-group">
                        <div className="button-group-wrap mt-30">
                          <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                            ASP. NET Core
                          </a>
                          <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                            REACT JS
                          </a>
                          <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                            ANGULAR
                          </a>
                          <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                            PHP
                          </a>
                          <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                            JAVA
                          </a>
                          <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                            PYTHON
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="banner-image section-space--pt_60">
                      <img src="images/tech/tech_1.jpg" className="img-fluid" alt="BITS" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===========  Our Technologies End =============*/}

            {/*====================  Blog and News Start ====================*/}
            <div className="blog-section-wrapper section-space--pt_100  section-space--pb_70">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="section-title-wrap text-center section-space--mb_40">
                      <h6 className="section-sub-title mb-20">BLOG &amp; NEWS</h6>
                      <h3 className="heading">
                        Latest news are <span className="text-color-primary"> on top all times</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 wow move-up animated">
                    {/*======= Single Blog Item Start ========*/}
                    <div className="single-blog-item blog-grid">
                      {/* Post Feature Start */}
                      <div className="post-feature blog-thumbnail">
                        <a href="blog-post-layout-one.html">
                          <img className="img-fluid" src="images/blog/blog-01-370x230.webp" alt="Blog Images" />
                        </a>
                      </div>
                      {/* Post Feature End */}
                      {/* Post info Start */}
                      <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                          <div className="post-date">
                            <span className="far fa-calendar meta-icon" />
                            February 28, 2019
                          </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                          <a href="#">5 Ways Technology Has Improved Business Today</a>
                        </h5>
                        <div className="post-excerpt mt-15">
                          <p>They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. …</p>
                        </div>
                        <div className="btn-text">
                          <a href="#">
                            Read more <i className="ml-1 button-icon fas fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                      {/* Post info End */}
                    </div>
                    {/*===== Single Blog Item End =========*/}
                  </div>
                  <div className="col-lg-4 col-md-6 wow move-up animated">
                    {/*======= Single Blog Item Start ========*/}
                    <div className="single-blog-item blog-grid">
                      {/* Post Feature Start */}
                      <div className="post-feature blog-thumbnail">
                        <a href="blog-post-layout-one.html">
                          <img className="img-fluid" src="images/blog/blog-02-370x230.webp" alt="Blog Images" />
                        </a>
                      </div>
                      {/* Post Feature End */}
                      {/* Post info Start */}
                      <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                          <div className="post-date">
                            <span className="far fa-calendar meta-icon" />
                            February 28, 2019
                          </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                          <a href="#">5 Ways Technology Has Improved Business Today</a>
                        </h5>
                        <div className="post-excerpt mt-15">
                          <p>They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. …</p>
                        </div>
                        <div className="btn-text">
                          <a href="#">
                            Read more <i className="ml-1 button-icon fas fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                      {/* Post info End */}
                    </div>
                    {/*===== Single Blog Item End =========*/}
                  </div>
                  <div className="col-lg-4 col-md-6 wow move-up animated">
                    {/*======= Single Blog Item Start ========*/}
                    <div className="single-blog-item blog-grid">
                      {/* Post Feature Start */}
                      <div className="post-feature blog-thumbnail">
                        <a href="blog-post-layout-one.html">
                          <img className="img-fluid" src="images/blog/blog-03-370x230.webp" alt="Blog Images" />
                        </a>
                      </div>
                      {/* Post Feature End */}
                      {/* Post info Start */}
                      <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                          <div className="post-date">
                            <span className="far fa-calendar meta-icon" />
                            February 28, 2019
                          </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                          <a href="#">How Wireless Technology is Changing Business</a>
                        </h5>
                        <div className="post-excerpt mt-15">
                          <p>It is far wiser to do your own installations and ensure that all data flowing through the organization has end-to-end encryption. …</p>
                        </div>
                        <div className="btn-text">
                          <a href="#">
                            Read more <i className="ml-1 button-icon fas fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                      {/* Post info End */}
                    </div>
                    {/*===== Single Blog Item End =========*/}
                  </div>
                </div>
              </div>
            </div>
            {/*====================  Blog and News End ====================*/}
          </div>
        </div>
        {/*====================  Main End ====================*/}

        {/*====================  Footer Start ====================*/}
        <Footer />
        {/*====================  Footer End ====================*/}
      </div>
    </>
  );
}
