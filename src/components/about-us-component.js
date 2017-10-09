import React, { Component } from 'react';
import Header from './header-component';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
      	<Header selected='aboutUs'/>
        <div className='static-page-container'>
        	<div className='static-page-header'> Our Story </div>
          <div className='red-divider'></div>
        	<div className='about-us-content'> Being a huge movie fan having a good large collection of movies I often found myself looking at my movie collection and wondering the right movie to watch that night. It often used to end up in multiple IMDB tabs opened in browser with 15 precious minutes gone. I was also often given the honoured task by my friends of choosing movies from different genre to watch over the weekend. I loved the task. The problem was the extra time and effort that it used to take which could have been spent in actually watching the movie. </div>
          <div className='about-us-content'> So I tried to ease up the task by creating an application which can read my folder contents for movies and would fetch relevant information from IMDB. This saved my time and effort by 80%. But there was still one more problem - it was a personal application which would search only my movie collection as it was residing only on my system.</div>
          <div className='about-us-content'> Recently when I was searching for a small 10 days project to work on, I decided to recreate it, and this time, for everyone. For all of us who love watching movies from different genres and have a nice good collection. I hope you love it as much as I do. </div> 
        </div>
      </div>
    );
  }
}
