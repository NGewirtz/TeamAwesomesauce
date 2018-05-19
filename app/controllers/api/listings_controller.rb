class Api::ListingsController < ApplicationController
  def index
<<<<<<< HEAD
  end
=======
    bedrooms = params[:bedrooms]
    bathrooms = params[:bathrooms]
    neighborhood = params[:neighborhood]
    square_footage = params[:square_footage]
    render json: Listing.price(bedrooms, bathrooms, neighborhood, square_footage)
  end

>>>>>>> 731dc2533870b3737b71ac0aacca726a220b5c4e
end
