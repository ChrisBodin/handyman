class Worker < ApplicationRecord
validates :name, :phone, :email, presence: true 
has_many :services, dependent: :destroy 
end
