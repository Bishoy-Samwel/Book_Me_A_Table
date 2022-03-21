class AddCoulmnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :f_name, :string
    add_column :users, :l_name, :string
    add_column :users, :city, :string
    add_column :users, :country, :string
    add_column :users, :phone, :string
  end
end
