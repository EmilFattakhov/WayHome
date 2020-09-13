class PetSerializer < ActiveModel::Serializer
  
  attributes( 
    :id,
    :name,
    :description, 
    :animal,
    :age,
    :sex,
    :breed, 
    :colour,
    :location_lost,
    :distinctive_features,
    :flag,
    :time_lost,
    :created_at, 
    :updated_at,
    :image1,
    :image2,
    :image3,
    :locations,
    :lat, 
    :lng
  )

  belongs_to :user, key: :author

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :full_name
  end
  has_many :comments

  class CommentSerializer < ActiveModel::Serializer
  
    attributes :id, :title, :body, :created_at,:updated_at, :author_full_name

      def author_full_name
        object.user&.full_name
      end
  end

  def randomstuff
    "You can add you random stuff here"
  end
  

end
