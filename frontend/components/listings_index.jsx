import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListingsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings();
  }

  createList() {
    debugger
    let listings = this.props.listings;
    return listings.map(listing => (
      <li>Id: {listing.id}, Price: {listing.price}</li>)
    );
  }

  render() {
    debugger
    if (!this.props.listings) {
      return null;
    } else {
      return (
        <div>
          <ul>
            {this.createList()}
          </ul>
        </div>
      );
    }
  }

}

export default ListingsIndex;
