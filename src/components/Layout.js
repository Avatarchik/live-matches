import React from 'react';
import Footer from './PageLayout/Footer';
import Navbar from './PageLayout/Navbar';

import Header from './PageLayout/Header';
import BetWrapper from './PageLayout/BetWrapper';

const SimpleLayout = ({ controller }) => {
  return (
    <React.Fragment>
      {/* Header of the App */}
      <Header />
      {/* Navbar of the App */}
      <Navbar />
      {/* Carousel Wrapper */}
      <BetWrapper />
      {/* Footer of the App */}
      <Footer />
    </React.Fragment>
  );
};
export default SimpleLayout;
