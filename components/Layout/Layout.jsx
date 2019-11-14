import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({ children }) {
  return (
    <div className="Layout--wrapper">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
