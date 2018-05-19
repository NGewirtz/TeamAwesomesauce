class Api::ListingsController < ApplicationController
  def index
    listings = Listing.all

    @listings = [];

    if params[:bedrooms] == "All"
      @listings = Listing.all
    elsif params[:bedrooms]
      listings.each {|listing| @listings.push(listing) if listing.bedrooms == params[:bedrooms]}
    else
      @listings = Listing.all
    end

    @listings
  end
end
