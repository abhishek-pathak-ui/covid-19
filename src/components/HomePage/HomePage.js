import React from 'react';
import {
  Link,
} from 'react-router-dom';

const HomePage = () => (
  <div>
    <div className="header__area header__absolute" id="header">
      <div className="container">
          <div className="row">
              <div className="col-6 col-md-5 col-xl-3 align-self-center">
                  <a href="index.html" className="logo"><img src="assets/img/logo/logo.png" alt="" /></a>
              </div>
              <div className="col-6 col-md-7 col-xl-6 text-center align-self-center">
                  <div className="main__menu">
                      <div className="stellarnav">
                          <ul className="navclass" id="scroll">
                              <li><a href="#home">Home</a>
                                  <ul>
                                      <li><a href="index.html">light version 1</a></li>
                                      <li><a href="index3.html">light version 2</a></li>
                                      <li><a href="index2.html">dark version 1</a></li>
                                      <li><a href="index4.html">dark version 2</a></li>
                                  </ul>
                              </li>
                              <li><a href="#about">About</a></li>
                              <li><a href="#contagion">Contagion</a></li>
                              <li><a href="#symptoms">Symptoms</a></li>
                              <li><a href="#blog">Blog</a>
                                  <ul>
                                      <li><a href="blog.html">Blog</a></li>
                                      <li><a href="single.html">blog details</a></li>
                                  </ul>
                              </li>
                              <li><a href="#prevention">Prevention</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="d-none d-lg-block col-lg-3 col-xl-3 align-self-center text-right">
                  <a href="#Registration" className="cbtn emergency_btn">
                      <img className="btn__icon" src="assets/img/icon/alert__phone.svg" alt="" />
                      <img className="btn__hover__icon" src="assets/img/icon/alert__phone__white.svg" alt="" />
                       Sign Up
                  </a>
              </div>
          </div>
      </div>
  </div>

  <div className="welcome welcome1" id="home">
      <div className="container">
          <div className="row">
              <div className="col-md-7 col-lg-6">
                  <div className="title wow fadeInLeft" data-wow-delay=".4s">
                      <p className="title__top"><img src="assets/img/icon/alert.svg" alt="" />Covid-19 Alert</p>
                      <h1>Save yourself Save the world.</h1>
                      <h4>Coronavirus disease (COVID-19) is an infectious <br /> disease caused by a new virus.</h4>
                      <div className="space-30"></div>
                      <a href="#" className="cbtn btn1">Check Symptoms</a>
                  </div>
              </div>
          </div>
      </div>
      <img src="assets/img/shape/shape__white1.png" alt="" className="shape shape1" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="shape shape2" />


      <div className="welcome_shapes wow fadeInRight">
          <div className="welcome_shapes__wrap">
              <img className="welcome__shape__bg " src="assets/img/shape/hero__bg.png" alt="" />
              <img className="welcome_shape welcome_shapes1" src="assets/img/shape/hero1__people.png" alt="" />
              <img className="welcome_shape welcome_shapes2" src="assets/img/icon/big__virous.png" alt="" />
              <img className="welcome_shape welcome_shapes3" src="assets/img/icon/big__virous.png" alt="" />
              <img className="welcome_shape welcome_shapes4" src="assets/img/icon/big__virous.png" alt="" />
          </div>
      </div>

  </div>

  <div className="counter__area">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="counters">
                      <div className="counters__wrap">
                          <div className="row">
                              <div className="col-md-6 col-lg-3 text-center">
                                  <div className="single__counter wow fadeInUp" data-wow-delay=".2s">
                                      <h2 className="counter">204</h2>
                                      <p>Affected Country</p>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-3 text-center">
                                  <div className="single__counter wow fadeInUp" data-wow-delay=".3s">
                                      <h2 className="counter">1,098,848</h2>
                                      <p>Confirmed Cases</p>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-3 text-center">
                                  <div className="single__counter ctype2 wow fadeInUp" data-wow-delay=".2s">
                                      <h2 className="counter">226,106</h2>
                                      <p>Recovered Cases</p>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-3 text-center">
                                  <div className="single__counter no__border wow fadeInUp" data-wow-delay=".4s">
                                      <h2 className="counter">58,871</h2>
                                      <p>Worldwide Deaths</p>
                                  </div>
                              </div>
                              <div className="col-12 text-center wow fadeInUp">
                              <div className="space-30"></div>
                                  <h6 className="emergency">*** Updated less than 20 mins ago, Source: <a href="#">Wikipedia</a></h6>
                              </div>
                          </div>
                          <img src="assets/img/shape/shape__white2.png" alt="" className="counter__bg counter__bg1" />
                          <img src="assets/img/shape/shape__white2.png" alt="" className="counter__bg counter__bg2" />
                      </div>

                  </div>
              </div>
          </div>
      </div>
  </div>

  <div className="about__area section-padding" id="about">
      <div className="container">
          <div className="row">
              <div className="col-lg-6 align-self-center">
                  <div className="about__img wow fadeInLeft">
                      <img src="assets/img/about/about__left.png" alt="image" />
                  </div>
              </div>
              <div className="col-lg-6 align-self-center">
                  <div className="about__text wow fadeInRight">
                      <div className="title">
                          <p className="title__top">About Covid-19</p>
                          <h2>What is novel coronavirus?</h2>
                          <h4>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus. The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. <br /> <br /> You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) distances with who are unwell.</h4>
                          <div className="space-30"></div>
                          <a href="#" className="cbtn btn1">Check Symptoms</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <img src="assets/img/shape/shape__white2.png" alt="" className="about__shape about__shape1" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="about__shape about__shape2" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="about__shape about__shape3" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="about__shape about__shape4" />
  </div>

  <div className="symptoms__area theme__bg1 section-padding2" id="symptoms">
      <div className="container">
          <div className="row">
              <div className="col-lg-6">
                  <div className="title wow fadeInLeft">
                      <p className="title__top">Covid-19 Symptoms</p>
                      <h2>What are the symptoms?</h2>
                      <h4>COVID-19 symptoms range from mild to severe. It takes 2-14 days after exposure for symptoms to develop. Symptoms may include:</h4>
                      <div className="space-30"></div>
                      <div className="row">
                          <div className="col-md-4">
                              <div className="points">
                                  <ul>
                                      <li><i className="fas fa-check"></i> Hard Cough</li>
                                      <li><i className="fas fa-check"></i> Fever</li>
                                      <li><i className="fas fa-check"></i> Headache</li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-5">
                              <div className="points">
                                  <ul>
                                      <li><i className="fas fa-check"></i> Resoiratory Distress</li>
                                      <li><i className="fas fa-check"></i> Shortness of Breath</li>
                                      <li><i className="fas fa-check"></i> Kidney Failure</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="space-50"></div>
                      <a href="#" className="cbtn btn1">Check Symptoms</a>
                  </div>
              </div>
          </div>
      </div>
      <img src="assets/img/about/symptoms.png" alt="" className="symptom__bg wow fadeInRight" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="symptom__shape symptom_1" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="symptom__shape symptom_2" />
  </div>

  <div className="map__area section-padding2">
      <div className="container">
          <div className="row">
              <div className="col-lg-8 text-center m-auto">
                  <div className="title wow fadeInDown">
                      <p className="title__top">Covid-19 threat</p>
                      <h2>More than 59k died in Covid-19</h2>
                      <h4>There are no medications specifically approved for coronavirus. Most people with mild coronavirus :</h4>
                  </div>
              </div>
          </div>
          <div className="space-50"></div>
          <div className="row">
              <div className="col-12 text-center">
                  <div className="mapimg wow zoomIn">
                      <img src="assets/img/bg/map1.svg" alt="" />
                  </div>
                  <div className="space-50"></div>
                  <h6 className="emergency wow fadeInUp">*** Updated less than 20 mins ago, Source: <a href="#">Wikipedia</a></h6>
              </div>
          </div>
      </div>
      <img src="assets/img/shape/shape__white2.png" alt="" className="prevention__img prevention__img1" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="prevention__img prevention__img2" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="prevention__img prevention__img3" />
  </div>

  <div className="contagion theme__bg2 section-padding" id="contagion">
      <div className="container">
          <div className="row">
              <div className="col-lg-6 align-self-center">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="single__contagion wow fadeInUp" data-wow-delay=".3s">
                              <div className="contagion__icon">
                                  <img src="assets/img/contagion/contagion1.png" alt="" />
                              </div>
                              <h3>Animal Contact</h3>
                              <p>Stay at home if you begin to feel unwell, even with mild symptoms nose.</p>
                          </div>
                          <div className="single__contagion wow fadeInUp" data-wow-delay=".5s">
                              <div className="contagion__icon">
                                  <img src="assets/img/contagion/contagion2.png" alt="" />
                              </div>
                              <h3>Personal Contact</h3>
                              <p>Avoiding contact with others and visits to medical facilities will allow.</p>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="single__contagion mt-lg-5 wow fadeInUp" data-wow-delay=".7s">
                              <div className="contagion__icon">
                                  <img src="assets/img/contagion/contagion3.png" alt="" />
                              </div>
                              <h3>Air Transmission</h3>
                              <p>Via respiratory droplets produced when infected person coughs or sneezes.</p>
                          </div>
                          <div className="single__contagion wow fadeInUp" data-wow-delay=".9s">
                              <div className="contagion__icon">
                                  <img src="assets/img/contagion/contagion4.png" alt="" />
                              </div>
                              <h3>Contaminate Object </h3>
                              <p>Call in advance and tell your provider of any recent travel or contact.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6 align-self-center">
                  <div className="title white__title ml-lg-5 wow fadeInRight">
                      <p className="title__top">Covid-19 Contagion</p>
                      <h2>How does novel coronavirus spread?</h2>
                      <h4>Health experts are still learning the details. Currently, it is thought to spread:</h4>
                      <div className="space-30"></div>
                      <div className="points">
                          <ul>
                              <li><i className="fas fa-check"></i> Via respiratory droplets produced when an infected person coughs or sneezes.</li>
                              <li><i className="fas fa-check"></i>Between people who are in close contact with one another (within about 6 feet).</li>
                          </ul>
                      </div>
                      <div className="space-50"></div>
                      <a href="#" className="cbtn btn1">How to Prevent</a>
                  </div>
              </div>
          </div>
      </div>
      <img src="assets/img/shape/shape__white2.png" alt="" className="contagion__img contagion__img1" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="contagion__img contagion__img2" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="contagion__img contagion__img3" />
  </div>

  <div className="preventions__area padding-top" id="prevention">
      <div className="container">
          <div className="row">
              <div className="col-lg-10 text-center m-auto">
                  <div className="title wow fadeInDown">
                      <p className="title__top">Covid-19 Preventions</p>
                      <h2>How can I protect myself from Covid-19?</h2>
                      <h4>If you are traveling overseas (to China but also to other places) <br />follow the CDC’s guidance: </h4>
                  </div>
              </div>
          </div>
          <div className="space-50"></div>
          <div className="row">
              <div className="col-md-6">
                  <div className="do__lists">
                      <h2 className="should__do wow fadeInUp" data-wow-delay=".3s">What you <span>should do:</span></h2>
                      <div className="single__list wow fadeInUp" data-wow-delay=".5s">
                          <div className="single__list__icon">
                              <img src="assets/img/service/service1.png" alt="" />
                          </div>
                          <h3>Wear Face Mask</h3>
                          <p>Wash hands often with soap and water. If not available, use hand sanitizer.</p>
                      </div>
                      <div className="single__list wow fadeInUp" data-wow-delay=".7s">
                          <div className="single__list__icon">
                              <img src="assets/img/service/service2.png" alt="" />
                          </div>
                          <h3>Cover Face When Coughing</h3>
                          <p>Cover your mouth/nose with a tissue or sleeve when coughing or sneezing.</p>
                      </div>
                      <div className="single__list wow fadeInUp" data-wow-delay=".9s">
                          <div className="single__list__icon">
                              <img src="assets/img/service/service3.png" alt="" />
                          </div>
                          <h3>Wash Your Hand Frequently</h3>
                          <p>Wash hands often with soap and water. If not available, use hand sanitizer.</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="do__lists">
                      <h2 className="should__dont wow fadeInUp" data-wow-delay=".3s">What you <span>shouldn’t do:</span></h2>
                      <div className="single__list wow fadeInUp" data-wow-delay=".5s">
                          <div className="single__list__icon">
                              <img src="assets/img/service/service4.png" alt="" />
                          </div>
                          <h3>Avoid Animal Contact</h3>
                          <p>Wash hands often with soap and water. If not available, use hand sanitizer.</p>
                      </div>
                      <div className="single__list wow fadeInUp" data-wow-delay=".7s" >
                          <div className="single__list__icon">
                              <img src="assets/img/service/service5.png" alt="" />
                          </div>
                          <h3>Avoid Markets and Crowd</h3>
                          <p>Cover your mouth/nose with a tissue or sleeve when coughing or sneezing.</p>
                      </div>
                      <div className="single__list wow fadeInUp" data-wow-delay=".9s" >
                          <div className="single__list__icon">
                              <img src="assets/img/service/service6.png" alt="" />
                          </div>
                          <h3>Seek Medical Care</h3>
                          <p>Wash hands often with soap and water. If not available, use hand sanitizer.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <img src="assets/img/shape/shape__white2.png" alt="" className="prevention__img prevention__img1" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="prevention__img prevention__img2" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="prevention__img prevention__img3" />
  </div>

  <div className="blog__area section-padding" id="blog">
      <div className="container">
          <div className="row">
              <div className="col-md-5">
                  <div className="title wow fadeInLeft">
                      <p className="title__top">News Feed</p>
                      <h2>Stay updated with our news feed.</h2>
                      <h4>COVID-19 symptoms range from mild to severe. It takes 2-14 days after exposure for symptoms to develop. </h4>
                      <div className="space-30"></div>
                      <a href="#" className="cbtn btn1">Check Out All Blog</a>
                  </div>
              </div>
              <div className="col-md-7 col-lg-6">
                  <div className="blog__lists ml-lg-5 wow fadeInRight" data-wow-delay=".4s">
                      <div className="single__blog">
                          <div className="single__blog__img">
                              <img src="assets/img/blog/news1.jpg" alt="" />
                          </div>
                          <p className="title__top">Statistics</p>
                          <a href="blog.html">Some countries provide clear and helpful data on testing.</a>
                          <a href="blog.html" className="readmore">read more <i className="far fa-angle-right"></i></a>
                      </div>
                      <div className="single__blog wow fadeInRight" data-wow-delay=".6s">
                          <div className="single__blog__img">
                              <img src="assets/img/blog/news2.jpg" alt="" />
                          </div>
                          <p className="title__top">Statistics</p>
                          <a href="blog.html">Some countries provide clear and helpful data on testing.</a>
                          <a href="blog.html" className="readmore">read more <i className="far fa-angle-right"></i></a>
                      </div>
                      <div className="single__blog wow fadeInRight" data-wow-delay=".8s">
                          <div className="single__blog__img">
                              <img src="assets/img/blog/news1.jpg" alt="" />
                          </div>
                          <p className="title__top">Statistics</p>
                          <a href="blog.html">Some countries provide clear and helpful data on testing.</a>
                          <a href="blog.html" className="readmore">read more <i className="far fa-angle-right"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <img src="assets/img/shape/shape__white2.png" alt="" className="blog__img blog__img1" />
      <img src="assets/img/shape/shape__white2.png" alt="" className="blog__img blog__img2" />
  </div>

  <div className="cta__area theme__bg2__haf">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="cta">
                      <div className="cta_wrap">
                          <div className="row">
                              <div className="col-lg-8 m-auto text-center">
                                  <div className="title">
                                      <h2>Want to test Covid-19?</h2>
                                      <h4>Our goal at Our World in Data is to provide testing data over time for many countries around the world.</h4>
                                      <div className="space-30"></div>

                                      <div className="btn__group">
                                          <a href="#" className="cbtn emergency_btn">
                                              <img className="btn__icon" src="assets/img/icon/alert__phone.svg" alt="" />
                                              <img className="btn__hover__icon" src="assets/img/icon/alert__phone__white.svg" alt="" />
                                               Call For Test
                                          </a>
                                          <a href="#" className="cbtn emergency_btn">
                                              <img className="btn__icon" src="assets/img/icon/calender__red.png" alt="" />
                                              <img className="btn__hover__icon" src="assets/img/icon/calender.png" alt="" />
                                               Book Doctor
                                          </a>

                                      </div>
                                  </div>
                              </div>
                      </div>

                      <img src="assets/img/shape/shape__white2.png" alt="" className="cta__img cta__img1" />
                      <img src="assets/img/shape/shape__white2.png" alt="" className="cta__img cta__img2" />
                          </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div className="footer__area padding-top white">
      <div className="container">
          <div className="row jusify-content-center">
              <div className="col-md-6 col-lg-3">
                  <a href="index.html" className="footer__logo"><img src="assets/img/logo/logo2.png" alt="" /></a>
                  <div className="footer__dsec"><p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus. The disease causes.</p></div>

                  <ul className="footer-social dinline">
                      <li><a className="active" href="#"><i className="fab fa-dribbble"></i></a></li>
                      <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  </ul>

              </div>
              <div className="col-md-6 col-lg-2">
                  <div className="single__footer ml-lg-5">
                      <h3>About Us</h3>
                      <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Service</a></li>
                          <li><a href="#">Portfolio</a></li>
                          <li><a href="#">News Feeds</a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-md-6 col-lg-3">
                  <div className="single__footer ml-lg-5">
                      <h3>Usefull Links</h3>
                      <ul>
                          <li><a href="#">WHO Information</a></li>
                          <li><a href="#">Covid-19 Wikipedia</a></li>
                          <li><a href="#">Service</a></li>
                          <li><a href="#">CNN News</a></li>
                          <li><a href="#">Worldometer Info</a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-md-6 col-lg-4">
                  <div className="single__footer">
                      <h3>Contact Us</h3>
                      <div className="single__contact">
                          <div className="single__contact__icon">
                              <img src="assets/img/icon/phone__white.png" alt="" />
                          </div>
                          <a href="tell:+880-2-9898796">+880-2-9898796</a>
                          <a href="tell:+880-2-9898796">+880-2-9880440</a>
                      </div>
                      <div className="single__contact">
                          <div className="single__contact__icon">
                              <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <p>Institute of Epidemiology, Disease Control & Research (IEDCR) Mohakhali, Dhaka-1212</p>
                      </div>
                      <div className="single__contact">
                          <div className="single__contact__icon">
                              <i className="fas fa-envelope"></i>
                          </div>
                          <a href="mailto:director@iedcr.gov.bd">director@iedcr.gov.bd</a>
                          <a href="mailto:director@iedcr.gov.bd">iedcrit@gmail.com</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="footer__seperator"></div>
      <div className="copyright">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 align-self-center">
                      <p>&copy; 2020 Ncov Ltd. All Rights Reserved.</p>
                  </div>
                  <div className="col-md-6 text-right align-self-center">
                      <a href="#">Help Desk  16247</a>
                  </div>
              </div>
          </div>
      </div>
      <img className="footer_shape  footer_shapes2" src="assets/img/shape/shape__white1.png" alt="" />
      <img className="footer_shape  footer_shapes3" src="assets/img/shape/shape__white2.png" alt="" />
      <img className="footer_shape  footer_shapes4" src="assets/img/shape/shape__white2.png" alt="" />
      <img className="footer_shape  footer_shapes5" src="assets/img/shape/shape__white2.png" alt="" />
  </div>
  </div>
);

export default HomePage;
