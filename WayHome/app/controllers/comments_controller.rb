class CommentsController < ApplicationController

    def create 
        @pet = Pet.find params[:pet_id]
        @comment = Comment.new comment_params
        @comment.pet = @pet
        @comment.user = current_user
        if @comment.save
            redirect_to pet_path(@pet)
        else 
            @pets = @pet.comments.order(created_at: :desc)
            render 'pets/show'
        end
    end

    def destroy
        @comment = Comment.find params[:id]
        if can?(:crud, @comment) 
            @comment.destroy 
            redirect_to pet_path(@comment.pet)
        else
            head :unauthorized
            redirect_to root_path, alert: 'Not Authorized'
        end
    end

    def comment_params 
        params.require(:comment).permit(:title, :body)
    end

end
