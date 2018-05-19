export const fetchListings = () => {
  return $.ajax({
    url: '/api/listings',
    method: 'GET',
    data: 'I don\'t know',
    error: (err) => console.log(err)
  });
};
