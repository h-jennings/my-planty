import React from 'react';
import './PlacesSquare.scss';

function PlacesSquare({ place }) {
  return (
    <div className="c-PlacesSquare">
      <div className="c-PlacesSquare--container">
        <header className="container-header">
          <div className="container-header--wrapper">
            <h1>{place.name}</h1>
          </div>
        </header>
        <ul className="img-gallery--container">
          <li
            className="gallery-item-1"
            style={{
              backgroundImage: `${place.plants[0] && place.plants[0].information.image !== null ? `url('${place.plants[0].information.image}')` : `url(${place.plants[0].information.placeholder})`}`,
            }}
          />
          <li
            className="gallery-item-2"
            style={{
              backgroundImage: `${place.plants[1] && place.plants[1].information.image !== null ? `url('${place.plants[1].information.image}')` : `url(${place.plants[1].information.placeholder})`}`,
            }}
          />
          <li
            className="gallery-item-3"
            style={{
              backgroundImage: `${place.plants[2] && place.plants[2].information.image !== null ? `url('${place.plants[2].information.image}')` : `url(${place.plants[2].information.placeholder})`}`,
            }}
          />
        </ul>
      </div>
    </div>
  );
}

PlacesSquare.propTypes = {
  // bla: PropTypes.string,
};

PlacesSquare.defaultProps = {
  // bla: 'test',
};

export default PlacesSquare;
