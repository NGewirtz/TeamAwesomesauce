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
    this.handleGraphChange = this.handleGraphChange.bind(this);
    this.state = {
      locations: [],
      graphData: {},
      graphDataType: "floor",
    };
  }

  componentDidMount() {
    fetchListings({ bedrooms: 0, neighborhood: "Battery Park City", bathrooms: 1, graph_data: "pics" })
      .then(response => {
        console.log(response);
        this.setState(response);
      });
  }

  handleChange(bedrooms, neighborhood, bathrooms, graph_data) {
    fetchListings({ bedrooms, neighborhood, bathrooms, graph_data })
      .then(response => {
        console.log(response);
        this.setState(response);
      });
  }

  handleGraphChange(){
    const graphDataType = this.state.graphDataType === "floor" ?
      "pics" : "floor";
    this.setState({graphDataType});
  }

  render() {
    const dataHash = this.state.graphDataType === "floor" ?
      this.state.graphData.floor : this.state.graphData.pics;
    return (
      <div>
        <Header />
        <div className="container">
          <Filter handleChange={this.handleChange}
            handleGraphChange={this.handleGraphChange}/>
          <Charts price={this.state.price} hash={dataHash}/>
          <Gmap locations={this.state.locations} />
        </div>
      </div>
    );
  }
}

export default App;
