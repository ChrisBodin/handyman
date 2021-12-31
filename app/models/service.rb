class Service < ApplicationRecord
  belongs_to :worker, dependent: :destroy 
  has_many :comments
  validates :title, :cost, :time, presence: true 
end
