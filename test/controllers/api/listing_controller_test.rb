require 'test_helper'

class Api::ListingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_listing_index_url
    assert_response :success
  end

end
