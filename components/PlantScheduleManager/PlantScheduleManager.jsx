import React from 'react';
import PropTypes from 'prop-types';

function PlantScheduleManager(props) {
  return (
    <div className="c-PlantScheduleManager">
      <div className="c-PlantScheduleManager-content">
        <h3>Plant Type</h3>
        <h1>Plant Name</h1>
        <p>We would recommend watering soon.</p>
        <p className="recommendation">2 days past</p>
      </div>
      <div className="c-PlantScheduleManager-thumbnail--wrapper">
        <div className="c-PlantScheduleManager-thumbnail--container" style={{ backgroundImage: 'url(\'https://via.placeholder.com/300x460\')' }} />
      </div>
    </div>
  );
}

PlantScheduleManager.propTypes = {
  // bla: PropTypes.string,
};

PlantScheduleManager.defaultProps = {
  // bla: 'test',
};

export default PlantScheduleManager;
