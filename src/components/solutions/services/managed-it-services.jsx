import React from 'react'
import { Link } from "react-router-dom";

// components
import Header from '../../shared/header.jsx';
import Footer from "../../shared/footer.jsx";

export default function ManagedItServices() {
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
              <div className="about-banner-wrap bg-img" data-bg="images/bg/managed-it-services-hero-bg.webp">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 m-auto">
                      <div className="about-banner-content text-center">
                        <img className="img-fluid" src="images/custom/data-solutions.png" alt="BITS" />
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
                      <h3 className="text-3xl font-bold mb-6 text-center">Modern Data Engineering Solutions</h3>
                      <p className="text-lg text-gray-600 mb-12 text-center">
                        Build resilient, scalable, and high-performance data infrastructure to support your analytics, AI, and regulatory goals.
                      </p> <br /> <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="delivering-optimal-wrap">
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">ETL/ELT Design & Implementation </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Design and implement robust ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) pipelines tailored to your data sources, business logic, and target systems.</p>
                              <ul className="list-disc list-inside mb-3">
                                <li>Data extraction from databases, APIs, files, third-party platforms</li>
                                <li>Data transformation (cleaning, mapping, typecasting, validation)</li>
                                <li>Load to RDBMS, data lakes, or data warehouses (Snowflake, BigQuery, etc.)</li>
                                <li>Parallel processing, incremental loading, CDC (Change Data Capture)</li>
                                <li>Integration with Apache Airflow, AWS Glue, Azure Data Factory, dbt</li>
                              </ul>
                              <p className="text-gray-600 italic">Outcomes: 60–80% reduction in manual processing, improved data accuracy, scalable pipelines.</p>
                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title"> Data Lake Architecture & Setup </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Design and implement modern cloud or on-premises data lakes to centralize structured and unstructured data.</p>
                              <ul className="list-disc list-inside mb-3">
                                <li>Lakehouse architecture design (Delta Lake, Apache Iceberg, Hudi)</li>
                                <li>Storage layer setup (S3, Azure Blob, HDFS)</li>
                                <li>Raw, staged, and curated zones</li>
                                <li>Metadata management with Apache Hive, AWS Glue Catalog</li>
                                <li>Access control and governance integration</li>
                              </ul>
                              <p className="text-gray-600 italic">Outcomes: Unified, scalable storage; analytics-ready data; lower storage costs.</p>

                            </div>
                          </div>
                        </div>
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Other Capabilities</h5>
                            <div className="desc">
                              <ul className="list-disc list-inside mb-3">
                                <li>Monitoring & Observability (Prometheus, Grafana, or custom)</li>
                                <li>Data Catalog & Lineage Tools (Amundsen, DataHub)</li>
                                <li>CI/CD for Pipelines (GitOps, dbt Cloud, container-based workflows)</li>
                              </ul>

                              {/* CTA Button */}
                              <div className="text-center mt-12">
                                <a href="/contact" className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded hover:bg-blue-700 transition">
                                  Talk to a Data Engineer
                                </a>
                              </div>
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
                            <h5 className="title">Batch Data Processing </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Set up and manage batch processing systems for high-volume, scheduled, or heavy-lift data workloads.</p>
                              <ul className="list-disc list-inside mb-3">
                                <li>Batch pipelines using Spark, Pandas, SQL, PySpark</li>
                                <li>Orchestration with Apache Airflow, Prefect, Dagster</li>
                                <li>Integration with file systems, FTP, S3, databases</li>
                                <li>SLA-based retry, alerting, and audit logging setup</li>
                              </ul>
                              <p className="text-gray-600 italic">Outcomes: Reliable automation, resource-optimized workloads, traceable data flows.</p>
                            </div>
                          </div>
                        </div>
                        <br/> 
                        <div className="list-item">
                          <div className="marker" />
                          <div className="title-wrap">
                            <h5 className="title">Real-Time Data Streaming </h5>
                            <div className="desc">
                              <p className="text-gray-700 mb-3">Enable low-latency data movement and processing to power dashboards, alerts, and decision engines.</p>
                              <ul className="list-disc list-inside mb-3">
                                <li>Event-driven architecture with Apache Kafka, AWS Kinesis, Azure Event Hubs</li>
                                <li>Stream processing with Flink, Spark Streaming, Kafka Streams</li>
                                <li>Real-time ingestion from APIs, logs, IoT, and applications</li>
                                <li>Stream-to-lake and stream-to-warehouse integration</li>
                                <li>Windowing, watermarking, and late data handling</li>
                              </ul>
                              <p className="text-gray-600 italic">Outcomes: Live dashboards, faster decision-making, real-time alerts.</p>
                            </div>
                          </div>
                        </div>
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
                      <section id="data-engineering" className="py-16 bg-white text-gray-800">
                        <div className="container max-w-7xl mx-auto px-4">
                          <h3 className="text-3xl font-bold mb-6 text-center">Modern Data Engineering Solutions</h3>
                          <p className="text-lg text-gray-600 mb-12 text-center">
                            Build resilient, scalable, and high-performance data infrastructure to support your analytics, AI, and regulatory goals.
                          </p> <br /> <br />
                        </div>
                      </section>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="modern-number-01">
                          <img className="img-fluid" src="images/custom/data-solutions.png" alt="BITS" />
                        </div>
                      </div>
                      <div className="col-lg-7 offset-lg-1">
                        <section id="data-engineering" className="py-16 bg-white text-gray-800">
                          <div className="container max-w-7xl mx-auto px-4">

                            {/* ETL/ELT Design */}
                            <div className="mb-10">
                              <h5 className="text-2xl font-semibold mb-2">1. ETL/ELT Design & Implementation</h5>
                              <p className="text-gray-700 mb-3">Design and implement robust ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) pipelines tailored to your data sources, business logic, and target systems.</p>
                              <ul className="list-disc list-inside mb-3">
                                <li>Data extraction from databases, APIs, files, third-party platforms</li>
                                <li>Data transformation (cleaning, mapping, typecasting, validation)</li>
                                <li>Load to RDBMS, data lakes, or data warehouses (Snowflake, BigQuery, etc.)</li>
                                <li>Parallel processing, incremental loading, CDC (Change Data Capture)</li>
                                <li>Integration with Apache Airflow, AWS Glue, Azure Data Factory, dbt</li>
                              </ul>
                              <p className="text-gray-600 italic">Outcomes: 60–80% reduction in manual processing, improved data accuracy, scalable pipelines.</p>
                            </div> <br /> <br /> <br />

                          </div>
                        </section>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="modern-number-01">
                          <img className="img-fluid" src="images/custom/data-solutions.png" alt="BITS" />
                        </div>
                      </div>
                      <div className="col-lg-7 offset-lg-1">
                        <section id="data-engineering" className="py-16 bg-white text-gray-800">
                          <div className="container max-w-7xl mx-auto px-4">

                            {/* Data Lake Setup */}
                            <div className="mb-10">
                              <h5 className="text-2xl font-semibold mb-2">2. Data Lake Architecture & Setup</h5>
                              <p className="text-gray-700 mb-3">Design and implement modern cloud or on-premises data lakes to centralize structured and unstructured data.</p>
                              <ul className="list-disc list-inside mb-3">
                                <li>Lakehouse architecture design (Delta Lake, Apache Iceberg, Hudi)</li>
                                <li>Storage layer setup (S3, Azure Blob, HDFS)</li>
                                <li>Raw, staged, and curated zones</li>
                                <li>Metadata management with Apache Hive, AWS Glue Catalog</li>
                                <li>Access control and governance integration</li>
                              </ul>
                              <p className="text-gray-600 italic">Outcomes: Unified, scalable storage; analytics-ready data; lower storage costs.</p>
                            </div> <br /> <br /> <br />

                          </div>
                        </section>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="modern-number-01">
                          <img className="img-fluid" src="images/custom/data-solutions.png" alt="BITS" />
                        </div>
                      </div>
                      <div className="col-lg-7 offset-lg-1">
                        <section id="data-engineering" className="py-16 bg-white text-gray-800">
                          <div className="container max-w-7xl mx-auto px-4">

                            {/* Real-Time Streaming */}
                            <div className="mb-10">
                              <h5 className="text-2xl font-semibold mb-2">3. Real-Time Data Streaming</h5>
                              <p className="text-gray-700 mb-3">Enable low-latency data movement and processing to power dashboards, alerts, and decision engines.</p>
                              <ul className="list-disc list-inside mb-3">
                                <li>Event-driven architecture with Apache Kafka, AWS Kinesis, Azure Event Hubs</li>
                                <li>Stream processing with Flink, Spark Streaming, Kafka Streams</li>
                                <li>Real-time ingestion from APIs, logs, IoT, and applications</li>
                                <li>Stream-to-lake and stream-to-warehouse integration</li>
                                <li>Windowing, watermarking, and late data handling</li>
                              </ul>
                              <p className="text-gray-600 italic">Outcomes: Live dashboards, faster decision-making, real-time alerts.</p>
                            </div> <br /> <br /> <br />

                          </div>
                        </section>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="modern-number-01">
                          <img className="img-fluid" src="images/custom/data-solutions.png" alt="BITS" />
                        </div>
                      </div>
                      <div className="col-lg-7 offset-lg-1">
                        <section id="data-engineering" className="py-16 bg-white text-gray-800">
                          <div className="container max-w-7xl mx-auto px-4">

                            {/* Batch Processing */}
                            <div className="mb-10">
                              <h5 className="text-2xl font-semibold mb-2">4. Batch Data Processing</h5>
                              <p className="text-gray-700 mb-3">Set up and manage batch processing systems for high-volume, scheduled, or heavy-lift data workloads.</p>
                              <ul className="list-disc list-inside mb-3">
                                <li>Batch pipelines using Spark, Pandas, SQL, PySpark</li>
                                <li>Orchestration with Apache Airflow, Prefect, Dagster</li>
                                <li>Integration with file systems, FTP, S3, databases</li>
                                <li>SLA-based retry, alerting, and audit logging setup</li>
                              </ul>
                              <p className="text-gray-600 italic">Outcomes: Reliable automation, resource-optimized workloads, traceable data flows.</p>
                            </div> <br /> <br /> <br />

                          </div>
                        </section>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="modern-number-01">
                          <img className="img-fluid" src="images/custom/data-solutions.png" alt="BITS" />
                        </div>
                      </div>
                      <div className="col-lg-7 offset-lg-1">
                        <section id="data-engineering" className="py-16 bg-white text-gray-800">
                          <div className="container max-w-7xl mx-auto px-4">

                            {/* Optional Add-ons */}
                            <div className="mb-10">
                              <h5 className="text-xl font-semibold mb-2">5. Other Capabilities</h5>
                              <ul className="list-disc list-inside mb-3">
                                <li>Monitoring & Observability (Prometheus, Grafana, or custom)</li>
                                <li>Data Catalog & Lineage Tools (Amundsen, DataHub)</li>
                                <li>CI/CD for Pipelines (GitOps, dbt Cloud, container-based workflows)</li>
                              </ul>
                            </div>

                            {/* CTA Button */}
                            <div className="text-center mt-12">
                              <a href="/contact" className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded hover:bg-blue-700 transition">
                                Talk to a Data Engineer
                              </a>
                            </div>
                          </div>
                        </section>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===========  feature-large-images-wrapper  End =============*/}
              {/*=========== fun fact Wrapper Start ==========*/}
              <div className="managed-it-fun-fact-wrapper section-space--pb_100">
                <div className="container">
                  <div className="fun-fact-grid-4">
                    <div className="grid-item  wow move-up">
                      <div className="fun-fact--one text-center">
                        <h5 className="fun-fact__title">Successfully work <br /> with </h5>
                        <div className="fun-fact__count counter">1056</div>
                        <span className="fun-fact__text">HAPPY CLIENTS</span>
                      </div>
                    </div>
                    <div className="grid-item  wow move-up">
                      <div className="fun-fact--one text-center">
                        <h5 className="fun-fact__title">Successfully <br /> completed</h5>
                        <div className="fun-fact__count counter">491</div>
                        <span className="fun-fact__text">Finished projects</span>
                      </div>
                    </div>
                    <div className="grid-item  wow move-up">
                      <div className="fun-fact--one text-center">
                        <h5 className="fun-fact__title">Recruit more <br /> than</h5>
                        <div className="fun-fact__count counter">245</div>
                        <span className="fun-fact__text">SKilled Experts</span>
                      </div>
                    </div>
                    <div className="grid-item  wow move-up">
                      <div className="fun-fact--one text-center">
                        <h5 className="fun-fact__title">Blog <br /> update </h5>
                        <div className="fun-fact__count counter">1090</div>
                        <span className="fun-fact__text">Media Posts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*=========== fun fact Wrapper End ==========*/}
              {/*========= About Resources Wrapper Start ===========*/}
              <div className="about-resources-wrapper">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                      <div className="resources-left-box">
                        <div className="resources-inner">
                          <h6 className="sub-title mb-20">Resources</h6>
                          <h3 className="heading">Get a copy of brochure on <span className="text-color-primary"> Brand New IT Tech.</span></h3>
                          <div className="button mt-30">
                            <a href="#" className="ht-btn ht-btn-md">Download now (3MB)</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                      <div className="resources-right-box">
                        <div className="resources-right-inner text-center">
                          <div className="resources-images">
                            <img className="img-fluid" src="images/banners/managed-it-services-book-cover.webp" alt="BITS" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*========= About Resources Wrapper End ===========*/}
              {/*===========  feature-icon-wrapper  Start =============*/}
              <div className="feature-icon-wrapper section-space--pt_100 section-space--pb_70">
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
                                      Mitech Management Systems
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
                                    <div className="text">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.</div>
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
              {/*====================  testimonial section ====================*/}
              <div className="testimonial-slider-area bg-gray section-space--ptb_100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title-wrap text-center section-space--mb_40">
                        <h6 className="section-sub-title mb-20">Testimonials</h6>
                        <h3 className="heading">What do people praise about <span className="text-color-primary"> Mitech?</span></h3>
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
                                <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
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
                                <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
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
                                <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
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
                                <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
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
            </div >
          </div >
        </div >
        {/*====================  Main End ====================*/}

        {/*====================  Footer Start ====================*/}
        <Footer />
        {/*====================  Footer End ====================*/}
      </div >

    </>
  )
}
