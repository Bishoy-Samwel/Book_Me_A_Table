module Api
  module V1
    class RestaurantsController < ApplicationController
      def index
        @restaurants = Restaurant.all
        render json: @restaurants
      end
      def show
        item_id = params[:id]
        @restaurant = Restaurant.find(item_id)
        render json: @restaurant
      end
    end
  end
end