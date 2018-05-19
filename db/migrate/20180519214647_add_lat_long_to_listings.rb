class AddLatLongToListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :latitude, :decimal
    add_column :listings, :longitude, :decimal
  end
end
