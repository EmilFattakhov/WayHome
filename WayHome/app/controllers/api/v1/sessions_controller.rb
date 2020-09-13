class Api::V1::SessionsController < Api::ApplicationController
  # 👆🏻Replace ApplicationController with Api::ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { id: user.id, avatar_url: url_for(user.avatar) }
    else
      render(
        json: { status: 404 },
        status: 404,
      )
    end
  end

  def get_current_user_from_session
    render json: current_user
  end

  def delete
    session[:user_id] = nil 
    # redirect_to root_path, notice: 'Logged Out!'
  end
end
