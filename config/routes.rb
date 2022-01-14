Rails.application.routes.draw do
  root 'components#index'
  
  get '*page', to: 'components#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end

  namespace :api, defaults: { format: :json }  do
    namespace :v1 do
      get 'randomMessage', to: 'messages#random_message'
      resources :restaurants, only: [:index, :show, :create, :destroy]
      resources :users, only: [:create] do
        resources :reservations, only: [:index, :create, :destroy]
      end
      resources :sessions, only: [:create]
      get 'logged_in', to: 'sessions#logged_in'
      delete 'logout', to: 'sessions#logout'
    end
  end
end
