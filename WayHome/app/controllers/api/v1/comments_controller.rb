class Api::V1::CommentsController < Api::ApplicationController

    # before_action :authenticate_user!, except: [:index, :show]
    before_action :find_comment, only: [ :destroy]

    def index
        @pet = Pet.find(params[:pet_id])
        comments = Comment.order(created_at: :desc)
        render(json: comments)
      end
    
      def show
        if @comment
        render(
          json: @comment    )
        else
          render(json: {error: 'Comment Not found'})
        end
      end
    
      def create
        pet = Pet.find(params[:pet_id])
        comment = Comment.new comment_params
        comment.pet = pet
        comment.user = current_user
        comment.save!
        render json: { id: comment.id }
      end

      private

      def find_comment
       @comment ||= Comment.find params[:id]
      end

  def comment_params
    params.require(:comment).permit(:title, :body)
  end

end
