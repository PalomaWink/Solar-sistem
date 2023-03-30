import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        {/* Essa é uma forma de atribuir um valor único a uma prop, quando ele não vem de outro lugar (linha 9) */}
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
