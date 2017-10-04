import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import Home from './components/home-component';
import AboutUs from './components/about-us-component';
import ContactUs from './components/contact-us-component';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
  	<BrowserRouter>
  		<Switch>
  			<Route path='/aboutUs' component={AboutUs} />
	    	<Route path='/contactUs' component={ContactUs} />
	    	<Route path='/' component={Home} />
  		</Switch>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
