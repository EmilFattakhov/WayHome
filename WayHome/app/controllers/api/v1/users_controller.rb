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

    #   def show
    #     @user=User.find(session[:user_id])
    # end
    def show
      user = User.find(params[:id])
      pets = Pet.where(user_id: user)
      # pets = Pet.find(params[user.id])
      render json: { user: user, pets: pets }
    end


  end
  