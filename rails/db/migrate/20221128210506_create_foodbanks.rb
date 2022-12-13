class CreateFoodbanks < ActiveRecord::Migration[7.0]
  def change
    create_table :foodbanks do |t|
      t.string :lat
      t.string :long
      t.string :street_address
      t.text :facility
      t.string :hours
      t.string :phone
      t.timestamps
    end
  end
end
