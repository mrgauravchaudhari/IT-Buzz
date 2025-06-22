import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "../shared/header.jsx";
import Footer from "../shared/footer.jsx";

export default function CloudServices() {
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
                        <img className="img-fluid" src="images/banner/banner_4.jpg" alt="BITS" />
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
                      <h3 className="text-3xl font-bold mb-6 text-center">Modern, Scalable, and Secure Cloud Services to Power Digital Transformation</h3>
                      <p className="text-lg text-gray-600 mb-12 text-center">
                        From cloud migration to data platform modernization and infrastructure automation, we help you unlock the full potential of cloud technologies across AWS,
                        Azure, GCP, and hybrid environments.{" "}
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
                            <h5 className="title">Cloud Migration & Modernization</h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Accelerate your journey to the cloud with secure and structured migrations, ensuring minimal downtime and full compatibility.
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Cloud readiness assessments & migration strategy</li>
                                <li>Lift-and-shift, re-platforming, and re-architecting applications</li>
                                <li>Migration of databases, file systems, and on-prem workloads</li>
                                <li>Hybrid and multi-cloud deployments</li>
                                <li>Cloud landing zone setup and tagging standards</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Reduced infrastructure overhead</li>
                                <li>Improved scalability and uptime</li>
                                <li>Faster modernization with minimal disruption</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Cloud Data Platforms & DataOps</h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Build modern cloud-native data platforms and automate end-to-end pipelines using best-in-class tools.</p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Data lakehouse architecture (Delta Lake, Iceberg, Hudi)</li>
                                <li>Ingestion pipelines using Kafka, Airflow, Glue, or Dataflow</li>
                                <li>Orchestration and version control using dbt, GitOps, CI/CD</li>
                                <li>Integration with Snowflake, Redshift, BigQuery, Databricks</li>
                                <li>Dev/stage/prod environment segregation and rollback mechanisms</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>End-to-end visibility and lineage across data flows</li>
                                <li>Modular and reusable pipelines for rapid onboarding</li>
                                <li>Cloud-native compliance-ready data platforms</li>
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
                            <h5 className="title">Infrastructure as Code & DevOps</h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">
                                Automate infrastructure provisioning, deployment, and monitoring using Infrastructure-as-Code (IaC) and DevOps best practices.
                              </p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>IaC using Terraform, Pulumi, AWS CDK, or ARM templates</li>
                                <li>CI/CD pipelines using GitHub Actions, GitLab, Azure DevOps</li>
                                <li>Containerization using Docker and orchestration with Kubernetes or ECS</li>
                                <li>Centralized secrets management and environment configuration</li>
                                <li>Observability stack with Prometheus, Grafana, and ELK</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Faster and repeatable environment setups</li>
                                <li>Secure, version-controlled, and rollback-friendly infrastructure</li>
                                <li>24/7 monitoring and alerting for mission-critical systems</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title"> Cloud Security, Cost Optimization & Governance </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Ensure your cloud environments are secure, cost-efficient, and compliant with industry standards.</p>
                              <h5 className="sub-title">Key Services:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Identity and access management (IAM) strategy and setup</li>
                                <li>Encryption (at-rest, in-transit), key management (KMS)</li>
                                <li>Security compliance: SOC 2, ISO 27001, HIPAA, MAS TRM</li>
                                <li>Cost allocation, usage analytics, and rightsizing</li>
                                <li>Policy enforcement via tagging, SCPs, budgets</li>
                              </ul>
                              <h5 className="sub-title">Outcomes:</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Proactive security and cost control</li>
                                <li>Governance aligned with audit and compliance requirements</li>
                                <li>Sustainable and accountable cloud operations</li>
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
