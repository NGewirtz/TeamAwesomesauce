export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {

    //keep a list of all the listings we're looking at now
    const allListings = {};


    // listings.forEach(listing => allListings[listing.id] = listing);

    Object.entries(listings).forEach(
    ([key, value]) => {
      allListings[key] = value;
      this.createMarkerFromList(value);
    }
    );
    // console.log(allListings);
    //for each listing, create a marker on map
    // listings
    // .filter(listing => !this.markers[listing.id])
    // .forEach(newlisting => this.createMarkerFromList(newlisting));

    //get rid of old marks that aren't in allListings anymore
    Object.keys(this.markers)
    .filter(listingID => !allListings[ListingID])
    .forEach((ListingID) => this.removeMarker(this.markers[ListingID]));

    // console.log(this.markers);

  }

  createMarkerFromList(listing) {
    //here is where the actual creation happens
    console.log(listing);
    const position = new google.maps.LatLng(listing.location.latitude, listing.location.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      ListingID: listing.id
    });

    // marker.addListener('click', () => this.handleClick(bench));
    // this.markers[marker.benchId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.ListingID].setMap(null);
    delete this.markers[marker.ListingID];
  }
}
