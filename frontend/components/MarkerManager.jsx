export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }


  updateMarkers(listings) {

    //keep a list of all the businesses we're looking at now
    const allListings = {};
    listings.forEach(listing => allListings[listing.id] = listing);

    //for each business create a marker on map
    businesses
    .filter(listing => !this.markers[listing.id])
    .forEach(newlisting => this.createMarkerFromList(newlisting));

    //get rid of old marks that aren't in allBusiness anymore
    Object.keys(this.markers)
    .filter(listingID => !allListings[ListingID])
    .forEach((ListingID) => this.removeMarker(this.markers[ListingID]));

  }

  createMarkerFromBiz(listing) {
    //here is where the actual creation happens
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
