import React from 'react';

var Description = (props) => {
    return (
        <div className = 'movie-description'>
            <div>Years: {props.movie.year}</div>
            <div>Runtime: {props.movie.runtime}</div>
            <div>Metascore: {props.movie.Metascore}</div>
            <div>IMDB Rating: {props.movie.imdbRating}</div>
            <div>Watched: <button onClick = {()=> props.shiftWatch()}>{props.watched && 'x'}</button></div>
        </div>
    );
}

export default Description;