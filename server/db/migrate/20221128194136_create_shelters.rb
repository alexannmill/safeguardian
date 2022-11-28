class CreateShelters < ActiveRecord::Migration[7.0]
  def change
    create_table :shelters do |t|
      t.string :lat
      t.string :long
      t.string :street_address
      t.text :facility
      t.boolean :meals
      t.boolean :pets
      t.boolean :carts
      t.string :phone

      t.timestamps
    end
  end
end
