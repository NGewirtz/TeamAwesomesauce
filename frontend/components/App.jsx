import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Gmap from './map';
import ListingIndexContainer from './listings_index_container';

const App = () => (
  <div>
    <h1>NestiYoooo</h1>
    <Gmap />
    <ListingIndexContainer />
  </div>
);

export default App;
