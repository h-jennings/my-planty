/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import './Navigation.scss';
import NavigationLink from '../NavigationLink';

function Navigation() {
  return (
    <nav className="Navigation--wrapper">
      <Link
        href="/"
      >
        <div className="logo--container" style={{ width: '142px', height: 'auto' }}>
          <img src="/static/assets/images/Logotype.svg" alt="" />
        </div>
      </Link>
      <div className="link--container">
        <NavigationLink href="/">
          home
        </NavigationLink>
        <NavigationLink href="/about-us">
          plant help
        </NavigationLink>
        <NavigationLink href="/products">
          contact us
        </NavigationLink>
      </div>
    </nav>
  );
}


export default Navigation;
