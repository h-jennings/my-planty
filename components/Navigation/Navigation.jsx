import React from 'react';
import Link from 'next/link';
import NavigationLink from '../NavigationLink';
// import { useUserBasicInfo } from '../../graphql/api';

function Navigation() {
  // const { data, errorMessage } = useUserBasicInfo('251133291069964818');
  return (
    <nav className="Navigation--container">
      <div className="Navigation--wrapper">
        <Link href="/">
          <a>
            <div className="logo--container" style={{ width: '142px', height: 'auto' }}>
              <img src="/assets/images/Logotype.svg" alt="" />
            </div>
          </a>
        </Link>
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
      </div>
    </nav>
  );
}


export default Navigation;
