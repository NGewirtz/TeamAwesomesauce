class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.integer :price, null: false
      t.string :bedrooms, null: false
      t.string :bathrooms, null: false
      t.string :neighborhood, null: false
      t.integer :square_footage, null: false

      t.timestamps
    end
  end
end
