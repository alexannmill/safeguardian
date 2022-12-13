class AddStreetNumber < ActiveRecord::Migration[7.0]
  def change
    add_column :shelters, :street_number, :string
  end
end
