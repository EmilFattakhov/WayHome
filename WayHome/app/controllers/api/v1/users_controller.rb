class Api::V1::UsersController < Api::ApplicationController
    def create
      user = User.new params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :avatar)
      if user.save
        session[:user_id] = user.id
        render json: {user: user}
      else
        render json: { error: user.errors }
      end
    end

    # def index
    #   user = User.find(params[:id])
    #   render json: {user: user, avatar_url: url_for(user.avatar) }
    # end

    def index
      user = User.find(params[:id])
      pets = Pet.find(params[user])
      render json: { pets: pets }
    end

  end
  