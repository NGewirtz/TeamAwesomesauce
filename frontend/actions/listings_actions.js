import * as APIUtilListings from '../util/listings_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';

//async actions
export const receiveListings = listings => {
  return {
    type: RECEIVE_LISTINGS,
    listings
  };
};
