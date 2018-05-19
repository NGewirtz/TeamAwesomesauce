class Api::ListingsController < ApplicationController
  def index
    bedrooms = params[:bedrooms]
    bathrooms = params[:bathrooms]
    neighborhood = params[:neighborhood]
    square_footage = params[:square_footage]
    render json: Listing.price(bedrooms, bathrooms, neighborhood, square_footage)
  end

end
