import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import NavigationAuthed from '../NavigationAuthed';
// import Navigation from '../Navigation';
import Footer from '../Footer';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({ children }) {
  return (
    <div className="Layout--wrapper">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <NavigationAuthed />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
