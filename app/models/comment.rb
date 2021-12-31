class Comment < ApplicationRecord
  belongs_to :service, dependent: :destroy 
  validates :author, :tools, :request, presence: true 
end
