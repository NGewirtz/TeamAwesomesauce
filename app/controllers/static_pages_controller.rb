require 'httparty'

class StaticPagesController < ApplicationController
  def root
    auth = {:username => "7950b9f2b4f040a190896f92c9ed81c6", :password => ""}
    @json = HTTParty.get("https://nestiolistings.com/api/v2/listings/residential/rentals/", :basic_auth => auth)
    puts @json
  end
end
