import React, { Component } from 'react';

export default class MovieNotFound extends Component {

  render() {
  	let movie = this.props.movie;

    return (
      	<div className='movie-not-found-container' key={movie.Title}>
      		<img className='warning-icon' src='../style/images/warning.png'></img>
      		<span>Could not found movie with title: </span>
      		<span className='invalid-title'>{movie.Title}</span>
	    </div>
    );
  }
}

