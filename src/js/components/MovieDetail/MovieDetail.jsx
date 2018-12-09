import React from 'react';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <div>
            {singleMovie.data &&
              <img src={singleMovie.data.Poster !== "N/A"
              ?
              singleMovie.data.Poster
              :
              ""} />
            }
          </div>
          <div>
            <div id='movie-details-card'>
              <div id='movie-details-card-header'>
                Movie Details
              </div>
              <div>
                <div>
                  {singleMovie.data && (singleMovie.data.Title !== "N/A"
                    ?
                    singleMovie.data.Title
                    :
                    'No Movie Title Available')}
                </div>
                <div>
                  <div id='green-strip'>
                    {singleMovie.data && (singleMovie.data.Year !== "N/A"
                      ?
                      singleMovie.data.Year
                      :
                      'No Year Released Available')}
                  </div>
                  <div id='green-strip'>
                    {singleMovie.data && (singleMovie.data.Runtime !== "N/A"
                      ?
                      singleMovie.data.Runtime
                      :
                      'No Movie Run Time Available')}
                  </div>
                  <div id='green-strip'>
                    {singleMovie.data && (singleMovie.data.Genre !== "N/A"
                      ?
                      singleMovie.data.Genre
                      :
                      'No Movie Genres Available')}
                  </div>
                </div>
                <div>
                  {singleMovie.data && (singleMovie.data.Plot !== "N/A"
                    ?
                    singleMovie.data.Plot
                    :
                    'No Plot Available')}
                </div>
                <div>
                  {singleMovie.data && (singleMovie.data.Awards !== "N/A"
                    ?
                    singleMovie.data.Awards
                    :
                    'No Awards Available')}
                </div>
                <div>
                  {singleMovie.data && (singleMovie.data.Metascore !== "N/A"
                    ?
                    `Meta Score: ${singleMovie.data.Metascore}`
                    :
                    'No Meta Score Available')}
                </div>
                <div>
                  {singleMovie.data && (singleMovie.data.imdbRating !== "N/A"
                    ?
                    `IMDB Rating: ${singleMovie.data.imdbRating}`
                    :
                    'No imdb Rating Available')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};