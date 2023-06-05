class Kitchen < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  validates :kitchen_type_id, presence: true
  validates :user,            presence: true

  belongs_to :user
  belongs_to :kitchen_type
  has_many :items
end
