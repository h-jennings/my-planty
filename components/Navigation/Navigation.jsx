/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import './Navigation.scss';
import NavigationLink from '../NavigationLink';

const propTypes = {
  isAuthed: PropTypes.bool.isRequired,
};


function Navigation({ isAuthed = false }) {
  return (
    <nav className="Navigation--wrapper">
      <Link
        href="/"
      >
        <div className="logo--container" style={{ width: '142px', height: 'auto' }}>
          <img src="/assets/images/Logotype.svg" alt="" />
        </div>
      </Link>
      {!isAuthed
        ? (
          <div className="link--container">
            <NavigationLink href="/">
              home
            </NavigationLink>
            <NavigationLink href="/resources">
              plant help
            </NavigationLink>
            <NavigationLink href="/about-us">
              contact us
            </NavigationLink>
          </div>
        )
        : (
          <div className="link--container">
            <NavigationLink
              href="/[username]"
              as="jennings_hunter"
            >
              dashboard
            </NavigationLink>
            <NavigationLink
              href="/[username]/places"
              as="jennings_hunter/places"
            >
              places
            </NavigationLink>
            <NavigationLink
              href="/resources"
            >
              plant help
            </NavigationLink>
          </div>
        )}
    </nav>
  );
}

Navigation.propTypes = propTypes;


export default Navigation;
