import React from 'react';
import data from '../../../data/user';
import PlacesMediaContainer from '../../../components/PlacesMediaContainer';

function places({ userData }) {
  const { plantPlaces } = userData;
  return (
    <main className="p-places main--container">
      <div className="content--wrapper">
        <header className="p-places-header">
          <h1>Places</h1>
        </header>
        <main className="p-places-content">
          {plantPlaces.map((place) => (
            <PlacesMediaContainer />
          ))}
        </main>
      </div>
    </main>
  );
}

places.getInitialProps = ({ query }) => {
  const userData = data.find((user) => user.username === query.username);

  return {
    userData,
  };
};

export default places;
