class AddHours < ActiveRecord::Migration[7.0]
  def change
    add_column :shelters, :hours, :string
  end
end
