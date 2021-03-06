class User < ApplicationRecord
  has_secure_password
  has_many :reservations, dependent: :destroy
  has_many :restaurants, through: :reservations
end
