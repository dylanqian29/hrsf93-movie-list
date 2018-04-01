import React from 'react';
import MovieList from './MovieList.jsx';


export default class Category extends React.Component {

    constructor(props) {
        super(props),
        this.state = {
            watchedOnCategory: false
        }
        this.changeToToWatch = this.changeToToWatch.bind(this)
        this.changeToWatched = this.changeToWatched.bind(this)
    }

    changeToWatched(event) {
        this.setState ({
            watchedOnCategory: true
        })
    };

    changeToToWatch(event) {
        this.setState ({
            watchedOnCategory: false
        })
    };

    render(){
        return (
            <div className = 'category form-inline'>
                <div>
                    <button onClick = {(event) => this.changeToWatched()} >Watched</button>
                    <button onClick = {(event) => this.changeToToWatch()}>To Watch</button>
                </div>
                <br/>
                <div>
                    <MovieList movies = {this.props.movies} watchedOnCategory = {this.state.watchedOnCategory} />
                </div>
            </div>
        );
    }
}
