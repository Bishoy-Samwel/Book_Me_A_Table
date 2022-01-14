class NotNullColumns < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :username, false
    change_column_null :restaurants, :name, false
    change_column_null :reservations, :user_id, false
    change_column_null :reservations, :restaurant_id, false
  end
end
