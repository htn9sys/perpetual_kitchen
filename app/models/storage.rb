class Storage < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  validates :storage_type_id, presence: true
  validates :user,            presence: true

  belongs_to :user
  belongs_to :storage_type
  has_many :items
end
