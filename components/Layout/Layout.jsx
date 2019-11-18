import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({ children }) {
  const [isAuthed, setIsAuthed] = useState(false);

  return (
    <div className="Layout--wrapper">
      <Navigation isAuthed={isAuthed} />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
