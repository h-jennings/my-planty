import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { getCurrentMonth, getCurrentDate } from '../../lib/utils/dateUtils';
import data from '../../data/user.json';
import '../../scss/pages/dashboard.scss';
import PlacesSquare from '../../components/PlacesSquare';
import PlantScheduleManager from '../../components/PlantScheduleManager';


const propTypes = {
  month: PropTypes.string,
  date: PropTypes.string,
};

const defaultProps = {
  month: 'Month',
  date: 'Date',
};


function dashboard({
  month, date, userData,
}) {
  const { plantPlaces, username } = userData;
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
            <br className="m-hide" />
            {' '}
            {date}
          </time>
        </header>
        <main className="p-dashboard-content">
          <section className="content--places">
            <header className="section-header">
              <h2 className="lh--1-2">
                Your Plant
                <br className="m-hide" />
                Places
              </h2>
              <Link
                href="/[username]/places"
                as={`${username}/places`}
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
                    username={username}
                  />
                </li>
              ))}
              <li>
                <button className="add-place-btn" type="button">
                  <header className="square-container-header">
                    <div className="square-container-header--wrapper">
                      <h1>Add a place</h1>
                    </div>
                  </header>
                  <div className="btn-icon--container">
                    <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <g fill="#F2F4F3">
                          <path d="M32.5 0h15v80h-15z" />
                          <path d="M0 47.5v-15h80v15z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </button>
              </li>
            </ul>
          </section>
          <section className="content--schedule">
            <header className="section-header">
              <h2 className="lh--1-2">
                Today&rsquo;s Watering
                <br />
                Schedule
              </h2>
            </header>
            <ul className="schedule-list">
              <li className="schedule-list-item">
                <PlantScheduleManager />
              </li>
              <li className="schedule-list-item">
                <PlantScheduleManager />
              </li>
              <li className="schedule-list-item">
                <PlantScheduleManager />
              </li>
            </ul>
          </section>
        </main>
      </div>
    </main>
  );
}

dashboard.getInitialProps = ({ query }) => {
  const userData = data.find((user) => user.username === query.username);
  const month = `${getCurrentMonth().toLowerCase()}.`;
  const date = getCurrentDate();
  return {
    month, date, userData,
  };
};

dashboard.propTypes = propTypes;
dashboard.defaultProps = defaultProps;

export default dashboard;
