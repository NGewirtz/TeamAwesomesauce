class Listing < ApplicationRecord
  ROWS = [:bedrooms, :bathrooms, :neighborhood, :square_footage]

  def self.import
    10.times do |x|
      auth = {:username => "7950b9f2b4f040a190896f92c9ed81c6", :password => ""}
      json = JSON.parse(HTTParty.get("https://nestiolistings.com/api/v2/listings/residential/rentals/?page=#{x + 1}", :basic_auth => auth).body)
      json["items"].each do |item|
        puts
        next unless item["price"]
        neighborhood = item["building"]["neighborhood"] ? item["building"]["neighborhood"]["name"] : "NA"
        square_footage = item["square_footage"] ? item["square_footage"] : "NA"
        bedrooms = item["bedrooms"] ? item["bedrooms"] : "NA"
        bathrooms = item["bathrooms"] ? item["bathrooms"] : "NA"
        latitude = item["building"]["location"] ? item["building"]["location"]["latitude"] : "NA"
        longitude = item["building"]["location"] ? item["building"]["location"]["longitude"] : "NA"
        pics = item["photos"].length
        floor = item["floor"]
        amenities = item["amenities"].length
        Listing.create!(
          price: item["price"],
          bedrooms: bedrooms,
          bathrooms: bathrooms,
          neighborhood: neighborhood,
          square_footage: square_footage,
          latitude: latitude,
          longitude: longitude,
          number_of_pics: pics,
          floor: floor,
          amenities: amenities
        )
      end
    end
  end

  def self.price(bedrooms, bathrooms, neighborhood)
    bedrooms = find_median(:bedrooms, bedrooms.to_i)
    bathrooms = find_median(:bathrooms, bathrooms.to_f)
    neighborhood = find_median(:neighborhood, neighborhood)
    price = (bedrooms + bathrooms + neighborhood) / 3
    price
  end

  private

  def self.find_median(sym, val)
    all = Listing.where(sym => val).order('price')
    count = all.count
    median_price = all[count/2].price
    median_price
  end

end
