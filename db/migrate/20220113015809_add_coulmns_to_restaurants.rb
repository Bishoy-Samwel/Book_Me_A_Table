class AddCoulmnsToRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :city, :string
    add_column :restaurants, :country, :string
    add_column :restaurants, :address, :string
    add_column :restaurants, :price, :decimal
  end
end
