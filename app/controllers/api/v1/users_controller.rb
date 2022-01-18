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

      def login
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
          payload = {user_id: user.id}
          token = encode(payload)
          render :json => {user: user, token:token}
        else
          render json: {error: "User not found"}
        end
      end
    
      def token_authenticate
        token = request.headers["Authenticate"]
        user = User.find(decode(token)["user_id"])
        render json: user
      end

      private
      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end
      
    end
  end
end