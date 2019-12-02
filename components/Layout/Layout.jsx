import React, { useState } from 'react';
import Head from 'next/head';
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
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Navigation isAuthed={isAuthed} />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
