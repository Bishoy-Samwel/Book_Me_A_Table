module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all
        render json: users, except: [:created_at, :updated_at], include: [:collections]
      end
      
      def create
        user = User.new(user_params)

        if user.save
          session[:id] = user.id
          render json: { status: 201, user: user, logged_in: true}
        else
          render json: { status: 500, message: 'There was an error in creating an account'}
        end
      end


      private
      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end
      
    end
  end
end