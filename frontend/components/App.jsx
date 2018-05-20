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
      price: 5026,
      locations: [],
      graphData: {}
    };
  }

  handleChange(bedrooms, neighborhood, bathrooms, graphData) {
    fetchListings({ bedrooms, neighborhood, bathrooms, graphData })
      .then(response => {
        console.log(response);
        this.setState(response);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Filter handleChange={this.handleChange} />
          <Charts price={this.state.price} />
          <Gmap locations={this.state.locations} />
        </div>
      </div>
    );
  }
}

export default App;
