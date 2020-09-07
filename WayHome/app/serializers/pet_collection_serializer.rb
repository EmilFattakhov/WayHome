class PetCollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :animal, :age, :sex, :breed, :colour, :location_lost, :distinctive_features, :flag, :time_lost, :created_at, :updated_at, :pictures, :locations

end
