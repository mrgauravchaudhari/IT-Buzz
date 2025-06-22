import React from 'react'

// components
import Header from '../shared/header.jsx';
import Footer from "../shared/footer.jsx";

export default function BlogDetails() {
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
                    <h2 className="breadcrumb-title">Blog Details</h2>
                    {/* breadcrumb-list start */}
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Blog Details</li>
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
              {/*====================  Blog Area Start ====================*/}
              <div className="blog-pages-wrapper section-space--ptb_100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* Post Feature Start */}
                      <div className="post-feature blog-thumbnail  wow move-up">
                        <img className="img-fluid" src="images/blog/blog-05-1170x570.webp" alt="Blog Images" />
                      </div>
                      {/* Post Feature End */}
                    </div>
                    <div className="col-lg-8 m-auto">
                      <div className="main-blog-wrap">
                        {/*======= Single Blog Item Start ========*/}
                        <div className="single-blog-item  wow move-up">
                          {/* Post info Start */}
                          <div className="post-info lg-blog-post-info">
                            <div className="post-categories text-center">
                              <a href="#"> Success Story, Tips </a>
                            </div>
                            <h3 className="post-title text-center">
                              <a href="#">Blockchain Technology Effects on Logistics Sector?</a>
                            </h3>
                            <div className="post-meta mt-20 justify-content-center">
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
                              <div className="post-comments">
                                <span className="far fa-comment-alt meta-icon" />
                                <a href="#" className="smooth-scroll-link">4 Comments</a>
                              </div>
                            </div>
                            <div className="post-excerpt mt-15">
                              <p>Creative jobs website and networking platform The Dots has launched the “bias blocker”, a new browsing mode that stops employers being able to see candidates’ photos, names, education and employment history, on the basis that they should be judged on the “quality of their work” only. Will tools like this help to build a more diverse design workforce?</p>
                              <blockquote>
                                <p className="p1">We’re on a mission to build a better future where technology creates good jobs for everyone. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse moles dolore eu feugiat..
                                </p>
                              </blockquote>
                              <p>Regardless of our gender, race, religion, cultural beliefs or education, all of us are biased in some way. This no doubt seeps into recruitment – whether we are subconsciously looking for people we relate to, or we are actively going against this to try to diversify the workplace, personal feelings and opinion are making their way into the hiring process.</p>
                              <p>Positive discrimination – giving an advantage to those from minority backgrounds or discriminated groups to put them on a level playing field with others – can only be a good thing. It increases the diversity of people, and therefore the diversity of ideas, in the workplace.</p>
                              <p>Source:&nbsp;designweek.co.uk</p>
                              <div className="entry-post-share-wrap  border-bottom">
                                <div className="row align-items-center">
                                  <div className="col-lg-6 col-md-6">
                                    <div className="entry-post-tags">
                                      <div className="tagcloud-icon">
                                        <i className="fa fa-tags" />
                                      </div>
                                      <div className="tagcloud">
                                        <a href="#">designer</a>, <a href="#">font</a>, <a href="#">mookup</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <div className="entry-post-share">
                                      <div className="share-label">
                                        Share this post
                                      </div>
                                      <div className="share-media">
                                        <span className="share-icon fas fa-share-alt" />
                                        <div className="share-list">
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
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="entry-author">
                                <div className="author-info">
                                  <div className="author-avatar">
                                    <img src="images/team/avatar-06-90x90.webp" alt="BITS" />
                                    <div className="author-social-networks">
                                      <div className="inner">
                                        <a className="hint--bounce hint--top hint--primary" aria-label="Twitter" href="#" target="_blank">
                                          <i className="fab fa-twitter" />
                                        </a>
                                        <a className="hint--bounce hint--top hint--primary" aria-label="Facebook" href="#" target="_blank">
                                          <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="hint--bounce hint--top hint--primary" aria-label="Instagram" href="#" target="_blank">
                                          <i className="fab fa-instagram" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="author-description">
                                    <h6 className="author-name">Owen Christ</h6>
                                    <div className="author-biographical-info">
                                      Harry Ferguson is an author, blogger, and designer living in a suburb of Washington, DC. When he’s not designing, blogging, or writing, Ferguson can be found with his head in a book or pinning like a madman.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="related-posts-wrapper">
                                <div className="row">
                                  <div className="col-lg-6">
                                    {/* Single Valid Post Start */}
                                    <a className="single-valid-post-wrapper" href="#">
                                      <div className="single-blog__item">
                                        <div className="single-valid__thum bg-img" data-bg="images/blog/blog-03-370x120.webp">
                                        </div>
                                        <div className="post-content">
                                          <h6 className="post-title font-weight--bold">Designers’ Identities &amp; Social Unconscious Bias</h6>
                                        </div>
                                      </div>
                                    </a>
                                    {/* Single Valid Post End */}
                                  </div>
                                  <div className="col-lg-6">
                                    {/* Single Valid Post Start */}
                                    <a className="single-valid-post-wrapper" href="#">
                                      <div className="single-blog__item">
                                        <div className="single-valid__thum bg-img" data-bg="images/blog/blog-05-370x120.webp">
                                        </div>
                                        <div className="post-content">
                                          <h6 className="post-title font-weight--bold">Designers’ Identities &amp; Social Unconscious Bias</h6>
                                        </div>
                                      </div>
                                    </a>
                                    {/* Single Valid Post End */}
                                  </div>
                                </div>
                              </div>
                              <div className="comment-list-wrapper">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <h4 className="widget-title section-space--mb_50">Comments (3) </h4>
                                  </div>
                                  <div className="col-lg-12">
                                    <ol className="comment-list">
                                      <li className="comment border-bottom">
                                        <div className="comment-2">
                                          <div className="comment-author vcard">
                                            <img alt="BITS" src="images/team/coment.webp" />
                                          </div>
                                          <div className="comment-content">
                                            <div className="meta">
                                              <h6 className="fn">Edna Watson</h6>
                                            </div>
                                            <div className="comment-text">
                                              <p>Thanks for always keeping your HTML Template up to date. Your level of support and dedication is second to none.</p>
                                            </div>
                                            <div className="comment-actions">
                                              <div className="comment-datetime"> November 16, 2018 at 4:31 am </div><span> | </span>
                                              <a className="comment-reply-link" href="#">Reply</a>
                                            </div>
                                          </div>
                                        </div>
                                      </li>{/* comment End*/}
                                      <li className="comment border-bottom">
                                        <div className="comment-2">
                                          <div className="comment-author vcard">
                                            <img alt="BITS" src="images/team/comment-2.webp" />
                                          </div>
                                          <div className="comment-content">
                                            <div className="meta">
                                              <h6 className="fn">Owen Christ</h6>
                                            </div>
                                            <div className="comment-text">
                                              <p>Thanks for always keeping your HTML Template up to date. Your level of support and dedication is second to none.</p>
                                            </div>
                                            <div className="comment-actions">
                                              <div className="comment-datetime"> November 19, 2018 at 4:31 am </div><span> | </span>
                                              <a className="comment-reply-link" href="#">Reply</a>
                                            </div>
                                          </div>
                                        </div>
                                      </li>{/* comment End*/}
                                      <li className="comment">
                                        <div className="comment-5">
                                          <div className="comment-author vcard">
                                            <img alt="BITS" src="images/team/comment-3.webp" />
                                          </div>
                                          <div className="comment-content">
                                            <div className="meta">
                                              <h6 className="fn">James Scott</h6>
                                              <div className="comment-datetime">
                                                November 13, 2018 at 4:50 am </div>
                                            </div>
                                            <div className="comment-text">
                                              <p>Thanks for always keeping your HTML Template up to date. Your level of support and dedication is second to none.</p>
                                            </div>
                                            <div className="comment-actions">
                                              <div className="comment-datetime"> February 12, 2018 at 6:31 am </div><span> | </span>
                                              <a className="comment-reply-link" href="#">Reply</a>
                                            </div>
                                          </div>
                                        </div>
                                        <ol className="children">
                                          <li className="comment ">
                                            <div className="comment-6">
                                              <div className="comment-author vcard">
                                                <img alt="BITS" src="images/team/reply-comm.webp" />
                                              </div>
                                              <div className="comment-content">
                                                <div className="meta">
                                                  <h6 className="fn">Harry Ferguson</h6>
                                                  <div className="comment-datetime">
                                                    February 13, 2019 at 4:51 am </div>
                                                </div>
                                                <div className="comment-text">
                                                  <p>Thanks for always keeping your HTML Template up to date. Your level of support and dedication is second to none.</p>
                                                </div>
                                                <div className="comment-actions">
                                                  <div className="comment-datetime"> November 13, 2018 at 4:31 am </div><span> | </span>
                                                  <a className="comment-reply-link" href="#">Reply</a>
                                                </div>
                                              </div>
                                            </div>
                                          </li>{/* comment End */}
                                        </ol>{/* children End */}
                                      </li>{/* comment End*/}
                                    </ol>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-list-wrapper">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <h4 className="widget-title mb-20">Leave your thought here </h4>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="contact-from-wrapper section-space--mt_30">
                                      <form action="#" method="post">
                                        <div className="contact-page-form">
                                          <div className="contact-input">
                                            <div className="contact-inner">
                                              <input name="name" type="text" placeholder="Your Comment *" />
                                            </div>
                                            <div className="contact-inner">
                                              <input name="email" type="email" placeholder="Your Email *" />
                                            </div>
                                          </div>
                                          <div className="contact-inner contact-message">
                                            <textarea name="comment" placeholder="Your Comment" defaultValue={""} />
                                          </div>
                                          <p className="comment-form-cookies-consent">
                                            <input type="checkbox" />
                                            <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                          </p>
                                          <div className="comment-submit-btn text-center">
                                            <button className="ht-btn ht-btn-md" type="submit">Submit</button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Post info End */}
                        </div>
                        {/*===== Single Blog Item End =========*/}
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
