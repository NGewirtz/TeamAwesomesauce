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
      price: 4000,
      locations: []
    };
  }

  handleChange(bedrooms, neighborhood, bathrooms) {
    fetchListings({ bedrooms, neighborhood, bathrooms })
      .then(response => {
        console.log(response);
        this.setState(response);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Filter handleChange={this.handleChange}/>
        <Charts price={this.state.price}/>
      </div>
    );
  }
}

export default App;
