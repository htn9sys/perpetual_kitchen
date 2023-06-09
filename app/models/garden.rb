class Garden < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  validates :garden_type_id, presence: true
  validates :user,           presence: true

  belongs_to :user
  belongs_to :garden_type
  has_many :items
end
