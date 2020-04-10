import React from 'react';
import { withRouter } from 'react-router';
import './App.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export const App = (props) => {
  const { location: { pathname = '' } = {}, location, children } = props;
  return (
    <div className="header-class">
      <Header />
      <div className="children-class">
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default withRouter(App);
