import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import '../scss/pages/home.scss';

const btnData = {
  type: 'green',
  href: '/account/login',
};

function index() {
  return (
    <main className="p-home main--container">
      <div className="content--wrapper">
        <h1 className="lh--1-2">
          Welcome to myplanty
          <br />
          where everyone has a
          <br />
          green thumb.
        </h1>
        <div className="flex--container btn--container">
          <Button data={btnData}>
            Login
          </Button>
          <Link
            href="/[username]"
            as="jennings_hunter"
          >
            <a className="txt--green txt--italic txt-xsm">
              Link to dashboard
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default index;
