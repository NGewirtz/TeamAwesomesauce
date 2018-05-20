export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(listings) {

    //keep a list of all the listings we're looking at now


    // listings.forEach(listing => allListings[listing.id] = listing);
    //for each listing, create a marker on map
    listings.forEach(
    pos => {
      this.createMarkerFromList(pos);
    }
    );


    // console.log(this.markers);

  }

  createMarkerFromList(listing) {
    //here is where the actual creation happens

    let position = new google.maps.LatLng(listing[0], listing[1]);
    let marker = new google.maps.Marker({
      position,
      map: this.map,
      ListingID: listing.id
    });

    this.markers.push(marker);

    // marker.addListener('click', () => this.handleClick(bench));
    // this.markers[marker.benchId] = marker;
  }

  // Sets the map on all markers in the array.
      setMapOnAll(map) {
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      clearMarkers() {
        this.setMapOnAll(null);
      }

      // Deletes all markers in the array by removing references to them.
      deleteMarkers() {
        this.clearMarkers();
        this.markers = [];
      }
}
