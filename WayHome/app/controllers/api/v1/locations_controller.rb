class Api::V1::LocationsController < Api::ApplicationController

    def create
        pet = Pet.find_by_id(params[:id])
        location = Location.new(params.require(:location).permit(:lat, :long))
        location.pet = pet
        location.user = current_user
        if location.save 
            render json: {id: pet.id}
        else
            render(
                json: {errors: location.errors},
                status: 101
            )
        end
    end
end

