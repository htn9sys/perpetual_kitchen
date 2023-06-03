class Kitchen < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  validates :type_id, presence: true
  validates :user,    presence: true

  belongs_to :user
  belongs_to :type
end
