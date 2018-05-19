class Api::ListingsController < ApplicationController
  def index
    listings = Listing.all

    @listings = [];

    if params[:price]
      listings.each {|listing| @listings.push(listing) if listing.price > 10000}
    else
      @listings = Listing.all
    end


    @listings
  end
end
