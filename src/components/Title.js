import React from 'react';
import PropTypes from 'prop-types';
import './Body.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="title_subtitle">{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
