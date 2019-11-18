import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { getCurrentMonth, getCurrentDate } from '../../lib/utils/dateUtils';
import data from '../../data/user.json';
import '../../scss/pages/dashboard.scss';
import PlacesSquare from '../../components/PlacesSquare';


const propTypes = {
  month: PropTypes.string,
  date: PropTypes.string,
};

const defaultProps = {
  month: 'Month',
  date: 'Date',
};


function dashboard({ month, date, userData }) {
  const { plantPlaces } = userData;
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
            <header className="section-header">
              <h2 className="lh--1-2">
                Your Plant
                <br />
                Places
              </h2>
              <Link
                href="/[username]/places"
                as="jennings_hunter/places"
              >
                <a className="txt--green">
                  view all
                </a>
              </Link>
            </header>
            <ul className="places-list--container">
              {plantPlaces && plantPlaces.map((place) => (
                <li
                  key={place.name}
                >
                  <PlacesSquare
                    place={place}
                  />
                </li>
              ))}
              <li>Button</li>
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
  const userData = data.user;

  return { month, date, userData };
};

dashboard.propTypes = propTypes;
dashboard.defaultProps = defaultProps;

export default dashboard;
