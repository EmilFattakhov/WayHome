Rails.application.routes.draw do
  get "sessions/new"
  get "sessions/create"
  get "sessions/destroy"

  get "/", to: "pets#index", as: "root"

  resources :pets do
    # resources :likes, shallow: true, only: [:create, :destroy]
    # shallow: true option changes the PATH of the created route
    # original route without shallow: true => /questions/19/likes/30
    # Route with shallow: true => likes/30

    # Routes written inside of a block passed to a resource
    # method will be pre-fixed by a path corresponding
    # to the passed in symbol.
    # In this case, all nested routes will be pre-fixed
    # with '/questions/:question_id'
    resources :comments, only: [:create, :destroy]
    # equivalent to:
    # resources :answers, except: [:show, :index, :new, :edit, :update]
    # questions_answers_path(<question_id>)
    # question_answer_url(<question_id>)
    # question_answers_path(@question)
    # get :liked, on: :collection
    # above route creates a path like: GET "/questions/liked" kind of similar to questions index but only show the questions that the user has liked
  end

  resources :users, only: [:new, :create]

  # 'resource' is singular instead of 'resources'
  # Unlike 'resources', 'resource' will create routes
  # that do CRUD operation on only one thing. There will be no
  # index routes, and no route will have an ':id' wild card.
  # When using a singular resource, the controller must
  # still be plural.
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults:{format: :json} do #👈🏻 we can set default response format of the block
    namespace :v1 do
      resources :pets, only: [:create, :show, :index,:destroy, :update]
      resource :session, only:[:create]
      # resource :location, only: [:create]
      resources :locations, only: [:create, :show]
      resources :comments, only: [:create, :show]
      resources :users, only: [:create, :show]
      get "/current_user", to: "sessions#get_current_user_from_session"
    end
  end
  
end
