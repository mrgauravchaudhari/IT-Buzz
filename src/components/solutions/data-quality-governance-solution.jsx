import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "../shared/header.jsx";
import Footer from "../shared/footer.jsx";

export default function DataQualityAndGovernanceServices() {
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
                        <img className="img-fluid" src="images/banner/banner_5.jpg" alt="BITS" />
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
                      <h3 className="text-3xl font-bold mb-6 text-center">Trusted, Governed, and Reliable Data for Confident Decision-Making</h3>
                      <p className="text-lg text-gray-600 mb-12 text-center">
                        Establish a solid data foundation through robust governance frameworks, centralized master data, and continuous quality monitoring.
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
                            <h5 className="title">Master Data Management (MDM)</h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Create a “single source of truth” across critical business domains like customers, vendors, products, and accounts.</p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Identification and consolidation of master data entities</li>
                                <li>Golden record creation via matching, merging, survivorship rules</li>
                                <li>Master data modeling and reference data hierarchies</li>
                                <li>MDM tool implementation (Informatica MDM, Talend, Semarchy, Reltio)</li>
                                <li>Data stewardship workflows and UI integration</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Elimination of duplication and inconsistency</li>
                                <li>Enterprise-wide consistent data definitions</li>
                                <li>Seamless integration with operational and analytical systems</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Data Lineage & Traceability</h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Track and visualize the end-to-end flow of data — from ingestion to consumption — across systems and transformations.
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Data mapping and impact analysis documentation</li>
                                <li>Automated lineage extraction (via Apache Atlas, OpenLineage, Collibra, etc.)</li>
                                <li>Integration with data lakes, ETL tools, BI platforms</li>
                                <li>Visual dashboards for lineage graph and audit trails</li>
                                <li>Regulatory traceability (GDPR, HIPAA, BCBS 239)</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Full visibility into data transformations</li>
                                <li>Reduced debugging and change impact risk</li>
                                <li>Compliance-readiness with audit trails</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item mb-3">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Optional Add-ons:</h5>
                            <div className="desc">
                              <ul className="list-disc list-inside mb-3">
                                <li>
                                  <b> AI-Enhanced Data Observability: </b> Anomaly detection in data flows using ML models.
                                </li>
                                <li>
                                  <b> Governance Portal: </b> Custom portal/dashboard for stewardship, policy approval, and metrics.
                                </li>
                                <li>
                                  <b> Cross-border Compliance Support: </b> Tailored governance for data localization or regional privacy laws.
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
                            <h5 className="title">Data Profiling & Quality Management</h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Continuously assess and improve data accuracy, completeness, consistency, and timeliness through automated profiling and validation.
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Column-level and cross-table profiling for patterns, outliers, nulls</li>
                                <li>Business rule configuration (valid ranges, formats, dependencies)</li>
                                <li>Data quality scoring and monitoring dashboards</li>
                                <li>Integration with quality tools (Great Expectations, Talend DQ, Ataccama, etc.)</li>
                                <li>Alerts and workflows for data anomalies and failed validations</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Improved trust in enterprise data</li>
                                <li>Early detection of data issues before they impact analytics</li>
                                <li>Measurable improvement in data SLA metrics</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title"> Data Governance Framework Implementation </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Establish policies, processes, roles, and tools to manage data as a strategic enterprise asset.</p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Governance operating model and data ownership definition</li>
                                <li>Data cataloging and metadata management setup</li>
                                <li>Policy templates: classification, retention, access control</li>
                                <li>Stewardship council facilitation and change management</li>
                                <li>Integration with data governance platforms (Collibra, Alation, Data.World)</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>A structured and repeatable governance model</li>
                                <li>Reduced risk of data misuse or non-compliance</li>
                                <li>Improved collaboration across business and IT</li>
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
