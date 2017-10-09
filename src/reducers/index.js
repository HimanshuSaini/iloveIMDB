import { combineReducers } from 'redux';
import MoviesReducer from './reducer-movies';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  form: formReducer
});

export default rootReducer;