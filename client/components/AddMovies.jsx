import React from 'react';


var AddMovies = (props) => (
    <div className="search-bar form-inline">
      <input onChange ={(event)=> props.getMovieName(event)} className="form-control" type="text" placeholder="Add Movie Title Here"/>
      <button onClick = {(event) => props.addAMovie(props.newMovieName)} className="btn hidden-sm-down" >
        Add
        <span className="glyphicon glyphicon-search" text ="go"></span>
      </button>
    </div> 
  );
  
  // In the ES6 spec, files are "modules" and do not share a top-level scope
  // `var` declarations will only exist globally where explicitly defined
export default AddMovies 

