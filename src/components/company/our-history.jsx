import React from 'react'
import { Link } from "react-router-dom";

// components
import Header from '../shared/header.jsx';
import Footer from "../shared/footer.jsx";

export default function OurHistory() {
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
                                        <h2 className="breadcrumb-title">Our history</h2>
                                        {/* breadcrumb-list start */}
                                        <ul className="breadcrumb-list">
                                            <li className="breadcrumb-item"><Link to="/home" />Home</li>
                                            <li className="breadcrumb-item active">Our history</li>
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
                            {/*===========  our history wrapper  Start =============*/}
                            <div className="our-history-wrapper section-space--ptb_100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* section-title-wrap Start */}
                                            <div className="section-title-wrap text-center section-space--mb_30">
                                                <h3 className="heading mb-20">We create dreams <span className="text-color-primary"> for the future.</span> <br /> We realize them sucessfully. </h3>
                                                <p className="title-dec-text">You know that you found your dream when you have a desire to achieve a goal, have the gut to pursue it, have the courage to overcome any obstacles on your path and feel blessed when finally realizing it. Dream on, keep up and make it pay off.</p>
                                            </div>
                                            {/* section-title-wrap Start */}
                                        </div>
                                    </div>
                                    <div className="timeline-area section-space--pt_60">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ht-timeline style-01">
                                                    <ul className="tm-timeline-list ht-animation-queue">
                                                        <li className="line" />
                                                        <li className="item animate">
                                                            <div className="dots">
                                                                <div className="middle-dot" />
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 timeline-col left timeline-feature">
                                                                    <div className="inner">
                                                                        <div className="date-wrap">
                                                                            <h2 className="year">1988</h2>
                                                                        </div>
                                                                        <div className="photo">
                                                                            <img src="images/timeline/timeline-image-01.webp" alt="timeline-image-01" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 timeline-col right timeline-info">
                                                                    <div className="inner">
                                                                        <div className="content-wrap">
                                                                            <div className="content-body">
                                                                                <h6 className="heading">The Foundation of BITS</h6>
                                                                                <div className="text">
                                                                                    The beginning of BITS Co. was laid by three men: Jackie Moodle, Alan Morray and Burrow Kills. Back in 1988, three passionate young pupils, whose major is Information Technology, had discussed with each other about starting a company to deliver technological &amp; digital services in an old rented apartment. </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="item animate">
                                                            <div className="dots">
                                                                <div className="middle-dot" />
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 timeline-col left timeline-feature">
                                                                    <div className="inner">
                                                                        <div className="date-wrap">
                                                                            <h6 className="year"> 1993 </h6>
                                                                        </div>
                                                                        <div className="photo">
                                                                            <img src="images/timeline/timeline-image-02.webp" alt="timeline-image-01" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 timeline-col right timeline-info">
                                                                    <div className="inner">
                                                                        <div className="content-wrap">
                                                                            <div className="content-body">
                                                                                <h6 className="heading">BITS’s Golden Age</h6>
                                                                                <div className="text">
                                                                                    BITS had been operating for 5 years when it reached the golden age in the company’s history. They received two prestigious awards for Dedicated Services &amp; Community Contribution (in 1990), plus three successive award nominations for Best IT Company of the year (respectively in 1991, 1992 &amp; 1993).
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="item animate">
                                                            <div className="dots">
                                                                <div className="middle-dot" />
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 timeline-col left timeline-feature">
                                                                    <div className="inner">
                                                                        <div className="date-wrap">
                                                                            <h6 className="year"> 1995 </h6>
                                                                        </div>
                                                                        <div className="photo">
                                                                            <img src="images/timeline/blog-07-500x350.webp" alt="timeline-image-01" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 timeline-col right timeline-info">
                                                                    <div className="inner">
                                                                        <div className="content-wrap">
                                                                            <div className="content-body">
                                                                                <h6 className="heading">BITS’s Turning Point</h6>
                                                                                <div className="text">
                                                                                    The company has a turning point in 1995 when one of its founders left the board of the management and established a new company in Healthcare &amp; Assurance – HealSoul. Later on, BITS and HealSoul have successfully cooperated in several projects to integrate technology into taking care of people’s health. .
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===========  feature-large-images-wrapper  End =============*/}
                            {/*============ Contact Us Area Start =================*/}
                            <div className="contact-us-area infotechno-contact-us-bg section-space--pt_100">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="image">
                                                <img className="img-fluid" src="images/banners/home-cybersecurity-contact-bg-image.webp" alt="BITS" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ms-auto">
                                            <div className="contact-info style-two text-left">
                                                <div className="contact-info-title-wrap text-center">
                                                    <h3 className="heading  mb-10">4.9/5.0</h3>
                                                    <div className="ht-star-rating lg-style">
                                                        <span className="fa fa-star" />
                                                        <span className="fa fa-star" />
                                                        <span className="fa fa-star" />
                                                        <span className="fa fa-star" />
                                                        <span className="fa fa-star" />
                                                    </div>
                                                    <p className="sub-text">by 700+ customers for 3200+ clients</p>
                                                </div>
                                                <div className="contact-list-item">
                                                    <a href="tel:190068668" className="single-contact-list">
                                                        <div className="content-wrap">
                                                            <div className="content">
                                                                <div className="icon">
                                                                    <span className="fas fa-phone" />
                                                                </div>
                                                                <div className="main-content">
                                                                    <h6 className="heading">Call for advice now!</h6>
                                                                    <div className="text">1900 68668</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="mailto:hello@BITS.com" className="single-contact-list">
                                                        <div className="content-wrap">
                                                            <div className="content">
                                                                <div className="icon">
                                                                    <span className="far fa-envelope" />
                                                                </div>
                                                                <div className="main-content">
                                                                    <h6 className="heading">Say hello</h6>
                                                                    <div className="text">hello@BITS.com</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*============ Contact Us Area End =================*/}
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
