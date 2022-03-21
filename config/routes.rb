Rails.application.routes.draw do
  root 'components#index'
  
  get '*page', to: 'components#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end

  namespace :api, defaults: { format: :json }  do
    namespace :v1 do
      get 'randomMessage', to: 'messages#random_message'
      post '/login', to: 'users#login'
      get '/login', to: 'users#token_authenticate'
      resources :restaurants, only: [:index, :show, :create, :destroy]
      resources :users, only: [:create] do
        resources :reservations, only: [:index, :create, :destroy]
      end
      resources :sessions, only: [:create]
    end
  end
end
