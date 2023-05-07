import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, description } = this.props;
    return (
      <div
        className="
        text-center
        w-80
        bg-neutral-900/70
        rounded-lg
        m-4
        border-2 border-neutral-400"
      >
        <div data-testid="mission-card">
          <div className="border-b-2 border-neutral-400">
            <p
              data-testid="mission-name"
              className="
                m-2
                text-xl
                font-thin
                tracking-widest"
            >
              { name }
            </p>
          </div>
          <div className="flex flex-wrap justify-between m-2">
            <p
              data-testid="mission-year"
              className="
              font-thin
              tracking-widest"
            >
              { year }
            </p>
            <p
              data-testid="mission-country"
              className="
              font-thin
              tracking-widest"
            >
              { country }
            </p>
            <p
              data-testid="mission-destination"
              className="
              font-thin
              tracking-widest"
            >
              { description }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionCard;
