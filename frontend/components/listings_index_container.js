import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchListings } from '../actions/listings_actions';

import ListingsIndex from './listings_index';

const mSTP = (state) => {
  return {
    listings: Object.values(state.entities.listings)
  };
};

const mDTP = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings())
  };
};

export default connect(mSTP, mDTP)(ListingsIndex);
