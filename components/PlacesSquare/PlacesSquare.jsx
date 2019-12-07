import React, { useEffect, useState } from 'react';
import Link from 'next/link';


function createImageArr(arr) {
  const imgArr = arr.reduce(
    (acc, current, index) => (index <= 2 ? [...acc, current.information.image] : acc),
    [],
  );
  return imgArr;
}

function PlacesSquare({ place, username }) {
  const [plantImgArr, setPlantImgArr] = useState([]);
  const { plants } = place;
  const { name } = place;

  useEffect(() => {
    setPlantImgArr(createImageArr(plants));
  }, [place, plants]);

  return (
    <Link
      href="[username]/places/[placeName]"
      as={`${username}/places/${name}`}
    >
      <a>
        <div className="c-PlacesSquare">
          <div className="c-PlacesSquare--container">
            <header className="square-container-header">
              <div className="square-container-header--wrapper">
                <h1>{name}</h1>
              </div>
            </header>
            <ul className="img-gallery--container">
              <li
                className="gallery-item-1"
                style={{
                  backgroundImage: `${plantImgArr[0] ? `url('${plantImgArr[0]}')` : 'url(\'https://via.placeholder.com/300x460\')'}`,
                }}
              />
              <li
                className="gallery-item-2"
                style={{
                  backgroundImage: `${plantImgArr[1] ? `url('${plantImgArr[1]}')` : 'url(\'https://via.placeholder.com/300x460\')'}`,
                }}
              />
              <li
                className="gallery-item-3"
                style={{
                  backgroundImage: `${plantImgArr[2] ? `url('${plantImgArr[2]}')` : 'url(\'https://via.placeholder.com/300x460\')'}`,
                }}
              />
            </ul>
          </div>
        </div>
      </a>
    </Link>
  );
}

PlacesSquare.propTypes = {
  // bla: PropTypes.string,
};

PlacesSquare.defaultProps = {
  // bla: 'test',
};

export default PlacesSquare;
