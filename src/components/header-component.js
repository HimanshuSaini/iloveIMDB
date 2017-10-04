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
      		<img className='header-logo' src='../style/images/warning.png'></img>
          <Link className={contactUsClass} to='/contactUs'>Contact Us</Link>
          <Link className={aboutUsClass} to='/aboutUs'>About Us</Link>
          <Link className={homeClass} to='/'>Home</Link>
	    </div>
    );
  }
}

