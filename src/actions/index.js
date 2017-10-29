import axios from 'axios';
import sendMailService from '../services/contact-us-service';

export const API_KEY = '82ce13f2'; 
export const ROOT_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const SENDING_MAIL = 'SENDING_MAIL';
export const MAIL_SENT = 'MAIL_SENT';
export const MOVIES_SAVED = 'MOVIES_SAVED';

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

export function sendMail(form) {
	const url = 'https://iloveimdbserver.herokuapp.com/api/v1/contactUs';

	const request = axios.post(url, {
		comments: form.comments,
		email: form.email
	}).then((response) => {
		return {
			type: MAIL_SENT,
			payload: form
		};
	});
}

export function storeMovies(moviesMap) {
	const url = 'https://iloveimdbserver.herokuapp.com/api/v1/storeMovies';

	const request = axios.post(url, {
		moviesMap: moviesMap
	}).then((response) => {
		console.log('Map sent')
		return {
			type: MOVIES_SAVED
		};
	});
}