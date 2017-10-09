import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    let homeClass, aboutUsClass, contactUsClass;
    if(this.props.selected === 'contactUs') {
      contactUsClass='selected-page';
    }
    else if(this.props.selected === 'aboutUs') {
      aboutUsClass='selected-page';
    }
    else {
      homeClass='selected-page';
    }

    return (
      	<div className='header'>
      		<img className='header-logo' src='../style/images/iloveimdb-logo-black.png'></img>
          <Link className={contactUsClass} to='/contactUs'>Say Hello!</Link>
          <Link className={aboutUsClass} to='/aboutUs'>Our Story</Link>
          <Link className={homeClass} to='/'>Your Movies</Link>
	    </div>
    );
  }
}

