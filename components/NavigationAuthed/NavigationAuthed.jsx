import React from 'react';
import Link from 'next/link';
import NavigationLink from '../NavigationLink';
import data from '../../data/user';

function NavigationAuthed() {
  const { username } = data[0];
  return (
    <nav className="Navigation--container">
      <div className="Navigation--wrapper">
        <Link href="/">
          <div className="logo--container" style={{ width: '142px', height: 'auto' }}>
            <img src="/assets/images/Logotype.svg" alt="" />
          </div>
        </Link>
        <div className="link--container">
          <NavigationLink
            href="/[username]/places"
            as={`/${username}/places`}
          >
            places
          </NavigationLink>
          <NavigationLink
            href="/resources"
            as="/resources"
          >
            plant help
          </NavigationLink>
          <NavigationLink
            href="/[username]"
            as={`/${username}`}
          >
            profile
          </NavigationLink>
        </div>
      </div>
    </nav>
  );
}

export default NavigationAuthed;
