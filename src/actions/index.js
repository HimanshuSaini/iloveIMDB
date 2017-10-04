import axios from 'axios';

export const API_KEY = '82ce13f2'; 
export const ROOT_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovie(movieName) {
	const url = `${ROOT_URL}&t=${movieName}&y=&plot=short&r=jsonp`;

	const request = axios.get(url).then((response) => {
		if(response.data.Response === 'False') {
			response.data['Title'] = movieName;
		}
		return response;
	});

	return {
		type: FETCH_MOVIE,
		payload: request
	};
}