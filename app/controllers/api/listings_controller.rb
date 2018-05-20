class Api::ListingsController < ApplicationController
  def index
    respond_to do |format|
      format.json do
        render json: {
          price: get_price,
          locations: get_locations
        }.to_json
      end
    end
  end

  private

  def get_locations
    Listing.where(neighborhood: location_params[:neighborhood])
      .pluck(:latitude, :longitude)
  end

  def get_price
    Listing.price(
      location_params[:bedrooms],
      location_params[:bathrooms],
      location_params[:neighborhood]
    )
  end

  def location_params
    params.permit(:bedrooms, :bathrooms, :neighborhood)
  end
end
