import React from 'react';
import "../assets/css/main.css"
import {
  Logo,
  CodeGemiLogo,
  Hero,
  HeroShape,
  BrandLogo1,
  BrandLogo2,
  BrandLogo3,
  BrandLogo4,
  BrandLogo5,
  SubtitleIcon,
  StarIcon1,
  StarIcon2,
  WcuIcon1,
  WcuIcon2,
  WcuIcon3,
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ArrowLeft,
  ArrowRight,
  ArrowLeftWhite,
  ArrowRightWhite,
  AboutIcon,
  ProfileShape,
  AboutShape1,
  AboutShape2,
  AboutShape3,
  AboutShape4,
  WorkProcessShape1,
  WorkProcessShape2,
  WorkProcessShape3,
  BackImage,
  ComputerMan,
  BusinessSolution,
  PDLImage,
} from '../assets/assets.js';

const Home = () => {
  return (
    <div>
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="E" className="letters-loading">
              C
            </span>
            <span data-text-preloader="X" className="letters-loading">
              O
            </span>
            <span data-text-preloader="T" className="letters-loading">
              D
            </span>
            <span data-text-preloader="E" className="letters-loading">
              G
            </span>
            <span data-text-preloader="C" className="letters-loading">
              E
            </span>
            <span data-text-preloader="H" className="letters-loading">
              M
            </span>
            <span data-text-preloader="H" className="letters-loading">
              I
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index.php">
                    <img src={Logo} alt="logo-img" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-lg-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo
                urna eget eros. Duis Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@azent.com">
                        <span className="mailto:info@example.com">info@example.com</span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <a href="contact.php" className="theme-btn text-center">
                    <span>get A Quote<i className="fa-solid fa-arrow-right-long"></i></span>
                  </a>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>

      <header>
        <div id="header-sticky" className="header-4" style={{ height: '100px' }}>
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <a href="index.php" className="header-logo">
                      <img
                        src={CodeGemiLogo}
                        alt="logo-img"
                        style={{ width: '120px', height: '80px' }}
                      />
                    </a>
                  </div>
                </div>
                <div className="header-middle">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-dropdown active menu-thumb">
                            <a href="index.php">Home</a>
                          </li>

                          <li>
                            <a href="about.php">About</a>
                          </li>
                          <li>
                            <a href="service.php">
                              Services
                              <i className="fas fa-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li><a href="/">Services</a></li>
                              <li><a href="/">Service Carousel</a></li>
                              <li><a href="/">Service Details</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="news.php">
                              Pages
                              <i className="fas fa-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li className="has-dropdown">
                                <a href="project.php">
                                  Projects
                                  <i className="fas fa-angle-down"></i>
                                </a>
                                <ul className="submenu">
                                  <li><a href="project.php">Project</a></li>
                                  <li><a href="project-carousel.php">Project Carousel</a></li>
                                  <li><a href="project-details.php">Project Details</a></li>
                                </ul>
                              </li>
                              <li className="has-dropdown">
                                <a href="team.php">
                                  Team
                                  <i className="fas fa-angle-down"></i>
                                </a>
                                <ul className="submenu">
                                  <li><a href="team.php">Our Team</a></li>
                                  <li><a href="team-carousel.php">Team Carousel</a></li>
                                  <li><a href="team-details.php">Team Details</a></li>
                                </ul>
                              </li>
                              <li><a href="pricing.php">Pricing</a></li>
                              <li><a href="faq.php">Faq's</a></li>
                              <li><a href="404.php">404 Page</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="news.php">
                              Blog
                              <i className="fas fa-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li><a href="news.php">Blog Grid</a></li>
                              <li><a href="news-standard.php">Blog Standard</a></li>
                              <li><a href="news-details.php">Blog Details</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.php">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="header-right d-flex justify-content-end align-items-center">
                  <a href="#0" className="search-trigger search-icon text-white">
                    <i className="fal fa-search"></i>
                  </a>
                  <a className="text-white" href="#0">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                  <div className="header-button ms-4">
                    <a href="contact.php" className="gt-btn bg-white text-dark">
                      <span>
                        get A Quote
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </span>
                    </a>
                  </div>
                  <div className="header__hamburger d-block d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <i className="fas fa-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close"></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="hero-section section-padding pb-0 fix">
        <div className="hero-wrapper style2">
          <div className="container">
            <div className="hero-main-container style2 border-radius" id="body">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 order-2 order-xl-1">
                    <div className="hero-content style2">
                      <h6 className="subtitle">
                        {' '}
                        <img src={SubtitleIcon} alt="icon" /> We are experts in AI-powered web
                        development and services
                      </h6>
                      <h1>Business innovation fueled by IT services excellence</h1>
                      <p className="text">
                        We drive business innovation with AI-driven IT services tailored for modern enterprises. Our
                        intelligent solutions enhance efficiency, streamline operations, and unlock new opportunities.
                      </p>
                      <div className="contact-meta">
                        <div className="btn-wrapper">
                          <a href="contact.php" className="gt-btn style6">
                            get Started <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 order-1 order-xl-2">
                    <div className="hero-thumb style2">
                      <div className="video-box">
                        <a
                          href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
                          className="play-btn popup-video"
                        >
                          <img className="rotate360" src={HeroShape} alt="shape" />
                        </a>
                      </div>

                      <div className="main-thumb img-custom-anim-left wow fadeInUp" data-wow-delay=".3s">
                        <img src={Hero} alt="thumb" />
                      </div>
                      <div
                        className="fancy-box-wrapper style4 mt-40 justify-content-center wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <div className="fancy-box style4">
                          <div className="title">
                            <img src={StarIcon1} alt="icon" /> Trustipilot
                          </div>
                          <div className="item-wrap">
                            <div className="item">
                              <img src={ProfileShape} alt="shape" />
                            </div>
                            <div className="item">
                              <div className="star-wrapper">
                                <img src={StarIcon2} alt="icon" />
                                <img src={StarIcon2} alt="icon" />
                                <img src={StarIcon2} alt="icon" />
                              </div>
                              <h6>450+ reviews</h6>
                            </div>
                          </div>
                        </div>
                        <div className="fancy-box style4 border-0">
                          <div className="title">Google</div>
                          <div className="item-wrap">
                            <div className="item">
                              <img src={ProfileShape} alt="shape" />
                            </div>
                            <div className="item">
                              <div className="star-wrapper">
                                <img src={StarIcon2} alt="icon" />
                                <img src={StarIcon2} alt="icon" />
                                <img src={StarIcon2} alt="icon" />
                              </div>
                              <h6>450+ reviews</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ position: 'absolute' }}>
                <clipPath id="heroMask2">
                  <path
                    d="M0 30C0 13.4315 13.4315 0 30 0H1830C1846.57 0 1860 13.4315 1860 30L1860 851C1860 867.569 1846.57 881 1830 881H1051.52C1033.75 881 1016.9 873.125 1005.5 859.495L955.737 800.005C944.337 786.375 927.483 778.5 909.714 778.5H30C13.4315 778.5 0 765.069 0 748.5V30Z"
                    fill="#384BFF"
                  />
                </clipPath>
              </svg>
            </div>

            <div className="brand-slider-section">
              <div className="brand-slider-container-wrapper style2 border-1">
                <div className="container">
                  <div className="row">
                    <div className="slider-area brandSliderTwo">
                      <div
                        className="swiper gt-slider"
                        id="brandSliderTwo"
                        data-slider-options='{"loop": true, "breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":2,"centeredSlides":true},"768":{"slidesPerView":2},"992":{"slidesPerView":2},"1200":{"slidesPerView":3}}}'
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="brand-logo">
                              <img src={BrandLogo1} alt="brandLogo" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="brand-logo">
                              <img src={BrandLogo2} alt="brandLogo" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="brand-logo">
                              <img src={BrandLogo3} alt="brandLogo" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="brand-logo">
                              <img src={BrandLogo4} alt="brandLogo" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="brand-logo">
                              <img src={BrandLogo5} alt="brandLogo" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="brand-logo">
                              <img src={BrandLogo1} alt="brandLogo" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="brand-logo">
                              <img src={BrandLogo2} alt="brandLogo" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="brand-logo">
                              <img src={BrandLogo3} alt="brandLogo" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="brand-logo">
                              <img src={BrandLogo4} alt="brandLogo" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="brand-logo">
                              <img src={BrandLogo5} alt="brandLogo" />
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
      </section>

      <section className="wcu-section section-padding fix">
        <div className="wcu-wrapper style2">
          <div className="container">
            <div className="row gy-5">
              <div className="col-xl-4 col-md-6">
                <div className="wcu-card style2 wow fadeInUp" data-wow-delay=".3s">
                  <div className="wcu-icon">
                    <img src={WcuIcon1} alt="icon" />
                  </div>
                  <div className="wcu-content">
                    <h3>Highly Expert Team</h3>
                    <p>Our consulting of process begins with thorough assessment of your current</p>
                    <a href="service-details.php" className="link-btn style1">
                      Read more <i className="fa-regular fa-chevrons-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="wcu-card style2 wow fadeInUp" data-wow-delay=".6s">
                  <div className="wcu-icon">
                    <img src={WcuIcon2} alt="icon" />
                  </div>
                  <div className="wcu-content">
                    <h3>24/7 Customer Services</h3>
                    <p>Our consulting of process begins with thorough assessment of your current</p>
                    <a href="service-details.php" className="link-btn style1">
                      Read more <i className="fa-regular fa-chevrons-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="wcu-card style2 wow fadeInUp" data-wow-delay=".8s">
                  <div className="wcu-icon">
                    <img src={WcuIcon3} alt="icon" />
                  </div>
                  <div className="wcu-content">
                    <h3>Competitive Pricing</h3>
                    <p>Our consulting of process begins with thorough assessment of your current</p>
                    <a href="service-details.php" className="link-btn style1">
                      Read more <i className="fa-regular fa-chevrons-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section space fix">
        <div className="service-container-wrapper style1">
          <div className="container">
            <div className="title-wrap mb-45">
              <div className="section-title">
                <div className="subtitle">
                  {' '}
                  <img src={ArrowLeft} alt="icon" /> <span> Our Services </span>
                  <img src={ArrowRight} alt="icon" />
                </div>
                <h2 className="title">Tailored IT Solutions for Your Business Needs</h2>
              </div>
              <div className="arrow-btn text-end wow fadeInUp" data-wow-delay=".9s">
                <button data-slider-prev="#serviceSliderOne" className="slider-arrow style1">
                  <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
                </button>
                <button data-slider-next="#serviceSliderOne" className="slider-arrow style1 slider-next">
                  <i className="fa-regular fa-arrow-right-long"></i>
                </button>
              </div>
            </div>

            <div className="row">
              <div className="slider-area serviceSliderOne">
                <div
                  className="swiper gt-slider"
                  id="serviceSliderOne"
                  data-slider-options='{"loop": true, "breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":2,"centeredSlides":true},"768":{"slidesPerView":2},"992":{"slidesPerView":3},"1200":{"slidesPerView":4}}}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="service-card style1">
                        <div className="icon">
                          <img src={ServiceIcon1} alt="icon" />
                        </div>
                        <div className="body">
                          <h3>
                            {' '}
                            <a href="service-details.php">Uipath Automation</a>{' '}
                          </h3>
                          <p>
                            UiPath automation drives the transformation and continuous evolution of hosting services by
                            fostering collaboration, innovation, efficiency, and intelligent solutions across
                            industries.
                          </p>
                          <a href="service-details.php" className="link-btn style1">
                            Read more <i className="fa-regular fa-chevrons-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="service-card style1">
                        <div className="icon">
                          <img src={ServiceIcon2} alt="icon" />
                        </div>
                        <div className="body">
                          <h3>
                            {' '}
                            <a href="service-details.php">Application Development</a>{' '}
                          </h3>
                          <p>
                            Application software drives innovation, strengthens digital foundations, and leverages AI to
                            deliver intelligent, future-ready solutions that transform industries.
                          </p>
                          <a href="service-details.php" className="link-btn style1">
                            Read more <i className="fa-regular fa-chevrons-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="service-card style1">
                        <div className="icon">
                          <img src={ServiceIcon3} alt="icon" />
                        </div>
                        <div className="body">
                          <h3>
                            {' '}
                            <a href="service-details.php">Software Development</a>{' '}
                          </h3>
                          <p>
                            Software development empowers innovation, strengthens digital foundations, and uses AI
                            technology to accelerate advanced solutions that are intelligent, future-ready, and built to
                            transform industries.
                          </p>
                          <a href="service-details.php" className="link-btn style1">
                            Read more <i className="fa-regular fa-chevrons-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="service-card style1">
                        <div className="icon">
                          <img src={ServiceIcon4} alt="icon" />
                        </div>
                        <div className="body">
                          <h3>
                            {' '}
                            <a href="service-details.php">Web Development</a>{' '}
                          </h3>
                          <p>
                            Web development partnerships build strong foundations, foster innovation, and drive the
                            evolution of cutting-edge digital services, delivering intelligent, transformative, and
                            future-ready solutions.
                          </p>
                          <a href="service-details.php" className="link-btn style1">
                            Read more <i className="fa-regular fa-chevrons-right"></i>
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
      </section>

      <section className="about-section space fix bg-theme-color">
        <div className="about-container-wrapper style1">
          <div className="shape1">
            <img src={AboutShape1} alt="shape" />
          </div>
          <div className="shape2">
            <img src={AboutShape2} alt="shape" />
          </div>
          <div className="shape3">
            <img src={AboutShape3} alt="shape" />
          </div>
          <div className="container">
            <div className="row gy-5 gx-70">
              <div className="col-xl-6">
                <div className="about-thumb">
                  <div className="thumb1">
                    <img
                      className="img-custom-anim-left wow fadeInUp"
                      data-wow-delay=".5s"
                      src={BackImage}
                      alt="thumb"
                    />

                    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ position: 'absolute' }}>
                      <clipPath id="aboutThumbdMask1">
                        <path d="M0 20C0 8.95431 8.9543 0 20 0H395.5C423.114 0 445.5 22.3858 445.5 50V72.5C445.5 100.114 467.886 122.5 495.5 122.5H520C547.614 122.5 570 144.886 570 172.5V321.5L562.197 537.223C561.808 547.98 552.975 556.5 542.21 556.5H20C8.95432 556.5 0 547.546 0 536.5V20Z" />
                      </clipPath>
                    </svg>
                  </div>
                  <div className="thumb2">
                    <img
                      className="img-custom-anim-top wow fadeInUp"
                      data-wow-delay=".8s"
                      src={ComputerMan}
                      alt="thumb"
                    />
                  </div>

                  <div className="shape">
                    <a href="contact.php">
                      <img className="rotate360" src={AboutShape4} alt="shape" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-content">
                  <div className="section-title mxw-560">
                    <div className="subtitle text-white wow fadeInUp" data-wow-delay=".3s">
                      {' '}
                      <img src={ArrowLeftWhite} alt="icon" />{' '}
                      <span className="text-white"> about company </span>
                      <img src={ArrowRightWhite} alt="icon" />
                    </div>
                    <h2 className="title text-white wow fadeInUp" data-wow-delay=".6s">
                      Navigating Tech Horizons Together
                    </h2>
                    <p className="mt-25 text-white wow fadeInUp" data-wow-delay=".5s">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable. If you
                    </p>
                  </div>
                  <div className="fancy-box-wrapper style2">
                    <div className="fancy-box style2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="item">
                        <div className="icon">
                          <img src={AboutIcon} alt="icon" />
                        </div>
                      </div>
                      <div className="item">
                        <h6>Back-End Development</h6>
                      </div>
                    </div>
                    <div className="fancy-box style2 wow fadeInUp" data-wow-delay=".5s">
                      <div className="item">
                        <div className="icon">
                          <img src={AboutIcon} alt="icon" />
                        </div>
                      </div>
                      <div className="item">
                        <h6>Product Design</h6>
                      </div>
                    </div>
                  </div>
                  <div className="counter-box-wrapper style1">
                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".3s">
                      <h3>
                        <span className="counter-number">150</span> +
                      </h3>
                      <h6>Projects Done</h6>
                    </div>
                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".5s">
                      <h3>
                        <span className="counter-number">170</span> +
                      </h3>
                      <h6>Happy Clients</h6>
                    </div>
                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".8s">
                      <h3>
                        <span className="counter-number">10</span> +
                      </h3>
                      <h6>Team Members</h6>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-process-section">
        <div className="work-process-container-wrapper style2 pb-0 pb-xl-5 bg-transparent" style={{ marginTop: '1.5rem' }}>
          <div className="shape">
            <a href="contact.php">
              {' '}
              <img className="rotate360" src={WorkProcessShape3} alt="shape" />{' '}
            </a>
          </div>
          <div className="container">
            <div className="work-process-wrapper style2 section-padding fix border-radius bg-theme-color">
              <div className="shape1 d-none d-xxl-block">
                <img src={WorkProcessShape1} alt="shape" />
              </div>
              <div className="shape2 d-none d-xxl-block">
                <img src={WorkProcessShape2} alt="shape" />
              </div>
              <div className="container">
                <div className="row gy-5 gx-70">
                  <div className="col-xl-6">
                    <div className="work-process-content">
                      <div className="section-title mxw-560">
                        <div className="subtitle text-white wow fadeInUp" data-wow-delay=".3s">
                          {' '}
                          <img src={ArrowLeftWhite} alt="icon" />{' '}
                          <span className="text-white"> How we do </span>
                          <img src={ArrowRightWhite} alt="icon" />
                        </div>
                        <h2 className="title text-white wow fadeInUp" data-wow-delay=".6s">
                          Amazing Solutions For business
                        </h2>
                        <p className="mt-25 mb-50 text-white wow fadeInUp" data-wow-delay=".5s">
                          We don't believe in a one-size-fit-all approach. Our services are carefully customized to suit
                          your specific need, ensuring you to achieve your goals.
                        </p>

                        <div className="btn-wrapper">
                          <a className="gt-btn style5" href="contact.php">
                            {' '}
                            HOW IT WORKS <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="work-process-thumb img-custom-anim-left wow fadeInUp" data-wow-delay=".3s">
                      <div className="thumb2_1">
                        <img src={BusinessSolution} alt="thumb" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ position: 'absolute' }}>
                <clipPath id="workprocessdMask1">
                  <path d="M0 40C0 17.9086 17.9086 0 40 0H1580C1602.09 0 1620 17.9086 1620 40V719C1620 741.091 1602.09 759 1580 759H910.56C890.155 759 871.033 749.04 859.336 732.32L855.261 726.494C831.058 691.895 779.166 693.964 757.796 730.38C747.391 748.11 728.373 759 707.816 759H40C17.9086 759 0 741.091 0 719V40Z" />
                </clipPath>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="product-life-cycle commpd">
        <div className="container position-relative">
          <div className="section-title">
            <h2 className="mb-3 text-white">New Product Development Phases</h2>
            <div className="row clearfix">
              <div className="col-sm-8">
                <p className="mb-3 text-white">
                  From idea creation to commercialisation, we operate everything for you as your digital partner and help
                  you bring sustainable growth and opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="product-life-cycle-phases">
            <img src={PDLImage} width="1614" height="250" alt="Product Life Cycle" />
            <div className="phases" style={{ marginTop: '100px' }}>
              <div className="phasesnm">
                <span>
                  Idea
                  <br />
                  Creation
                </span>
              </div>
              <div className="phasesnm">
                <span>Screening</span>
              </div>
              <div className="phasesnm">
                <span>
                  Concept
                  <br />
                  Development
                </span>
              </div>
              <div className="phasesnm">
                <span>
                  Product
                  <br />
                  Development
                </span>
              </div>
              <div className="phasesnm">
                <span>
                  Commercialisation
                  <br />
                  & Roll-out
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
   </div>
  )
}

export default Home