class PetCollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :animal, :age, :sex, :breed, :colour, :location_lost, :distinctive_features, :flag, :time_lost, :created_at, :updated_at, :image1, :image2, :image3, :locations, :lat, :lng

end
