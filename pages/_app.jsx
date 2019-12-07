import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import '../scss/index.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
