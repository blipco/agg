import React from 'react';
import {updateSearch, updateMovieInfo} from './movieSearchActions'

export default class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.changeSearchBar = this.changeSearchBar.bind(this);
    this.clickGoButton = this.clickGoButton.bind(this);
  }

  changeSearchBar(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearch(value));
  };

  clickGoButton() {
    const { dispatch } = this.props;
    const { movieDeets } = this.props;
    const { userQuery } = this.props;
    dispatch(updateMovieInfo(userQuery, movieDeets));
  };

  render() {
    return (
      <div>
        <div>
          <input value={userQuery} 
                 onChange={this.changeSearchBar} 
                 />
          <div>
            <button onClick={this.clickGoButton}>
              Go!
            </button>
          </div>
        </div>
      </div>
    )
  };
};