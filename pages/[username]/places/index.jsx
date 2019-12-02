import React from 'react';
import data from '../../../data/user';

function places({ userData }) {
  const { plantPlaces } = userData;
  return (
    <div style={{ fontSize: '12px', wordBreak: 'break-word' }}>{JSON.stringify(plantPlaces, null, 2)}</div>
  );
}

places.getInitialProps = ({ query }) => {
  const userData = data.find((user) => user.username === query.username);

  return {
    userData,
  };
};

export default places;
