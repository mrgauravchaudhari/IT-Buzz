import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "../shared/header.jsx";
import Footer from "../shared/footer.jsx";

export default function ReconciliationPlatformsServices() {
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
                        <img className="img-fluid" src="images/banner/banner_7.jpg" alt="BITS" />
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
                      <h3 className="text-3xl font-bold mb-6 text-center">Precision Reconciliation for Financial Integrity and Operational Confidence</h3>
                      <p className="text-lg text-gray-600 mb-12 text-center">
                        Automate your financial and technical reconciliations with leading platforms like TLM, IntelliMatch, and ReconArt. Gain control, transparency, and
                        auditability across your data landscape.{" "}
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
                            <h5 className="title">Implementation & Configuration of Leading Reconciliation Platforms</h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Design and deploy scalable, automated reconciliation frameworks tailored to your organization’s operational, financial, and technical needs.
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Platform implementation (TLM, IntelliMatch, ReconArt)</li>
                                <li>Source system analysis and data mapping (core banking, trading, GL, payments)</li>
                                <li>Static data configuration: rules, breaks, and reference data sets</li>
                                <li>Exception management workflows and auto-match logic setup</li>
                                <li>User training and operational handover</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Rapid deployment with best practices and reusable templates</li>
                                <li>Lower break rates via precise rules and enriched matching logic</li>
                                <li>Reduced manual work, audit-ready process</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Financial Reconciliation Automation</h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Automate reconciliations across accounts, transactions, trades, and positions to ensure end-to-end financial accuracy.
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Daily cash, position, trade, and GL reconciliations</li>
                                <li>Multi-way reconciliation between source, processing, and settlement systems</li>
                                <li>High-volume transaction matching (SWIFT, FIX, ISO 20022)</li>
                                <li>T+0 / T+1 reconciliation flows with daily exceptions dashboard</li>
                                <li>Automated certifications and attestation processes</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Faster financial close cycles</li>
                                <li>Accurate reporting and reduced write-offs</li>
                                <li>Transparent exception audit trail</li>
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
                                  <b> Reconciliation as a Service (RaaS): </b> Cloud-hosted reconciliation engine with UI, logs, scheduler
                                </li>
                                <li>
                                  <b> Automated Reporting: </b> Generation of matched/break reports with SLA compliance
                                </li>
                                <li>
                                  <b> Break Management Workflow: </b> Integrated approval/escalation dashboards
                                </li>
                                <li>
                                  <b> Regulatory Alignment: </b> Reconciliation workflows aligned to SOX, BCBS 239, MiFID II
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
                            <h5 className="title"> Technical / Inter-System Reconciliation </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Ensure data consistency and traceability across internal applications (e.g., Core Banking ↔ Middleware ↔ Reporting).</p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Reconciliation between APIs, databases, staging layers, and files</li>
                                <li>Source-to-target comparison jobs for E2E data validation</li>
                                <li>Checksum-based or field-by-field reconciliation</li>
                                <li>Integration with data warehouses, ETL pipelines, and logs</li>
                                <li>Alerts on schema drift or transformation errors</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Higher trust in internal data flow</li>
                                <li>Early error detection in data pipelines</li>
                                <li>Operational confidence across teams</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title"> Custom Reconciliation Solutions & Accelerators </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Build lightweight, customizable reconciliation solutions when platform licenses are cost-prohibitive or for edge-case scenarios.
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Python-based reconciliation engine development</li>
                                <li>Integration with SFTP, DBs, S3, cloud buckets</li>
                                <li>Delta reports and visualization via Streamlit, Metabase, or React UI</li>
                                <li>Reconciliation rule builder with pluggable match logic</li>
                                <li>AI-assisted reconciliation using pattern matching and anomaly detection</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Full control over reconciliation logic</li>
                                <li>Rapid deployment for bespoke use cases</li>
                                <li>Cost-effective alternative for non-core reconciliations</li>
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
