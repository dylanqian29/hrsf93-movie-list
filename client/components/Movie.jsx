import React from 'react';

export default class Movie extends React.Component {
    constructor(props) {
        super(props),
        this.state ={
            watched : false
        }
        this.shiftWatch = this.shiftWatch.bind(this)
    }

    shiftWatch(event) {
        this.setState({
            watched:!this.state.watched
        })
    }


    render(){

        if (this.props.isWatchedCategory === this.state.watched) {
            return (
                <div className="movie">
                    <span className="movie" >{this.props.movie.title}</span>
                    <button onClick={() => this.shiftWatch()} className="movie-watched">
                        {this.state.watched && <span>Watched</span>}
                        {!this.state.watched && <span>To Watch</span>}
                    </button>
                </div>
            );
        } else {
            return <div/>
        }
        
    } 
}


