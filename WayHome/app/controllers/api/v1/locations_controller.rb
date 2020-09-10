class Api::V1::LocationsController < Api::ApplicationController

    before_action :find_location, only: [ :destroy]

    def index
        @pet = Pet.find(params[:pet_id])
        locations = Location.order(created_at: :desc)
        render(json: locations)
      end
    
      def show
        if @location
        render(
          json: @location    )
        else
          render(json: {error: 'Location Not found'})
        end
      end
    
      def create
        pet = Pet.find(params[:pet_id])
        location = Location.new location_params
        location.pet = pet
        location.user = current_user
        location.save!
        render json: { id: location.id }
      end

      private

      def find_location
       @location ||= Location.find params[:id]
      end

  def location_params
    params.require(:location).permit(:long, :lat)
  end

end

