import React from 'react';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';
import Category from './Category.jsx';
import exampleData from '../data/exampleData.js';

export default class App extends React.Component {

    constructor(props) {
        super(props),
        this.originalMovies = exampleData;
        this.state = {
            movies: exampleData,
            newMovieName:"",
        }
        this.searchItem = this.searchItem.bind(this);
        this.getMovieName = this.getMovieName.bind(this);
        this.addAMovie = this.addAMovie.bind(this);      
    }

    searchItem(name) {
        var selectMovies = [];
        for (var i = 0; i < this.originalMovies.length;i++) {
            let movieName = this.originalMovies[i].title.toUpperCase();
            name = name.toUpperCase();
            if (movieName.includes(name)){
                selectMovies.push(this.originalMovies[i])
            }
        }
        if (selectMovies.length === 0) {
            alert("no movie by that name found");
        }
        this.setState({
            movies: selectMovies
        });
    }

    getMovieName(event){
        this.setState({
            newMovieName : event.target.value
        })
    }

    addAMovie(name) {
        var singleMovie = {};
        // var newList = [];
        singleMovie.title = name;
        // newList = 
        this.state.movies.push(singleMovie)
        this.setState ({
            movies: exampleData,
            newMovieName: ""
        })
    }
    //these 2 functions does not work very well yet, have some kinda of delay 
    // after fix it, i need to think how to use this state to filter the movies in the movie list 
   
    
    render() {
        return (
          <div>
            <h1>MovieList</h1>
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <AddMovies addAMovie = {this.addAMovie} getMovieName = {this.getMovieName} newMovieName = {this.state.newMovieName} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <Search 
                        filter = {this.searchItem}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"/>
                <div className = "col-md-3" >
                    <Category movies = {this.state.movies}/>
                </div>   
            </div>
          </div>
        )
    }
}