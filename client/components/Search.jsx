import React from 'react';


var Search = (props) => (
    <div className="search-bar form-inline">

      <input onChange = {(event)=> props.filter(event.target.value)} className="form-control" type="text" placeholder="Search.."/>
      <button className="btn hidden-sm-down" >
        Go
        <span className="glyphicon glyphicon-search" text ="go"></span>
      </button>
    </div> 
  );
  
  // In the ES6 spec, files are "modules" and do not share a top-level scope
  // `var` declarations will only exist globally where explicitly defined
export default Search