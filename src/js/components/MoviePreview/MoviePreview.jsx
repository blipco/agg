import React from 'react';
import MoreInfo from '../MoreInfo';
export default class MoviePreview extends React.Component {
  render() {
    const {movieDeets} = this.props;
      return (
      <div>
         {movieDeets.map(movieDeet => (
        <div>
          <div>
            <div>
              <div>
                <div id='movie-preview-poster'>
                <img 
                     src={movieDeet.data.Poster !== "N/A"
                          ?
                          movieDeet.data.Poster
                          :'no_poster_available.jpg'}/>
                </div>
              </div>
              <div>
                <div id='movie-preview-title'>
                {movieDeet.data.Title !== "N/A"
                          ?
                          movieDeet.data.Title
                          :'No Movie Title Available'}
                </div>
                <div id='movie-preview-year'>
                  {movieDeet.data.Year !== "N/A"
                          ?
                          movieDeet.data.Year
                          :'No Year Released Available'}
                </div>
                <hr />
                <div id='movie-preview-plot'>
                  {movieDeet.data.Plot !== "N/A"
                          ?
                          movieDeet.data.Plot
                          :'No Plot Available'}
              </div>
                <div>
                  <MoreInfo 
                  imdbID = {movieDeet.data.imdbID}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    )
  };
};