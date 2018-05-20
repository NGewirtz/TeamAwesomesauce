class AddFloorPicsAmenitiesToListing < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :number_of_pics, :integer
    add_column :listings, :floor, :integer
    add_column :listings, :amenities, :integer
  end
end
