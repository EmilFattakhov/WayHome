class PetsController < ApplicationController

    before_action :find_pet, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!, except: [:index, :show]
    before_action :authorize!, only: [:edit, :update, :destroy]

    def new
        @pet = Pet.new
    end

    def create
        @pet = Pet.new pet_params
        @pets.user = current_user
        if @pet.save
            flash[:notice] = "Pet has been created"
            redirect_to pet_path(@pet)
        else
            render :new
        end
    end

    def show
        @comment = Comment.new
        @comments = @pet.comments.order(created_at: :desc)

    end

    def index
        @pets = Pet.all.order('updated_at DESC')
    end

    def edit
    end

    def update
        if @pet.update pet_params
            redirect_to pet_path(@pet)
        else
            render :edit
        end
    end

    def destroy 
        flash[:notice] = "Pet destroyed!"
        @pet.destroy
        redirect_to pets_path
    end

    private
    def pet_params
        params.require(:pet).permit(:name, :description, :animal, :age, :sex, :breed, :colour, :location_lost, :distinctive_features, :flag, :time_lost, :image1, :image2, :image3, :locations, :lat, :lng)
    end

    def find_pet
        @pet = Pet.find params[:id]
    end

    def authorize!
        redirect_to root_path, alert: 'Not Autorized' unless can?(:crud, @pet)
    end
end
