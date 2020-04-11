import React from 'react';
import { withRouter } from 'react-router';
import './LoginHeader.css';

const LoginHeader = () => (
  <div className="header__area header__absolute" id="header">
      <div className="">
          <div className="row">
              <div className="col-12 col-md-12 col-xl-12 text-center align-self-center">
                  <div className="main__menu">
                      <div className="stellarnav">
                          <ul className="navclass" id="scroll">
                              <li><a href="#ModernMedicne">Modern Medicne</a></li>
                              <li><a className="nav-link" href="#AyurvedicMedicine">Ayurvedic Medicine</a></li>
                              <li><a className="nav-link" href="#">Veterinary Medicine</a></li>
                              <li><a className="nav-link" href="#Visualization">Visualization</a></li>
                              <li><a className="nav-link" href="#">Candidate Molecules</a></li>
                              <li><a className="nav-link" href="#StructureInteraction">Molecule-Covid19 Structure Interaction</a></li>
                              <li><a className="nav-link" href="#GeneInteraction">Molecule-Covid19 Gene Interaction</a></li>
                              <li><a className="nav-link" href="https://public.tableau.com/profile/ranjeet4631#!/vizhome/Covid19_15864909188600/CovidDashboard?publish=yes" target="_blank">Bloc Chain</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
);

export default LoginHeader;
