import React from 'react'

// components
import Header from '../shared/header.jsx';
import Footer from "../shared/footer.jsx";

export default function WhyChooseUs() {
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
                                        <h2 className="breadcrumb-title">Why choose us</h2>
                                        {/* breadcrumb-list start */}
                                        <ul className="breadcrumb-list">
                                            <li className="breadcrumb-item"><link to="/Home" />Home</li>
                                            <li className="breadcrumb-item active">Why choose us</li>
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
                            {/*===========  feature-large-images-wrapper  Start =============*/}
                            <div className="feature-large-images-wrapper section-space--ptb_100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* section-title-wrap Start */}
                                            <div className="section-title-wrap text-center section-space--mb_30">
                                                <h3 className="heading mb-20">Preparing for your success, <br /> we provide <span className="text-color-primary">truly prominent IT solutions.</span> </h3>
                                                <p className="title-dec-text">The IT services that BITS are running can be segmented by the type of skills employed to deliver the service (design, build, run). Technically, these fall into three main categories: business process services, application services, and infrastructure services.</p>
                                            </div>
                                            {/* section-title-wrap Start */}
                                        </div>
                                    </div>
                                    <div className="cybersecurity-about-box">
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="modern-number-01  mt-30">
                                                    <h2 className="heading  me-5"><span className="mark-text">38</span>Years’ Experience in IT</h2>
                                                    <h3 className="heading mt-30">Learn More About Our <span className="text-color-primary"> Success <br />Stories </span> </h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 offset-lg-1 wow move-up">
                                                <div className="progress-bar--one mt-30 section-space--mb_60">
                                                    {/* Start Single Progress Charts */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading ">UI/UX</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: '81%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">81%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* End Single Progress Charts */}
                                                    {/* Start Single Progress Charts */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading ">Ideas</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: '72%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">72%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* End Single Progress Charts */}
                                                    {/* Start Single Progress Charts */}
                                                    <div className="progress-charts ">
                                                        <h6 className="heading ">Marketing</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".8s" role="progressbar" style={{ width: '89%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">89%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* End Single Progress Charts */}
                                                    {/* Start Single Progress Charts */}
                                                    <div className="progress-charts ">
                                                        <h6 className="heading ">Consulting</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".9s" role="progressbar" style={{ width: '57%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">57%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* End Single Progress Charts */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===========  feature-large-images-wrapper  Start =============*/}
                                <div className="feature-large-images-wrapper section-space--pt_70">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row row--35">
                                                    <div className="col-lg-4 col-md-6 mt-30">
                                                        {/* Box large image warap Start */}
                                                        <a href="#" className="box-large-image__wrap wow move-up">
                                                            <div className="box-large-image__box">
                                                                <div className="box-large-image__midea">
                                                                    <div className="images-midea">
                                                                        <img src="images/box-image/blog-01-330x330.webp" className="img-fluid" alt="BITS" />
                                                                        <div className="button-wrapper">
                                                                            <div className="btn tm-button">
                                                                                <span className="button-text">Learn more</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="heading-wrap">
                                                                            <h5 className="heading">BITS Management Systems</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="box-large-image__content mt-30 text-center">
                                                                    <p>Our technical experts have a flair for developing <strong>clean-coded websites</strong> based on customers’ needs, global guidelines and trends.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        {/* Box large image warap End */}
                                                    </div>
                                                    <div className="col-lg-4 col-md-6  mt-30">
                                                        {/* Box large image warap Start */}
                                                        <a href="#" className="box-large-image__wrap wow move-up">
                                                            <div className="box-large-image__box">
                                                                <div className="box-large-image__midea">
                                                                    <div className="images-midea">
                                                                        <img src="images/box-image/BITS-home-infotechno-box-large-image-02-330x330.webp" className="img-fluid" alt="BITS" />
                                                                        <div className="button-wrapper">
                                                                            <div className="btn tm-button">
                                                                                <span className="button-text">Learn more</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="heading-wrap">
                                                                            <h5 className="heading">Efficient Database Security </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="box-large-image__content mt-30 text-center">
                                                                    <p>Our technical experts have a flair for developing <strong>clean-coded websites</strong> based on customers’ needs, global guidelines and trends.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        {/* Box large image warap End */}
                                                    </div>
                                                    <div className="col-lg-4 col-md-6  mt-30">
                                                        {/* Box large image warap Start */}
                                                        <a href="#" className="box-large-image__wrap wow move-up">
                                                            <div className="box-large-image__box">
                                                                <div className="box-large-image__midea">
                                                                    <div className="images-midea">
                                                                        <img src="images/box-image/BITS-home-infotechno-box-large-image-03-330x330.webp" className="img-fluid" alt="BITS" />
                                                                        <div className="button-wrapper">
                                                                            <div className="btn tm-button">
                                                                                <span className="button-text">Learn more</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="heading-wrap">
                                                                            <h5 className="heading">Reliable Multi-function Technology</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="box-large-image__content mt-40 text-center">
                                                                    <p>Our technical experts have a flair for developing <strong>clean-coded websites</strong> based on customers’ needs, global guidelines and trends.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        {/* Box large image warap End */}
                                                    </div>
                                                </div>
                                                <div className="section-under-heading text-center section-space--mt_40">Challenges are just opportunities in disguise. <a href="#">Take the challenge!</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===========  feature-large-images-wrapper  End =============*/}
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
