@listings.each do |listing|
  json.set! listing.id do
    json.id listing.id
    json.price listing.price
  end
end
