class Calendar < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  
  validates :title, presence: true
  validates :user,  presence: true

  belongs_to :user
  belongs_to :color
end
