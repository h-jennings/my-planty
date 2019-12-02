import React from 'react';
import data from '../../../../data/user';

function place({ userData, query }) {
  const { plantPlaces } = userData;
  const { placeName } = query;

  const placeArr = plantPlaces.find((plantPlace) => plantPlace.name === placeName);
  return (
    <div style={{ fontSize: '12px', wordBreak: 'break-word' }}>
      {JSON.stringify(placeArr, null, 2)}
    </div>
  );
}

place.getInitialProps = ({ query }) => {
  const userData = data.find((user) => user.username === query.username);

  return {
    userData,
    query,
  };
};

export default place;
