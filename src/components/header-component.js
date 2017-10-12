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
      <nav className="navbar navbar-inverse header">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> 
            </button>
            <img className='header-logo' src='../style/images/iloveimdb-logo-black.png'></img>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">

            <ul className="nav navbar-nav navbar-right">
              <li><Link className={homeClass} to='/'>Your Movies</Link></li>
              <li><Link className={aboutUsClass} to='/aboutUs'>Our Story</Link></li>
              <li><Link className={contactUsClass} to='/contactUs'>Say Hello!</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

