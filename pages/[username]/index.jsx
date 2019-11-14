import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { getCurrentMonth, getCurrentDate } from '../../utils/dateUtils';
import '../../scss/pages/dashboard.scss';


const propTypes = {
  month: PropTypes.string,
  date: PropTypes.string,
};

const defaultProps = {
  month: 'Month',
  date: 'Date',
};


function dashboard({ month, date }) {
  return (
    <main className="p-dashboard main--container">
      <div className="content--wrapper">
        <header className="p-dashboard-header">
          <h1>
            Welcome back,
            <br />
            Hunter.
          </h1>
          <time className="txt-super lh--1">
            {month}
            <br />
            {date}
          </time>
        </header>
        <main className="p-dashboard-content">
          <section className="content--places">
            <header>
              <h2 className="lh--1-2">
                Your Plant
                <br />
                Places
              </h2>
              <Link href="/">
                <a className="txt--green">
                  view all
                </a>
              </Link>
            </header>
            <ul>
              <li>component</li>
              <li>component</li>
              <li>component</li>
              <li>component</li>
            </ul>
          </section>
          <section className="content--schedule">
            <header>
              <h2 className="lh--1-2">
                Today&rsquo;s Watering
                <br />
                Schedule
              </h2>
            </header>
          </section>
        </main>
      </div>
    </main>
  );
}

dashboard.getInitialProps = () => {
  const month = `${getCurrentMonth().toLowerCase()}.`;
  const date = getCurrentDate();

  return { month, date };
};

dashboard.propTypes = propTypes;
dashboard.defaultProps = defaultProps;

export default dashboard;
