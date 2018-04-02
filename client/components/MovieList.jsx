import React from 'react';
import Movie from './Movie.jsx';

var MovieList = (props) => {
    return (
      <div className="movie-list">
        {props.movies.map(movie => <Movie movie={movie} isWatchedCategory={props.isWatchedCategory}/>)}
      </div>
    );
  };
  
  
  // PropTypes tell other developers what `props` a component expects
  // Warnings will be shown in the console when the defined rules are violated
  
  // In the ES6 spec, files are "modules" and do not share a top-level scope.
  // `var` declarations will only exist globally where explicitly defined.
export default MovieList 



  // {props.movies.map(movie => <Movie movie = {movie} />)}
