import { FETCH_MOVIE } from '../actions/index';

export default function(state = {}, action, movieName) {
	switch(action.type) {
		case FETCH_MOVIE:
			return { ...state, [action.payload.data.Title]: (action.payload.data.Response ? action.payload.data : movieName)};
	}
	return state;
}