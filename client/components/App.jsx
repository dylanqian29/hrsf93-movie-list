import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';
import Category from './Category.jsx';
import exampleData from '../data/exampleData.js';

export default class App extends React.Component {

    constructor(props) {
        super(props),
        this.state = {
            movies: [{
                Title: 'Hackers',
                Year: 2016,
                Metascore: 5.0
                }, {
                Title: 'Mean Girls', 
                Year: 2015,
                Metascore: 4.6
                }
            ],
            newMovieName:"",
        }
        this.searchItem = this.searchItem.bind(this);
        this.getMovieName = this.getMovieName.bind(this);
        this.addAMovie = this.addAMovie.bind(this);
    }

    searchItem(name) {
        var selectMovies = [];
        for (var i = 0; i < this.state.movies.length;i++) {
            let movieName = this.state.movies[i].title.toUpperCase();
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

   addAMovie(name){
       var newName = name.split(' ').join('+')
       var query = 'https://api.themoviedb.org/3/search/movie?api_key=17b834e74ca4466599e2d94b11d482ab&query=' + newName;

       axios.get(query)
        .then((response) => {
            var individual = {
                Title: response.data.results[0].original_title,
                Year: response.data.results[0].release_date.slice(0,4),
                Metascore: response.data.results[0].vote_average
            }

        var movieList = this.state.movies
        movieList.push(individual)
        this.setState({
            movies: movieList
        })
       })
        .catch((error)=>{
            alert('There is no such movie')
        })
   }
    
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