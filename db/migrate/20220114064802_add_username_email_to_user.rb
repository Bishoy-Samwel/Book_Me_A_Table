class AddUsernameEmailToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :username, :string, limit: 30
    add_index :users, :username, unique: true
    add_column :users, :email, :string, limit: 50
    add_index :users, :email, unique: true
  end
end
