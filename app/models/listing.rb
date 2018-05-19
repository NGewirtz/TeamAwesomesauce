class Listing < ApplicationRecord
  def self.import
    10.times do |x|
      auth = {:username => "7950b9f2b4f040a190896f92c9ed81c6", :password => ""}
      json = JSON.parse(HTTParty.get("https://nestiolistings.com/api/v2/listings/residential/rentals/?page=#{x + 1}", :basic_auth => auth).body)
      json["items"].each do |item|
        next unless item["price"]
        neighborhood = item["building"]["neighborhood"] ? item["building"]["neighborhood"]["name"] : "NA"
        square_footage = item["square_footage"] ? item["square_footage"] : "NA"
        bedrooms = item["bedrooms"] ? item["bedrooms"] : "NA"
        bathrooms = item["bathrooms"] ? item["bathrooms"] : "NA"
        Listing.create!(
          price: item["price"],
          bedrooms: bedrooms,
          bathrooms: bathrooms,
          neighborhood: neighborhood,
          square_footage: square_footage
        )
      end
    end
  end

  def self.price()
  end

end
