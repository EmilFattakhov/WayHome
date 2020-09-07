class Location < ApplicationRecord

    belongs_to :pet
    belongs_to :user

end
