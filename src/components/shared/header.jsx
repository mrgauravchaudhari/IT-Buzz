import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation(); // gives you the current URL path
  let isActive = location.pathname;

  console.log(isActive);

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    // Simulate a loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 1 second loading time

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <>
      <div className={`preloader-activate open_tm_preloader preloader-active ${loading == false ? " loaded" : ""}`} id="preloader">
        <div className="preloader-area-wrap">
          <div className="spinner d-flex justify-content-center align-items-center h-100">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </div>
        </div>
      </div>

      {/*====================  header area ====================*/}
      <div className="header-area">
        {/* Header Top Wrap Start */}
        <div className="header-top-wrap border-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <p className="text-center top-message">
                  <a href="#">Now Hiring:</a> Are you a driven and motivated 1st Line IT Support Engineer?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Header Top Wrap End */}
        <div className="header-bottom-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header position-relative">
                  {/* brand logo */}
                  <div className="header__logo top-logo">
                    <Link to="/home">
                      <img src="images/logo/logo-dark.webp" aria-label="BITS Logo" width={160} height={48} className="img-fluid" alt="BITS" />
                    </Link>
                  </div>
                  <div className="header-right flexible-image-slider-wrap">
                    <div className="header-right-inner" id="hidden-icon-wrapper">
                      {/* Header Search Form */}
                      <div className="header-search-form d-md-none d-block">
                        <form action="#" className="search-form-top">
                          <input className="search-field" type="text" placeholder="Search…" />
                          <button className="search-submit">
                            <i className="search-btn-icon fa fa-search" />
                          </button>
                        </form>
                      </div>
                      {/* Header Top Info */}
                      <div className="swiper-container header-top-info-slider-werap top-info-slider__container">
                        <div className="swiper-wrapper header-top-info-inner default-color">
                          <div className="swiper-slide">
                            <div className="info-item">
                              <div className="info-icon">
                                <span className="fa fa-phone" />
                              </div>
                              <div className="info-content">
                                <h6 className="info-title">0122 8899900</h6>
                                <div className="info-sub-title">bizitsolutionofindia@gmail.com</div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="info-item">
                              <div className="info-icon">
                                <span className="fa fa-map-marker-alt" />
                              </div>
                              <div className="info-content">
                                <h6 className="info-title">219 Amara Fort Apt. 394</h6>
                                <div className="info-sub-title">New York, NY 941</div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="info-item">
                              <div className="info-icon">
                                <span className="fa fa-clock" />
                              </div>
                              <div className="info-content">
                                <h6 className="info-title">10:00AM - 6:00PM</h6>
                                <div className="info-sub-title">Monday to Saturday</div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="swiper-slide">
                                                        <div className="info-item">
                                                            <div className="info-icon">
                                                                <span className="fas fa-comment-alt" />
                                                            </div>
                                                            <div className="info-content">
                                                                <h6 className="info-title">Online 24/7</h6>
                                                                <div className="info-sub-title">+122 123 4567</div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                        </div>
                      </div>
                      {/* Header Social Networks */}
                      <div className="header-social-networks style-icons">
                        <div className="inner">
                          <a className=" social-link hint--black hint--bottom-left" aria-label="Twitter" href="https://twitter.com" data-hover="Twitter" target="_blank">
                            <i className="social-icon fab fa-twitter" />
                          </a>
                          <a className=" social-link hint--black hint--bottom-left" aria-label="Facebook" href="https://facebook.com" data-hover="Facebook" target="_blank">
                            <i className="social-icon fab fa-facebook-f" />
                          </a>
                          <a className=" social-link hint--black hint--bottom-left" aria-label="Instagram" href="https://instagram.com" data-hover="Instagram" target="_blank">
                            <i className="social-icon fab fa-instagram" />
                          </a>
                          <a className=" social-link hint--black hint--bottom-left" aria-label="Linkedin" href="https://linkedin.com" data-hover="Linkedin" target="_blank">
                            <i className="social-icon fab fa-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* mobile menu */}
                    <div className="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger">
                      <i />
                    </div>
                    {/* hidden icons menu */}
                    <div className="hidden-icons-menu d-block d-md-none" id="hidden-icon-trigger">
                      <a href="javascript:void(0)">
                        <i className="far fa-ellipsis-h-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom-wrap bg-theme-default d-md-block d-none header-sticky">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-bottom-inner position-relative">
                    <div className="header-bottom-left-wrap">
                      {/* navigation menu */}
                      <div className="header__navigation d-none d-xl-block">
                        <nav className="navigation-menu navigation-menu--text_white">
                          <ul>
                            <li className={location.pathname === "/" || location.pathname === "/home" ? "active" : ""}>
                              <Link to="/home">
                                <span>Home</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/company-about-us" ||
                                location.pathname === "/company-contact-us" ||
                                location.pathname === "/company-why-choose-us" ||
                                location.pathname === "/company-our-history" ||
                                location.pathname === "/company-careers"
                                  ? "has-children has-children--multilevel-submenu active"
                                  : "has-children has-children--multilevel-submenu"
                              }
                            >
                              <a href="#">
                                <span>Company</span>
                              </a>
                              <ul className="submenu">
                                <li className={location.pathname === "/company-about-us" ? "active" : ""}>
                                  <Link to="/company-about-us">
                                    <span>About us</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/company-contact-us" ? "active" : ""}>
                                  <Link to="/company-contact-us">
                                    <span>Contact us</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/company-why-choose-us" ? "active" : ""}>
                                  <Link to="/company-why-choose-us">
                                    <span>Why choose us</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/company-our-history" ? "active" : ""}>
                                  <Link to="/company-our-history">
                                    <span>Our history</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/company-careers" ? "active" : ""}>
                                  <Link to="/company-careers">
                                    <span>Careers</span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li
                              className={
                                location.pathname === "/solutions-tech" ||
                                location.pathname === "/solutions-AI-ML" ||
                                location.pathname === "/solutions-analytics-BI" ||
                                location.pathname === "/solutions-cloud" ||
                                location.pathname === "/solutions-data-quality-and-governance" ||
                                location.pathname === "/solutions-financial-technology" ||
                                location.pathname === "/solutions-reconciliation-platforms" ||
                                location.pathname === "/solutions-regulatory-and-compliance"
                                  ? "has-children has-children--multilevel-submenu active"
                                  : "has-children has-children--multilevel-submenu"
                              }
                            >
                              <a href="#">
                                <span>Solutions</span>
                              </a>
                              <ul className="submenu">
                                {/* <li><Link to="/solutions-it-services"><span>IT Services</span></Link></li>
                                                                <li><Link to="/solutions-managed-it-services"><span>Managed IT Services</span></Link></li>
                                                                <li><Link to="/solutions-industries"><span>Industries</span></Link></li>
                                                                <li><Link to="/solutions-business-solution"><span>Business solution</span></Link></li> */}
                                <li className={location.pathname === "/solutions-tech" ? "active" : ""}>
                                  <Link to="/solutions-tech">
                                    <span>Tech Solutions</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/solutions-AI-ML" ? "active" : ""}>
                                  <Link to="/solutions-AI-ML">
                                    <span>AI & ML Solutions</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/solutions-analytics-BI" ? "active" : ""}>
                                  <Link to="/solutions-analytics-BI">
                                    <span>Analytics & BI</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/solutions-cloud" ? "active" : ""}>
                                  <Link to="/solutions-cloud">
                                    <span>Cloud Solutions</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/solutions-data-quality-and-governance" ? "active" : ""}>
                                  <Link to="/solutions-data-quality-and-governance">
                                    <span>Data Quality & Governance</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/solutions-financial-technology" ? "active" : ""}>
                                  <Link to="/solutions-financial-technology">
                                    <span>Financial Technology Services</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/solutions-reconciliation-platforms" ? "active" : ""}>
                                  <Link to="/solutions-reconciliation-platforms">
                                    <span>Reconciliation Platforms</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/solutions-regulatory-and-compliance" ? "active" : ""}>
                                  <Link to="/solutions-regulatory-and-compliance">
                                    <span>Regulatory & Compliance Services</span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className={
                                location.pathname === "/case-studies" ||
                                location.pathname === "/blogs"
                                  ? "has-children has-children--multilevel-submenu active"
                                  : "has-children has-children--multilevel-submenu"
                              }>
                              <a href="#">
                                <span>Case Studies</span>
                              </a>
                              {/* multilevel submenu */}
                              <ul className="submenu">
                                <li className={location.pathname === "/case-studies" ? "active" : ""}>
                                  <Link to="/case-studies">
                                    <span>Case Studies</span>
                                  </Link>
                                </li>
                                <li className={location.pathname === "/blogs" ? "active" : ""}>
                                  <Link to="/blogs">
                                    <span>Blog</span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    {/* <div className="header-search-form ">
                                            <form action="#" className="search-form-top style-03 ">
                                                <input className="search-field" type="text" placeholder="Search…" />
                                                <button className="search-submit">
                                                    <i className="search-btn-icon fa fa-search" />
                                                </button>
                                            </form>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of header area  ====================*/}

      {/*====================  mobile menu overlay ====================*/}
      <div className="mobile-menu-overlay" id="mobile-menu-overlay">
        <div className="mobile-menu-overlay__inner">
          <div className="mobile-menu-overlay__header">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-6 col-8">
                  {/* logo */}
                  <div className="logo">
                    <a href="#">
                      <img src="images/logo/logo-dark.webp" className="img-fluid" alt="BITS" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-4">
                  {/* mobile menu content */}
                  <div className="mobile-menu-content text-end">
                    <span className="mobile-navigation-close-icon" id="mobile-menu-close-trigger" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-overlay__body">
            <nav className="offcanvas-navigation">
              <ul>
                <li>
                  <Link to="/home">
                    <span>Home</span>
                  </Link>
                </li>
                <li className="has-children">
                  <a href="javascript:void;">Company</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/company-about-us">
                        <span>About us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/company-contact-us">
                        <span>Contact us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/company-why-choose-us">
                        <span>Why choose us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/company-our-history">
                        <span>Our history</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/company-careers">
                        <span>Careers</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">Solutions</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/solutions-it-services">
                        <span>IT Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions-managed-it-services">
                        <span>Managed IT Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions-industries">
                        <span>Industries</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions-business-solution">
                        <span>Business solution</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="javascript:void(0)">Case Studies</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/case-studies">
                        <span>Case Studies</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blogs">
                        <span>Blog</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/*====================  End of mobile menu overlay  ====================*/}

      {/*====================  search overlay ====================*/}
      <div className="search-overlay" id="search-overlay">
        <div className="search-overlay__header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6 ms-auto col-4">
                {/* search content */}
                <div className="search-content text-end">
                  <span className="mobile-navigation-close-icon" id="search-close-trigger" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-overlay__inner">
          <div className="search-overlay__body">
            <div className="search-overlay__form">
              <form action="#">
                <input type="text" placeholder="Search" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of search overlay  ====================*/}
    </>
  );
}
