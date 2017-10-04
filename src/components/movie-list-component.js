import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieTile from './movie-tile-component';
import MovieNotFound from './movie-not-found-component';
import _ from 'lodash';
import dummyMovies from '../constants/dummy-movies';

class MovieList extends Component {

	render() {
		let movieList = this.props.movies;

		return(
			_.map(movieList, (movie) => {
				if(movie.imdbID) {
					return (<MovieTile movie={movie} key={movie.Title}></MovieTile>)
				}
				else {
					return (<MovieNotFound movie={movie} key={movie.Title}></MovieNotFound>)
				}
			})
		);

		}
}

function mapStateToProps({ movies }) {
	return { movies };
}

export default connect(mapStateToProps)(MovieList); 