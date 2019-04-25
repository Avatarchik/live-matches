import React from 'react';

import Footer from '../components/PageLayout/Footer';
import Navbar from '../components/PageLayout/Navbar';
import Header from '../components/PageLayout/Header';
import BetWrapper from '../components/PageLayout/BetWrapper';

import { MatchScreen } from './styles';

const Matches = ({ controller }) => {
  return (
    <MatchScreen>
      {/* Header of the App */}
      <Header />
      {/* Navbar of the App */}
      <Navbar />
      {/* Carousel Wrapper */}
      <BetWrapper />
      {/* Footer of the App */}
      <Footer />
    </MatchScreen>
  );
};
export default Matches;
