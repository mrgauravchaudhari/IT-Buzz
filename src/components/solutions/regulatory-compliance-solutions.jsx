import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "../shared/header.jsx";
import Footer from "../shared/footer.jsx";

export default function RegulatoryAndComplianceServices() {
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
              <div className="about-banner-wrap bg-img mt-5" data-bg="images/bg/managed-it-services-hero-bg.webp">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 m-auto">
                      <div className="about-banner-content text-center">
                        <img className="img-fluid" src="images/banner/banner_8.jpg" alt="BITS" />
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
                      <h3 className="text-3xl font-bold mb-6 text-center"> Compliance-Driven Solutions to Navigate Global Regulatory Demands </h3>
                      <p className="text-lg text-gray-600 mb-12 text-center">
                        Our experts have delivered mission-critical regulatory reporting and compliance solutions across jurisdictions — including DTCC, HKTR, EMIR, MAS, FATCA, and
                        GDPR — ensuring clients stay ahead of ever-evolving mandates.
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
                            <h5 className="title">Trade & Transaction Reporting Compliance </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Implement and automate trade and transaction reporting frameworks to comply with global and local regulatory bodies.{" "}
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>DTCC, HKTR, EMIR, SFTR, MAS TRR reporting setup</li>
                                <li>End-to-end report generation and submission automation</li>
                                <li>UTI generation, enrichment, and reconciliation processes</li>
                                <li>Reporting across asset classes: FX, OTC Derivatives, Securities</li>
                                <li>Submission validation and error feedback integration</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Timely, accurate, and audit-ready reports</li>
                                <li>Lower compliance risk and regulatory penalties</li>
                                <li>Centralized reporting framework across jurisdictions</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Tax Compliance & FATCA/CRS Reporting</h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Streamline global tax compliance processes with automated systems that meet FATCA, CRS, and other jurisdiction-specific requirements.{" "}
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Client and account classification logic (US indicia, residency tests)</li>
                                <li>Report formatting (XML schema, OECD guidelines)</li>
                                <li>Data validation, enrichment, and exception workflows</li>
                                <li>Integration with IRS portals and local tax authority APIs</li>
                                <li>Archiving and secure audit logs</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Reduced manual effort in tax reporting</li>
                                <li>On-time submission of FATCA/CRS reports</li>
                                <li>Secure and privacy-compliant client data handling</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item mb-3">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Optional Add-ons: </h5>
                            <div className="desc">
                              <ul className="list-disc list-inside mb-3">
                                <li>
                                  <b> Control Dashboard: </b> Live visualization of compliance KPIs, breaks, and SLAs
                                </li>
                                <li>
                                  <b> Automated Alerting: </b> Triggers for late/missing reports, data gaps, or schema errors
                                </li>
                                <li>
                                  <b> Managed Service: </b> Regulatory reporting as a managed/outsourced service
                                </li>
                                <li>
                                  <b> Cross-Border Regulatory Intelligence: </b> Insights on overlapping reporting regimes
                                </li>
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
                            <h5 className="title"> Privacy & Data Protection Compliance </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Ensure your data ecosystems are fully compliant with privacy laws like GDPR, PDPA, and CCPA, including data subject rights, breach readiness, and
                                consent management.
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Data discovery, classification, and lineage mapping</li>
                                <li>Consent capture, access request, and erasure workflow automation</li>
                                <li>Data masking and anonymization strategies</li>
                                <li>GDPR-compliant logging and retention policies</li>
                                <li>Privacy Impact Assessment (PIA) support</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Enterprise-wide data privacy readiness</li>
                                <li>Reduced exposure to compliance breaches</li>
                                <li>Automated management of subject rights requests</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title"> Regulatory Data Governance & Audit Readiness </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Implement strong data governance practices and documentation frameworks to ensure readiness for internal and external audits.{" "}
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Regulatory data dictionary and lineage documentation</li>
                                <li>Audit trail generation for reporting flows and data transformations</li>
                                <li>Change impact assessment documentation</li>
                                <li>Evidence generation for controls and validations</li>
                                <li>Alignment with BCBS 239, DORA, and internal policies</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Faster and smoother regulatory audits</li>
                                <li>Proactive control of data risk and process gaps</li>
                                <li>Harmonized data usage across business and compliance teams</li>
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
