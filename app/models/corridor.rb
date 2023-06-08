class Corridor < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  validates :corridor_type_id, presence: true
  validates :user,            presence: true

  belongs_to :user
  belongs_to :corridor_type
  has_many :items
end
