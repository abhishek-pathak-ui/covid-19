import React from 'react';
import { withRouter } from 'react-router';
import './App.css';
import Header from '../../components/Header';
import LoginHeader from '../../components/LoginHeader';
import Footer from '../../components/Footer';

export const App = (props) => {
  const { location: { pathname = '' } = {}, location, children } = props;
  console.log("OOOOO", location.pathname.slice(1), props);

  const webURL = location.pathname.slice(1);
  const UrlStatus = (webURL == "GeneInteraction") || (webURL == "ModernMedicne") || (webURL == "AyurvedicMedicine") || (webURL == "StructureInteraction");
  return (
    <div className="header-class">
    {
      (UrlStatus) ? (
        <LoginHeader />
      ) : (<Header />)
    }

      <div className="children-class">
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default withRouter(App);
