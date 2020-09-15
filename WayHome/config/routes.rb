Rails.application.routes.draw do
  get "sessions/new"
  get "sessions/create"
  get "sessions/destroy"

  get "/", to: "pets#index", as: "root"

  resources :pets do
    resources :comments, only: [:create, :destroy]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

      namespace :api, defaults:{format: :json} do
              namespace :v1 do
                      resources :pets do
                        resources :comments
                        resources :locations
                      end
                resource :session, only:[:create, :delete, :destroy]
                # resource :location, only: [:create]
                # resources :locations, only: [:create, :show]
                # resources :comments, only: [:create, :show]
                resources :users
                get "/current_user", to: "sessions#get_current_user_from_session"
                get '/tags', to: 'pets#show_with_search'
              end
      end
  
end
