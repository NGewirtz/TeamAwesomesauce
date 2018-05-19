@listings.each do |listing|
  json.set! listing.id do
    json.id listing.id
    json.price listing.price
    json.bedrooms listing.bedrooms
  end
end
