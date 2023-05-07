import React from 'react';
import PropTypes from 'prop-types';
import { faCalendar, faMap, faFlag } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, description } = this.props;
    return (
      <div
        className="
        text-center
        w-auto
        h-60
        bg-neutral-900/70
        rounded-xl
        m-4
        border-2
        border-neutral-400"
      >
        <div
          data-testid="mission-card"
          className="flex flex-col justify-evenly h-full hover:bg-gray-600/75"
        >
          <div className="border-b-2 border-neutral-400">
            <p
              data-testid="mission-name"
              className="
                mb-7
                text-2xl
                font-thin
                tracking-widest"
            >
              { name }
            </p>
          </div>
          <div className="flex flex-row m-2">
            <div className="flex flex-row justify-center items-center w-40">
              <FontAwesomeIcon icon={ faCalendar } size="lg" className="m-2" />
              <p
                data-testid="mission-year"
                className="
                  mt-1
                  ml-3
                  text-lg
                  text-center
                  font-thin"
              >
                { year }
              </p>
            </div>
            <div className="flex flex-row items-center w-40 ">
              <FontAwesomeIcon icon={ faMap } size="lg" className="m-2" />
              <p
                data-testid="mission-country"
                className="
                  m-1
                  text-base
                  text-center
                  font-thin"
              >
                { country }
              </p>
            </div>
            <div className="flex flex-row items-center w-40 ">
              <FontAwesomeIcon icon={ faFlag } size="lg" className="m-2" />
              <p
                data-testid="mission-destination"
                className="
                  m-2
                  text-lg
                  text-center
                  font-thin"
              >
                { description }
              </p>
            </div>
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
