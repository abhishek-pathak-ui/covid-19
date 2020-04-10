import React from 'react';
import { withRouter } from 'react-router';
import './Footer.css';

const Footer = () => (
  <div className="footer__area padding-top white">
      <div className="container">
          <div className="row jusify-content-center">
              <div className="col-md-6 col-lg-3">
                  <a href="index.html" className="footer__logo"><img src="assets/img/logo/logo2.png" alt="" /></a>
                  <div className="footer__dsec">
                      <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus. The disease
                          causes.</p>
                  </div>

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
                      <a href="#">Help Desk 16247</a>
                  </div>
              </div>
          </div>
      </div>
      <img className="footer_shape  footer_shapes2" src="assets/img/shape/shape__white1.png" alt="" />
      <img className="footer_shape  footer_shapes3" src="assets/img/shape/shape__white2.png" alt="" />
      <img className="footer_shape  footer_shapes4" src="assets/img/shape/shape__white2.png" alt="" />
      <img className="footer_shape  footer_shapes5" src="assets/img/shape/shape__white2.png" alt="" />
  </div>
);

export default Footer;
