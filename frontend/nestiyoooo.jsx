import React from 'react';
import ReactDOM from 'react-dom';


import configureStore from './store/store';
import Root from './components/root';

import { fetchListings } from './actions/listings_actions';
window.fetchListings = fetchListings;


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(<App />, root);
});
