import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div
        className="
        bg-gray-400/20
        m-10
        text-white
        rounded-3xl
        "
      >
        <div
          data-testid="missions"
          className="p-7 text-center font-thin text-6xl m-8"
        >
          Missões
        </div>
        <div className="flex flex-wrap justify-around">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              description={ mission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
