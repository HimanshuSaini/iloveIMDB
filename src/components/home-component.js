import React, { Component } from 'react';
import MovieList from './movie-list-component';
import ChooseFolder from './choose-folder-component';
import Header from './header-component';

export default class Home extends Component {
  render() {
    return (
      <div>
      	<Header selected='home'/>
      	<ChooseFolder />
	    <MovieList />
      </div>
    );
  }
}
