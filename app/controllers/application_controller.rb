require 'jwt'
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token  
  def secret_key
    "Hakona_Matata"
  end

  def encode(payload)
    JWT.encode(payload, secret_key, 'HS256')
  end

  def decode(token)
    JWT.decode(token, "Hakona_Matata", true, {algorithm:"HS256"})[0]
  end
end
