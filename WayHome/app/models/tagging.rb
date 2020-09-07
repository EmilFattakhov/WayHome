class Tagging < ApplicationRecord
    belongs_to :pet
    belongs_to :tag
  
    # Each tag can only be applied to a question once 
    validates :tag_id, uniqueness: { scope: :pet_id }
  end
  