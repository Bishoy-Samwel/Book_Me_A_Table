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
      def create
        @restaurant = Restaurant.new(item_params)
        if @restaurant.save
          render json: { success: 'Item saved' }
        else
          render json: { error: ['Unable to save item'] }, status: 400
        end
      end
      def item_params
        params.permit(:name, :country, :address, :city, :img_url, :desc, :phone, :price)
      end
    end
  end
end