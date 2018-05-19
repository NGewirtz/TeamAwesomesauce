import React from 'react';
import Header from './Header';
import Filters from './filters';
import Charts from './charts';
import EstateMap from './map';

const App = () => (
  <div>
    <Header />
    <Filters />
    <Charts />
    <EstateMap />
  </div>
);

export default App;
