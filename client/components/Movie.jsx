import React from 'react';
import Description from './Description.jsx';

export default class Movie extends React.Component {
    constructor(props) {
        super(props),
        this.state ={
            watched : false,
            description : false
        }
        this.shiftWatch = this.shiftWatch.bind(this)
    }

    shiftWatch(event) {
        this.setState({
            watched:!this.state.watched
        })
    }

    showDescription(event) {
        this.setState({
            description: !this.state.description
        })
    }


    render(){

        if (this.props.isWatchedCategory === this.state.watched) {
            return (
                <div className="movie">
                    <span onClick = {()=> this.showDescription()} className="movie" >{this.props.movie.Title}</span>
                    {/* <button onClick={() => this.shiftWatch()} className="movie-watched"> */}
                        {/* {this.state.watched && <span>Watched</span>}
                        {!this.state.watched && <span>To Watch</span>} */}
                    {/* </button> */}
                    {this.state.description && <Description movie = {this.props.movie} watched = {this.state.watched} shiftWatch = {this.shiftWatch} /> }
                </div>
            );
        } else {
            return <div/>
        }
        
    } 
}


