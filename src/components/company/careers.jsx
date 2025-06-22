import React from 'react'
import { Link } from "react-router-dom";

// components
import Header from '../shared/header.jsx';
import Footer from "../shared/footer.jsx";

export default function Careers() {
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
                                        <h2 className="breadcrumb-title">Careers</h2>
                                        {/* breadcrumb-list start */}
                                        <ul className="breadcrumb-list">
                                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                            <li className="breadcrumb-item active">Careers</li>
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
                            {/*======== careers-experts Start ==========*/}
                            <div className="careers-experts-wrapper section-space--pt_100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 m-auto">
                                            {/* section-title-wrap Start */}
                                            <div className="section-title-wrap text-center section-space--mb_30">
                                                <h3 className="heading">Become a part of our big family to inspire and get inspired by <span className="text-color-primary"> professional experts.</span></h3>
                                            </div>
                                            {/* section-title-wrap Start */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="ht-simple-job-listing move-up animate">
                                                <div clas="list">
                                                    <div className="item">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="job-info">
                                                                    <h5 className="job-name">IT Operations Specialist</h5>
                                                                    <span className="job-time">Full time</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="job-description">We are currently seeking a highly motivated individual to fill an I.T. This position will provide remote and onsite hands-on support to staff, vendors, and customers as well as, proactively identify issues.</div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="job-button text-md-center">
                                                                    <a className="ht-btn ht-btn-md ht-btn--solid" href="#">
                                                                        <span className="button-text">Get started </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="job-info">
                                                                    <h5 className="job-name">IT Desktop Support </h5>
                                                                    <span className="job-time">Full time</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="job-description">The BITS IT team believes in full transparency, being flexible, reliable and being great team players. We are problem solvers, always ready to help and support each other and the organization. </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="job-button text-md-center">
                                                                    <a className="ht-btn ht-btn-md ht-btn--solid" href="#">
                                                                        <span className="button-text">Get started </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="job-info">
                                                                    <h4 className="job-name">IT Summer Intern</h4>
                                                                    <span className="job-time">Full time</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="job-description">BITS is looking for a summer intern to work in the Information &amp; Technology Services area. This position is part of a team which supports Microsoft Server Operating Systems, storage systems, and Client device technologies.</div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="job-button text-md-center">
                                                                    <a className="ht-btn ht-btn-md ht-btn--solid" href="#">
                                                                        <span className="button-text">Get started </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="job-info">
                                                                    <h4 className="job-name">Software Engineer</h4>
                                                                    <span className="job-time">Full time</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="job-description">In partnership with others on the team, you will create enhancements and/or new services and solutions based data acquisition and analytics. You will analyze, design, program, debug and modify software interface for our system.</div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="job-button text-md-center">
                                                                    <a className="ht-btn ht-btn-md ht-btn--solid" href="#">
                                                                        <span className="button-text">Get started </span>
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
                            </div>
                            {/*======== careers-experts End ==========*/}
                            <div className="gallery-section section-space--ptb_100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title-wrap text-center">
                                                <h3 className="section-title mb-15 wow move-up">Pay a visit &amp; have some coffee!</h3>
                                                <div className="contact-button section-space--mt_30 wow move-up">
                                                    <a href="#" className="hover-style-link">View all team <i className="fas fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* gallery-wrapper Start */}
                                    <div className="gallery-wrapper section-space--pt_80 ">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/* gallery-warp Start */}
                                                <div className="gallery-warp popup-images ">
                                                    {/* single gallery Start */}
                                                    <a className="single-gallery gallery-grid wow move-up" href="images/gallery/blog-07-960x960.webp">
                                                        <div className="single-gallery__item">
                                                            <div className="single-gallery__thum bg-item-images bg-img" data-bg="images/gallery/blog-07-960x960.webp">
                                                            </div>
                                                            <div className="ht-overlay" />
                                                            <div className="overlay-icon">
                                                                <i className="fas fa-search" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {/* single gallery End */}
                                                    {/* single gallery Start */}
                                                    <a className="single-gallery gallery-grid wow move-up" href="images/gallery/careers-gallery-image-01-960x960.webp">
                                                        <div className="single-gallery__item">
                                                            <div className="single-gallery__thum bg-item-images bg-img" data-bg="images/gallery/careers-gallery-image-01-960x960.webp" />
                                                            <div className="ht-overlay" />
                                                            <div className="overlay-icon">
                                                                <i className="fas fa-search" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {/* single gallery End */}
                                                    {/* single gallery Start */}
                                                    <a className="single-gallery gallery-grid wow move-up" href="images/gallery/blog-08-960x960.webp">
                                                        <div className="single-gallery__item">
                                                            <div className="single-gallery__thum bg-item-images bg-img" data-bg="images/gallery/blog-08-960x960.webp" />
                                                            <div className="ht-overlay" />
                                                            <div className="overlay-icon">
                                                                <i className="fas fa-search" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {/* single gallery End */}
                                                    {/* single gallery Start */}
                                                    <a className="single-gallery gallery-grid wow move-up" href="images/gallery/blog-06-960x960.webp">
                                                        <div className="single-gallery__item">
                                                            <div className="single-gallery__thum bg-item-images bg-img" data-bg="images/gallery/blog-06-960x960.webp" />
                                                            <div className="ht-overlay" />
                                                            <div className="overlay-icon">
                                                                <i className="fas fa-search" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {/* single gallery End */}
                                                </div>
                                                {/* gallery-warp End */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* gallery-wrapper End */}
                                </div>
                            </div>
                            {/*====================  Conact us Section Start ====================*/}
                            <div className="contact-us-section-wrappaer infotechno-contact-us-bg section-space--ptb_120">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-lg-6">
                                            <div className="conact-us-wrap-one">
                                                <h3 className="heading">Obtaining further information by <span className="text-color-primary">make a contact</span> with our experienced IT staffs. </h3>
                                                <div className="sub-heading">We’re available for 8 hours a day!<br />Contact to require a detailed analysis and assessment of your plan.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-lg-6">
                                            <div className="contact-info-one text-center">
                                                <div className="icon">
                                                    <span className="fas fa-phone" />
                                                </div>
                                                <h6 className="heading font-weight--reguler">Reach out now!</h6>
                                                <h2 className="call-us"><a href="tel:190068668">1900 68668</a></h2>
                                                <div className="contact-us-button mt-20">
                                                    <a href="#" className="btn btn--secondary">Contact us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*====================  Contact us Section End  ====================*/}
                        </div>
                    </div>
                </div>
                {/*====================  Main End ====================*/}

                {/*====================  Footer Start ====================*/}
                <Footer />
                {/*====================  Footer End ====================*/}
            </div>
        </>
    )
}
