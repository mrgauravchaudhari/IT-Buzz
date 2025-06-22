import React from 'react'

// components
import Header from '../shared/header.jsx';
import Footer from "../shared/footer.jsx";

export default function CaseStudyDetails() {
  return (
    <>
      <div>
        {/*====================  Header Start ====================*/}
        <Header />
        {/*====================  Header End ====================*/}

        {/*====================  Main Start ====================*/}
        <div id="main-wrapper">
          <div className="site-wrapper-reveal">
            <div className="about-banner-wrap vision-space bg-img" data-bg="images/bg/single-case-study-bg-01.webp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 m-auto">
                    <div className="about-banner-content text-center">
                      <div className="banner-logo-img mb-20">
                        <img src="images/icons/mitech-aqua-logo-83x108.webp" alt="BITS" />
                      </div>
                      <h1 className="mb-15 text-white">A vision for a smarter world An ARM case study</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vision-overview section-space--pt_100">
              <div className="container">
                <div className="row">
                  <div className="col-12 section-title">
                    <div className="section-title-wrap section-space--mb_30">
                      <h3 className="heading">Overview</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="vision-content">
                      <h5 className="heading">Inventions, literary works, music &amp; design are all intangible assets. The legal right to these ‘creations of the mind’ is Intellectual Property (IP).</h5>
                      <div className="author section-space--mt_60">
                        <h6 className="font-weight--reguler mb-1">Maggie Strickland</h6>
                        <p>/ Group Chief Information – Aqua Group</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="portfolio-details-content">
                      <div className="text ">
                        <p>The studio was keen to create an identity that would not interfere with any of the existing brands, settling on a helicoid system that can be easily adapted to “work with any colour system”. The studio consulted with the various brands throughout the process. (Source: designweek.co.uk)</p>
                      </div>
                      <div className="portfolio-details-table section-space--mt_60">
                        <table className>
                          <tbody>
                            <tr className="portfolio-details-tags">
                              <td className="label">Tags</td>
                              <td><a href="#" rel="tag">Basic</a></td>
                            </tr>
                            <tr className="portfolio-details-share">
                              <td className="label">Share</td>
                              <td className="portfolio-sharing-list">
                                <div className="inner">
                                  <a className="hint--bounce hint--top hint--primary twitter" target="_blank" aria-label="Twitter" href="#">
                                    <i className="fab fa-twitter" />
                                  </a>
                                  <a className="hint--bounce hint--top hint--primary facebook" target="_blank" aria-label="Facebook" href="#">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                  <a className="hint--bounce hint--top hint--primary linkedin" target="_blank" aria-label="Linkedin" href="#">
                                    <i className="fab fa-linkedin" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="requirements-vision section-space--pt_60">
              <div className="container">
                <div className="ht-problem-solution style-01">
                  <div className="row">
                    <div className="col-md-4">
                      <h4 className="label problem-label section-space--mb_50">Requirements</h4>
                    </div>
                    <div className="offset-md-1 col-md-7">
                      <h4 className="label solution-label section-space--mb_50">Our solution</h4>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-4">
                        <h6 className="problem">The communication between machines of different kinds sometimes cause troubles and inaccurate signal decoding results. </h6>
                      </div>
                      <div className="offset-md-1 col-md-7">
                        <div className="solution">
                          Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-4">
                        <h6 className="problem">The potential market for servers and networking equipment development is still unstable and shrinks every year. </h6>
                      </div>
                      <div className="offset-md-1 col-md-7">
                        <div className="solution">
                          Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-4">
                        <h6 className="problem">Demand for energy efficient technology – the market demands high performance products using low power technology.</h6>
                      </div>
                      <div className="offset-md-1 col-md-7">
                        <div className="solution">
                          This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="results-wrap section-space--ptb_60">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="heading">
                        <h2>Results:</h2>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="text">
                        ARM has an innovative business model. ARM does not manufacture the products in which its technology is used.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-wrapper section-space--pb_100">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-6 pe-5">
                    <div className="faq-two-wrapper section-space--mt_40">
                      <div id="accordion_two">
                        <div className="card">
                          <div className="card-header" id="heading__10">
                            <h5 className="mb-0 font-weight--bold">
                              <button className="btn-link" data-bs-toggle="collapse" data-bs-target="#tab__10" aria-expanded="true" aria-controls="tab__10">
                                New multiple site connectivity <span>
                                  <i className="fas fa-chevron-circle-down" />
                                  <i className="fas fa-chevron-circle-right" /> </span>
                              </button>
                            </h5>
                          </div>
                          <div id="tab__10" className="show" aria-labelledby="heading__10" data-bs-parent="#accordion_two">
                            <div className="card-body">
                              <p>We use a newly developed technology to connect sites that are based on different types of servers and networks, SiteConnect, which helps to reduce the misinterpretation of signals as well as the loss of data during transfering. </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="heading__11">
                            <h5 className="mb-0">
                              <button className="btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse__11" aria-expanded="false" aria-controls="collapse__11">
                                IT Security &amp; Software<span>
                                  <i className="fas fa-chevron-circle-down" />
                                  <i className="fas fa-chevron-circle-right" /></span>
                              </button>
                            </h5>
                          </div>
                          <div id="collapse__11" className="collapse" aria-labelledby="heading__11" data-bs-parent="#accordion_two">
                            <div className="card-body">
                              <p>To keep your systems, your devices, and network stay secure, we have developed a new program that limits the access of suspicious objects or people and authenticate all logins to the system. </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="heading__12">
                            <h5 className="mb-0">
                              <button className="btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse__12" aria-expanded="false" aria-controls="collapse__12">
                                Weak hosted capability<span><i className="fas fa-chevron-circle-down" />
                                  <i className="fas fa-chevron-circle-right" /> </span>
                              </button>
                            </h5>
                          </div>
                          <div id="collapse__12" className="collapse" aria-labelledby="heading__12" data-bs-parent="#accordion_two">
                            <div className="card-body">
                              <p>Some hosts are unaware of the potential risks as well as security loopholes in their system. By detecting these errors and taking prompt actions on improving firewalls, we can upgrade the system security. </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="heading__13">
                            <h5 className="mb-0">
                              <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapse__13" aria-expanded="false" aria-controls="collapse__13">
                                Build internal network <span><i className="fas fa-chevron-circle-down" />
                                  <i className="fas fa-chevron-circle-right" /></span>
                              </button>
                            </h5>
                          </div>
                          <div id="collapse__13" className="collapse" aria-labelledby="heading__13" data-bs-parent="#accordion_two">
                            <div className="card-body">
                              <p>The internal network is essential for all companies and corporations, especially for those working in IT sector. To avoid possible risks when sharing internal confidential files and documentation to an external receiver, internal network must be strong. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/* Start single-popup-wrap */}
                    <div className="video-interview section-space--mt_40 video-popup">
                      <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link mt-30">
                        <div className="single-popup-wrap">
                          <img className="img-fluid border-radus-5" src="images/bg/mitech-home-infotechno-box-large-image-03-540x320.webp" alt="BITS" />
                          <div className="ht-popup-video video-button">
                            <div className="video-mark">
                              <div className="wave-pulse wave-pulse-1" />
                              <div className="wave-pulse wave-pulse-2" />
                            </div>
                            <div className="video-button__two">
                              <div className="video-play">
                                <span className="video-play-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* End single-popup-wrap */}
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
                      <h3 className="heading">How our services bring about<span className="text-color-primary"> success</span></h3>
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
            <div className="portfolio-nav-links">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="nav-list">
                      <div className="nav-item prev">
                        <div className="inner">
                          <a href="#" rel="prev">
                            <div><img className="img-fluid border-radus-5" src="images/projects/case-study-02-120x80.webp" alt="portfolio-08-01" />
                              <h6>Smart Technology Source</h6>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="nav-item next">
                        <div className="inner">
                          <a href="#" rel="next">
                            <div><img className="img-fluid border-radus-5" src="images/projects/case-study-03-120x80.webp" alt="portfolio-06-01" />
                              <h6>A Freeserve case study</h6>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="entry-portfolio-return-link">
                      <span className="fa fa-th" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
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

        {/*====================  Main End ====================*/}

      </div>

    </>
  )
}
