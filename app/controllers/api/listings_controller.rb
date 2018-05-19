class Api::ListingsController < ApplicationController
  def index
    bedrooms = params[:bedrooms]
    bathrooms = params[:bathrooms]
    neighborhood = params[:neighborhood]
    square_footage = params[:square_footage]
    locations = Listing.where(neighborhood: neighborhood).pluck(:latitude, :longitude)
    respond_to do |format|
      format.json do
        render json: {
          price: Listing.price(bedrooms, bathrooms, neighborhood, square_footage),
          locations: locations
        }.to_json
      end
    end
  end

end
