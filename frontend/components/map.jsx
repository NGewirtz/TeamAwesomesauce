import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from './MarkerManager';

class Gmap extends React.Component {

  componentDidMount() {

    let mapOptions = {
        center: { lat: 40.7449978, lng: -73.9937579 },
        zoom: 10
      };

    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    // console.log(this.props);
    let testdata = {
      1: {
        id: 1,
        location: {
          latitude: 40.73191,
          longitude: -74.99621
        }
      },
      2: {
        id: 2,
        location: {
          latitude: 40.731903,
          longitude: -73.996193
        }
      }
    };

    this.MarkerManager.updateMarkers(testdata);
  }

  componentDidUpdate() {


    //here: register listeners to update the bounds param, if we will have one
  }

  render() {

    return (
        <div className="map-container" ref={ map => this.mapNode = map} />
    )
  }

}

export default Gmap;
