<<<<<<< HEAD
import React from 'react';

class EstateMap extends React.Component {
  render() {
    return <div>This is map</div>;
  }
}

export default EstateMap;
=======
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

  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);

    //here: register listeners to update the bounds param, if we will have one
  }

  render() {

    return (
        <div className="map-container" ref={ map => this.mapNode = map} />
    )
  }

}

export default Gmap;
>>>>>>> master
