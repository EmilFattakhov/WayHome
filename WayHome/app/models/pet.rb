class Pet < ApplicationRecord

    has_many(:comments, dependent: :destroy)
    has_many :taggings, dependent: :destroy
    has_many :tags, through: :taggings
    has_many :locations, dependent: :destroy
    
    has_many_attached :pictures

    belongs_to :user

    def tag_names 
        self.tags.map(&:name).join(", ")
    end

    def tag_names=(rhs)
        self.tags = rhs.strip.split(/\s*,\s*/).map do |tag_name|
            Tag.find_or_initialize_by(name: tag_name)
        end
    end

    private

    def self.all_with_comments_counts
        self.left_outer_joins(:comments)
            .select("comments.*", "COUNT(comments.*) AS comments_count")
            .group("comments.id")

            # https://edgeguides.rubyonrails.org/active_record_querying.html#left-outer-joins
    end
end


