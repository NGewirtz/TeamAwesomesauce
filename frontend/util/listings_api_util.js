export const fetchListings = () => {
  return $.ajax({
    url: '/api/listings',
    method: 'GET',
    error: (err) => console.log(err)
  });
};
