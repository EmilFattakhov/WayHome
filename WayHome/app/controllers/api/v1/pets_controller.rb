class Api::V1::PetsController < Api::ApplicationController

  def index
    pets = Pet.order(created_at: :desc)
    render(json: pets, each_serializer: PetCollectionSerializer)
  end

  # curl http://localhost:3000/api/v1/questions 👈🏻 To see json reply in terminal
  def show
    # curl http://localhost:3000/api/v1/questions/4 👈🏻 To see json reply in terminal for particular question id
    pet = Pet.find(params[:id])
    location = Location.new
    render(json: pet)
  end

  def create
    pet=Pet.new(params.require(:pet).permit(:name, :description, :animal, :age, :sex, :breed, :colour, :location_lost, :distinctive_features, :flag, :time_lost, :pictures))

    pet.user = current_user
    if pet.save
        render json:{id: pet.id, pictures: pictures}
    else
        render(
            json: {errors: pet.errors},
            status:422 #unprocessable entity HTTP Status code
        )
    end
  end

  def destroy
    pet = Pet.find_by_id(params[:id])
    if pet&.destroy
      render json: { status: 200, message: 'Pet deleted' }, status: 200
    else
      render json: { status: 422, message: 'Was not able to delete pet'}, status: 422
    end
  end

  def update
    pet = Pet.find params[:id]
    if pet.update(params.require(:pet).permit(:name, :description, :animal, :age, :sex, :breed, :colour, :location_lost, :distinctive_features, :flag, :time_lost, :pictures, :locations, :comments))
      render json: { id: pet.id }, status: 200
    else
      render json: { errors: pet.errors, status: 422 }, status: 422
    end
  end

end
