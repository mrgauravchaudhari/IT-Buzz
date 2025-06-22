import React from 'react'
import { Link } from 'react-router-dom';

// components
import Header from '../shared/header.jsx';
import Footer from "../shared/footer.jsx";

export default function Blogs() {
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
                    <h2 className="breadcrumb-title">Blog Update</h2>
                    {/* breadcrumb-list start */}
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                      <li className="breadcrumb-item active">List Left Large Image</li>
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
              {/*====================   Blog Area Start ====================*/}
              <div className="blog-pages-wrapper section-space--ptb_100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 order-lg-2 order-1">
                      <div className="section-title-wrap text-center section-space--mb_60">
                        <h3 className="heading">Interesting articles<span className="text-color-primary"> updated daily</span></h3>
                      </div>
                      <div className="main-blog-wrap">
                        {/*======= Single Blog Item Start ========*/}
                        <div className="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                          <div className="row ">
                            <div className="col-lg-6">
                              {/* Post Feature Start */}
                              <div className="post-feature blog-thumbnail">
                                <Link to="/blog-details">
                                  <img className="img-fluid" src="images/blog/blog-01-540x330.webp" alt="Blog Images" />
                                </Link>
                              </div>
                              {/* Post Feature End */}
                            </div>
                            <div className="col-lg-6">
                              {/* Post info Start */}
                              <div className="post-info lg-blog-post-info">
                                <h4 className="post-title">
                                  <Link to="/blog-details">Ideas for High Returns on Investment</Link>
                                </h4>
                                <div className="post-meta mt-20">
                                  <div className="post-author">
                                    <a href="#">
                                      <img className="img-fluid avatar-96" src="images/team/admin.webp" alt="BITS" /> Harry Ferguson
                                    </a>
                                  </div>
                                  <div className="post-date">
                                    <span className="far fa-calendar meta-icon" />
                                    January 14, 2019
                                  </div>
                                  <div className="post-view">
                                    <span className="meta-icon far fa-eye" />
                                    346 views
                                  </div>
                                </div>
                                <div className="post-excerpt mt-15">
                                  <p>Using the profit accumulator is one such way, and you should understand why it increases your chances of the profits. …</p>
                                </div>
                                <div className="read-post-share-wrap mt-30">
                                  <div className="post-read-more">
                                    <Link to="/blog-details" className="ht-btn ht-btn-md">Read more </Link>
                                  </div>
                                </div>
                              </div>
                              {/* Post info End */}
                            </div>
                          </div>
                        </div>
                        {/*===== Single Blog Item End =========*/}
                        {/*======= Single Blog Item Start ========*/}
                        <div className="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                          <div className="row ">
                            <div className="col-lg-6">
                              {/* Post Feature Start */}
                              <div className="post-feature blog-thumbnail">
                                <Link to="/blog-details">
                                  <img className="img-fluid" src="images/blog/blog-08-540x330.webp" alt="Blog Images" />
                                </Link>
                              </div>
                              {/* Post Feature End */}
                            </div>
                            <div className="col-lg-6">
                              {/* Post info Start */}
                              <div className="post-info lg-blog-post-info">
                                <h4 className="post-title">
                                  <Link to="/blog-details">How Technology Made Businesses More Efficient</Link>
                                </h4>
                                <div className="post-meta mt-20">
                                  <div className="post-author">
                                    <a href="#">
                                      <img className="img-fluid avatar-96" src="images/team/admin.webp" alt="BITS" /> James Scott
                                    </a>
                                  </div>
                                  <div className="post-date">
                                    <span className="far fa-calendar meta-icon" />
                                    January 14, 2019
                                  </div>
                                  <div className="post-view">
                                    <span className="meta-icon far fa-eye" />
                                    346 views
                                  </div>
                                </div>
                                <div className="post-excerpt mt-15">
                                  <p>Using the profit accumulator is one such way, and you should understand why it increases your chances of the profits. …</p>
                                </div>
                                <div className="read-post-share-wrap mt-30">
                                  <div className="post-read-more">
                                    <Link to="/blog-details" className="ht-btn ht-btn-md">Read more </Link>
                                  </div>
                                </div>
                              </div>
                              {/* Post info End */}
                            </div>
                          </div>
                        </div>
                        {/*===== Single Blog Item End =========*/}
                        {/*======= Single Blog Item Start ========*/}
                        <div className="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                          <div className="row ">
                            <div className="col-lg-6">
                              {/* Post Feature Start */}
                              <div className="post-feature blog-thumbnail">
                                <Link to="/blog-details">
                                  <img className="img-fluid" src="images/blog/blog-07-540x330.webp" alt="Blog Images" />
                                </Link>
                              </div>
                              {/* Post Feature End */}
                            </div>
                            <div className="col-lg-6">
                              {/* Post info Start */}
                              <div className="post-info lg-blog-post-info">
                                <h4 className="post-title">
                                  <Link to="/blog-details">Data Secure on Transitioning to a New Office</Link>
                                </h4>
                                <div className="post-meta mt-20">
                                  <div className="post-author">
                                    <a href="#">
                                      <img className="img-fluid avatar-96" src="images/team/admin-02.webp" alt="BITS" /> James Scott
                                    </a>
                                  </div>
                                  <div className="post-date">
                                    <span className="far fa-calendar meta-icon" />
                                    January 14, 2019
                                  </div>
                                  <div className="post-view">
                                    <span className="meta-icon far fa-eye" />
                                    346 views
                                  </div>
                                </div>
                                <div className="post-excerpt mt-15">
                                  <p>Using the profit accumulator is one such way, and you should understand why it increases your chances of the profits. …</p>
                                </div>
                                <div className="read-post-share-wrap mt-30">
                                  <div className="post-read-more">
                                    <Link to="/blog-details" className="ht-btn ht-btn-md">Read more </Link>
                                  </div>
                                </div>
                              </div>
                              {/* Post info End */}
                            </div>
                          </div>
                        </div>
                        {/*===== Single Blog Item End =========*/}
                        {/*======= Single Blog Item Start ========*/}
                        <div className="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                          <div className="row ">
                            <div className="col-lg-6">
                              {/* Post Feature Start */}
                              <div className="post-feature blog-thumbnail">
                                <Link to="/blog-details">
                                  <img className="img-fluid" src="images/blog/blog-05-540x330.webp" alt="Blog Images" />
                                </Link>
                              </div>
                              {/* Post Feature End */}
                            </div>
                            <div className="col-lg-6">
                              {/* Post info Start */}
                              <div className="post-info lg-blog-post-info">
                                <h4 className="post-title">
                                  <Link to="/blog-details">Blockchain Technology Effects on Logistics Sector?</Link>
                                </h4>
                                <div className="post-meta mt-20">
                                  <div className="post-author">
                                    <a href="#">
                                      <img className="img-fluid avatar-96" src="images/team/admin.webp" alt="BITS" /> James Scott
                                    </a>
                                  </div>
                                  <div className="post-date">
                                    <span className="far fa-calendar meta-icon" />
                                    January 14, 2019
                                  </div>
                                  <div className="post-view">
                                    <span className="meta-icon far fa-eye" />
                                    346 views
                                  </div>
                                </div>
                                <div className="post-excerpt mt-15">
                                  <p>Using the profit accumulator is one such way, and you should understand why it increases your chances of the profits. …</p>
                                </div>
                                <div className="read-post-share-wrap mt-30">
                                  <div className="post-read-more">
                                    <Link to="/blog-details" className="ht-btn ht-btn-md">Read more </Link>
                                  </div>
                                </div>
                              </div>
                              {/* Post info End */}
                            </div>
                          </div>
                        </div>
                        {/*===== Single Blog Item End =========*/}
                        {/*======= Single Blog Item Start ========*/}
                        <div className="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                          <div className="row ">
                            <div className="col-lg-6">
                              {/* Post Feature Start */}
                              <div className="post-feature blog-thumbnail">
                                <Link to="/blog-details">
                                  <img className="img-fluid" src="images/blog/blog-02-540x330.webp" alt="Blog Images" />
                                </Link>
                              </div>
                              {/* Post Feature End */}
                            </div>
                            <div className="col-lg-6">
                              {/* Post info Start */}
                              <div className="post-info lg-blog-post-info">
                                <h4 className="post-title">
                                  <Link to="/blog-details">How Wireless Technology is Changing Business</Link>
                                </h4>
                                <div className="post-meta mt-20">
                                  <div className="post-author">
                                    <a href="#">
                                      <img className="img-fluid avatar-96" src="images/team/admin-02.webp" alt="BITS" /> James Scott
                                    </a>
                                  </div>
                                  <div className="post-date">
                                    <span className="far fa-calendar meta-icon" />
                                    January 14, 2019
                                  </div>
                                  <div className="post-view">
                                    <span className="meta-icon far fa-eye" />
                                    346 views
                                  </div>
                                </div>
                                <div className="post-excerpt mt-15">
                                  <p>Using the profit accumulator is one such way, and you should understand why it increases your chances of the profits. …</p>
                                </div>
                                <div className="read-post-share-wrap mt-30">
                                  <div className="post-read-more">
                                    <Link to="/blog-details" className="ht-btn ht-btn-md">Read more </Link>
                                  </div>
                                </div>
                              </div>
                              {/* Post info End */}
                            </div>
                          </div>
                        </div>
                        {/*===== Single Blog Item End =========*/}
                        <div className="ht-pagination mt-30 pagination justify-content-center">
                          <div className="pagination-wrapper">
                            <ul className="page-pagination">
                              <li><a className="prev page-numbers" href="#">Prev</a></li>
                              <li><a className="page-numbers current" href="#">1</a></li>
                              <li><a className="page-numbers" href="#">2</a></li>
                              <li><a className="next page-numbers" href="#">Next</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*====================  Blog Area End  ====================*/}
              {/*========== Call to Action Area Start ============*/}
              <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                      <div className="cta-content md-text-center">
                        <h3 className="heading text-white">Assess your business potentials and find opportunities <span className="text-color-secondary">for bigger success</span></h3>
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
