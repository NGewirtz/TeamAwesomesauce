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
import ListingsIndexContainer from './listings_index_container';
import ListingsFilterFormContainer from './listings_filter_form_container';

const App = () => (
  <div>
    <h1>NestiYoooo</h1>
    <Gmap />
    <ListingsFilterFormContainer />
    <ListingsIndexContainer />
    <Charts />
  </div>
);

export default App;
