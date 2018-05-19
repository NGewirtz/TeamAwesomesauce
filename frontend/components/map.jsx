import React from 'react';
import ReactDOM from 'react-dom';


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

    //here we will put markers logic

  }

  render() {

    return (
        <div className="map-container" ref={ map => this.mapNode = map} />
    )
  }

}

export default Gmap;
