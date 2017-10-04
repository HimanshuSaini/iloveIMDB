import { combineReducers } from 'redux';
import MoviesReducer from './reducer-movies';

const rootReducer = combineReducers({
  movies: MoviesReducer
});

export default rootReducer;
