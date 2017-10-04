import React, { Component } from 'react';

export default class MovieTile extends Component {

  render() {
  	let movie = this.props.movie;

    return (
      	<div className='movie-tile-container' key={movie.Title}>
	        <div className='image-wrapper'>
	            <img src={movie.Poster} />
	        </div>
	        <ul className='info-wrapper'>
	            <li className='clearfix'>
	                <h4>{movie.Title} <small>({movie.Year})</small></h4>

	                <ul className='info-horizontal'>
	                    <li>{movie.Rated}</li>
	                    <li>{movie.Country}</li>
	                    <li>{movie.Language}</li>
	                    <li>{movie.Runtime}</li>
	                    <li>{movie.Genre}</li>

	                </ul>
	            </li>
	            <li className='clearfix'>
	                <span className='rating'>
	                    {movie.imdbRating}
	                </span>
	                <p className='small-txt'><b>{movie.imdbRating}</b> / 10 From {movie.imdbVotes} users</p>

	            </li>
	            <li>
	                <ul className='info-vertical'>
	                    <li>
	                        {movie.Plot}
	                    </li>
	                    <li>
	                        <b>Director: </b><span>{movie.Director}</span>
	                    </li>
	                    <li>
	                        <b>Writer: </b><span>{movie.Writer}</span>
	                    </li>
	                    <li>
	                        <b>Actors: </b><span>{movie.Actors}</span>
	                    </li>
	                    <li>
	                        <b>Awards: </b><span>{movie.Awards}</span>
	                    </li>
	                </ul>


	            </li>
	        </ul>
	    </div>
    );
  }
}

