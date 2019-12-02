import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import data from '../data/user';
import '../scss/pages/home.scss';

const btnData = {
  type: 'green',
  href: '/account/login',
};

function home({ username }) {
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
            as={`/${username}`}
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

home.getInitialProps = () => {
  const { username } = data[0];
  return { username };
};

export default home;
