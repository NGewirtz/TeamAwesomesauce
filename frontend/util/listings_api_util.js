export const fetchListings = () => {
  return $.ajax({
    url: "https://nestiolistings.com/api/v2/listings/350889/?key=effc73a30e0946e2acd5f06510ed52fe",
    method: 'GET'
  });
};
