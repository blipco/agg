import React from 'react';

export default class MoreInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href={`#/movie/${this.props.imdbID}`}>
          More Information
        </a>
      </div>
    );
  };
};