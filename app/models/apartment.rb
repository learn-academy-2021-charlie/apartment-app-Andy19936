class Apartment < ApplicationRecord
    belongs_to :user
    validates :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :user_id, :img, presence:true

    validates :email, length: { minimum:7 }
end
