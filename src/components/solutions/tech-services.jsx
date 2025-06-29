import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "../shared/header.jsx";
import Footer from "../shared/footer.jsx";

export default function TechServices() {
  return (
    <>
      <div>
        {/*====================  Header Start ====================*/}
        <Header />
        {/*====================  Header End ====================*/}

        {/*====================  Main Start ====================*/}
        <div>
          <div id="main-wrapper">
            <div className="site-wrapper-reveal">
              <div className="about-banner-wrap bg-img my-5" data-bg="images/bg/managed-it-services-hero-bg.webp">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 m-auto">
                      <div className="about-banner-content text-center">
                        <img className="img-fluid" src="images/banner/banner_9.jpg" alt="BITS" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*========= About Delivering Wrapper Start ===========*/}
              <div className="about-delivering-wrapper section-space--ptb_100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="text-3xl font-bold mb-6 text-center"> Complete Technology & AI Services </h3>
                      <p className="text-lg text-gray-600 mb-12 text-center">
                        In addition to our AI & ML solutions, we deliver full-cycle development services to support digital transformation across platforms.
                      </p>
                      <br /> <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="delivering-optimal-wrap">
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Web Design & UI/UX (Figma + Frontend)</h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Craft beautiful, intuitive, and conversion-optimized digital experiences.</p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>UX research and wireframing (Figma, Adobe XD)</li>
                                <li>Responsive web UI design and prototyping</li>
                                <li>Frontend development (Angular, React, Vue.js)</li>
                                <li>Design systems and reusable component libraries</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>User-centric designs that boost engagement</li>
                                <li>Pixel-perfect responsive interfaces</li>
                                <li>Faster frontend delivery with reusable assets</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title"> Website Development </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Modern websites that are fast, scalable, and optimized for performance.</p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Corporate, e-commerce, and landing pages</li>
                                <li>CMS development (WordPress, Strapi, Headless CMS)</li>
                                <li>Static and dynamic site development</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Mobile-friendly, fast-loading websites</li>
                                <li>Enhanced visibility with SEO and performance tuning</li>
                                <li>End-to-end web presence for your brand</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title"> API & Microservices Development </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Reliable, scalable backend architectures to power your applications.</p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>RESTful & GraphQL API development</li>
                                <li>Microservices using Node.js, .NET Core, Java</li>
                                <li>API gateway, security, throttling & rate-limiting</li>
                                <li>Cloud-native services (Docker, Kubernetes, AWS Lambda)</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Modular architecture for flexible scaling</li>
                                <li>Secure, documented APIs for internal and external use</li>
                                <li>High-availability backend systems</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                         <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title"> Why Choose Us? </h5>
                            <div className="desc">
                              <ul className="list-disc list-inside mb-3">
                                <li>Full-cycle development (idea to launch)</li>
                                <li>Experienced in enterprise and startup ecosystems</li>
                                <li>Data privacy & security-first mindset</li>
                                <li>Scalable systems designed for growth</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="delivering-optimal-wrap">
                        <div className="list-item mb-3">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Mobile App Development (Android & iOS) </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Build feature-rich, high-performance mobile applications.</p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Native Android (Kotlin) and iOS (Swift) apps</li>
                                <li>Cross-platform apps (Flutter, React Native)</li>
                                <li>API integration and real-time sync</li>
                                <li>App Store/Play Store deployment and support</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Apps aligned with user needs and business goals</li>
                                <li>Smooth UI/UX across devices</li>
                                <li>Scalable mobile solutions for rapid growth</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title"> Custom Software Development </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">End-to-end development of scalable business applications.</p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Enterprise-grade web or desktop applications</li>
                                <li>Workflow automation tools, CRMs, ERPs</li>
                                <li>SaaS product development</li>
                                <li>Legacy system modernization</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Custom-built solutions tailored to your processes</li>
                                <li>Improved productivity and automation</li>
                                <li>Future-ready digital infrastructure</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item mb-3">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Add-on Services: </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Infrastructure, Hosting, and Support to Complete the Ecosystem</p>
                              <h5 className="sub-title">Domain & Hosting:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Domain name registration (.com, .in, etc.)</li>
                                <li>SSL certificate provisioning</li>
                                <li>Server space allocation (shared, VPS, dedicated, or cloud)</li>
                                <li>Setup for staging, production, and test environments</li>
                              </ul>
                              <h5 className="sub-title">Cloud & Infrastructure:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>AWS, Azure, GCP deployment</li>
                                <li>CI/CD pipeline setup for DevOps/MLOps</li>
                                <li>Scalable databases and CDN configuration</li>
                              </ul>
                              <h5 className="sub-title">Technical Support Solutions:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Ongoing application & server maintenance</li>
                                <li>SLA-based support packages (24/7 or business-hours)</li>
                                <li>Monitoring, performance tuning, and issue resolution</li>
                                <li>Ticketing and incident management integration</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*====================  testimonial section ====================*/}
              <div className="testimonial-slider-area bg-gray section-space--ptb_100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title-wrap text-center section-space--mb_40">
                        <h6 className="section-sub-title mb-20">Testimonials</h6>
                        <h3 className="heading">
                          What do people praise about <span className="text-color-primary"> Mitech?</span>
                        </h3>
                      </div>
                      <div className="testimonial-slider">
                        <div className="swiper-container testimonial-slider__container">
                          <div className="swiper-wrapper testimonial-slider__wrapper">
                            <div className="swiper-slide">
                              <div className="testimonial-slider__one wow move-up">
                                <div className="testimonial-slider--info">
                                  <div className="testimonial-slider__media">
                                    <img src="images/testimonial/mitech-testimonial-avata-02-90x90.webp" className="img-fluid" alt="BITS" />
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
                                <div className="testimonial-slider__text">
                                  I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="testimonial-slider__one wow move-up">
                                <div className="testimonial-slider--info">
                                  <div className="testimonial-slider__media">
                                    <img src="images/testimonial/mitech-testimonial-avata-03-90x90.webp" className="img-fluid" alt="BITS" />
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
                                <div className="testimonial-slider__text">
                                  I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="testimonial-slider__one wow move-up">
                                <div className="testimonial-slider--info">
                                  <div className="testimonial-slider__media">
                                    <img src="images/testimonial/mitech-testimonial-avata-04-90x90.webp" className="img-fluid" alt="BITS" />
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
                                <div className="testimonial-slider__text">
                                  I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="testimonial-slider__one wow move-up">
                                <div className="testimonial-slider--info">
                                  <div className="testimonial-slider__media">
                                    <img src="images/testimonial/mitech-testimonial-avata-01-90x90.webp" className="img-fluid" alt="BITS" />
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
                                <div className="testimonial-slider__text">
                                  I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.
                                </div>
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
              {/*========== Call to Action Area Start ============*/}
              <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                      <div className="cta-content md-text-center">
                        <h3 className="heading text-white">
                          We run all kinds of IT services that vow your <span className="text-color-secondary"> success</span>
                        </h3>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                      <div className="cta-button-group--one text-center">
                        <a href="#" className="btn btn--white btn-one">
                          <span className="btn-icon me-2">
                            <i className="far fa-comment-alt" />
                          </span>{" "}
                          Let's talk
                        </a>
                        <a href="#" className="btn btn--secondary  btn-two">
                          <span className="btn-icon me-2">
                            <i className="fas fa-info-circle" />
                          </span>{" "}
                          Get info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*========== Call to Action Area End ============*/}
            </div>
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
