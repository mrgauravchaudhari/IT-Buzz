import React from 'react'

// components
import Header from '../shared/header.jsx';
import Footer from "../shared/footer.jsx";

export default function ContactUs() {
    return (
        <>
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
                                    <h2 className="breadcrumb-title">Contact us</h2>
                                    {/* breadcrumb-list start */}
                                    <ul className="breadcrumb-list">
                                        <li className="breadcrumb-item"><link to="/Home" />Home</li>
                                        <li className="breadcrumb-item active">Contact us </li>
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
                        {/*====================  Conact us Section Start ====================*/}
                        <div className="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-lg-6">
                                        <div className="conact-us-wrap-one mb-30">
                                            <h3 className="heading">To make requests for <br />further information, <br /><span className="text-color-primary">contact us</span> via our social channels. </h3>
                                            <div className="sub-heading">We just need a couple of hours! <br /> No more than 2 working days since receiving your issue ticket.</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-lg-6">
                                        <div className="contact-form-wrap">
                                            {/* <form id="contact-form" action="http://whizthemes.com/mail-php/jowel/BITS/php/mail.php" method="post"> */}
                                            <form id="contact-form" action="php/mail.php" method="post">
                                                <div className="contact-form">
                                                    <div className="contact-input">
                                                        <div className="contact-inner">
                                                            <input name="con_name" type="text" placeholder="Name *" required />
                                                        </div>
                                                        <div className="contact-inner">
                                                            <input name="con_email" type="email" placeholder="Email *" required />
                                                        </div>
                                                    </div>
                                                    <div className="contact-inner">
                                                        <input name="con_subject" type="text" placeholder="Subject *" required />
                                                    </div>
                                                    <div className="contact-inner contact-message">
                                                        <textarea name="con_message" placeholder="Please describe what you need." required defaultValue={""} />
                                                    </div>
                                                    <div className="submit-btn mt-20">
                                                        <button className="ht-btn ht-btn-md" type="submit">Send message</button>
                                                        <p className="form-messege" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====================  Conact us Section End  ====================*/}
                        {/*====================  Conact us info Start ====================*/}
                        <div className="contact-us-info-wrappaer section-space--pb_100">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="conact-info-wrap mt-30">
                                            <h5 className="heading mb-20">San Francisco</h5>
                                            <ul className="conact-info__list">
                                                <li>58 Howard Street #2 San Francisco, CA 941</li>
                                                <li><a href="#" className="hover-style-link text-color-primary">contact.sanfrancisco@BITS.com</a></li>
                                                <li><a href="#" className="hover-style-link text-black font-weight--bold">(+68)1221 09876</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="conact-info-wrap mt-30">
                                            <h5 className="heading mb-20">New York</h5>
                                            <ul className="conact-info__list">
                                                <li>58 Howard Street #14 New York</li>
                                                <li><a href="#" className="hover-style-link text-color-primary">contact.newyork@BITS.com</a></li>
                                                <li><a href="#" className="hover-style-link text-black font-weight--bold">(+47)1221 09878</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="conact-info-wrap mt-30">
                                            <h5 className="heading mb-20">Russia</h5>
                                            <ul className="conact-info__list">
                                                <li>The Courtyard Building 11 Curtain Road, Russia</li>
                                                <li><a href="#" className="hover-style-link text-color-primary">contact.russia@BITS.com</a></li>
                                                <li><a href="#" className="hover-style-link text-black font-weight--bold">(+53)1221 09877</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====================  Conact us info End  ====================*/}
                    </div>
                </div>
            </div>
            {/*====================  Main End ====================*/}

            {/*====================  Footer Start ====================*/}
            <Footer />
            {/*====================  Footer End ====================*/}
        </>
    )
}
