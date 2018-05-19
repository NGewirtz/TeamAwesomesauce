export const fetchListings = (filters) => {
  return $.ajax({
    url: '/api/listings',
    method: 'GET',
    data: filters,
    error: (err) => console.log(err)
  });
};
