import React from 'react';
import Gmap from './map';
import Charts from './charts';
import Filter from './listings_filter_form';
import { fetchListings } from '../util/listings_api_util.js';
import Header from './header';

class App extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      price: 5000,
      locations: []
    };
  }

  handleChange(bedrooms, neighborhood, bathrooms) {
    this.setState(fetchListings({ bedrooms, neighborhood, bathrooms }));
  }

  render() {
    return (
      <div>
        <Header />
        <Filter handleChange={this.handleChange}/>
        <Gmap locations={this.state.locations}/>
        <Charts price={this.state.price}/>
      </div>
    );
  }
}

export default App;
