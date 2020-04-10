import React from 'react';
import { withRouter } from 'react-router';
import './Header.css';

const Header = () => (
  <div className="header__area header__absolute" id="header">
      <div className="container">
          <div className="row">
              <div className="col-6 col-md-5 col-xl-3 align-self-center">
                  <a href="#" className="logo"><img src="assets/img/logo/logo.png" alt="" /></a>
              </div>
              <div className="col-6 col-md-7 col-xl-6 text-center align-self-center">
                  <div className="main__menu">
                      <div className="stellarnav">
                          <ul className="navclass" id="scroll">
                              <li><a href="#">Home</a>
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
                  <a href="#Login" className="cbtn emergency_btn">
                      Login
                  </a>
                  <a href="#Registration" className="cbtn emergency_btn">
                      Register
                  </a>
              </div>
          </div>
      </div>
  </div>
);

export default Header;
