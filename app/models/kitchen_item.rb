class KitchenItem < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  validates :name, presence: true
  validates :type_id,      presence: true
  validates :quantity,     presence: true
  validates :unit_id,      presence: true
  validates :date_type_id, presence: true
  validates :date,         presence: true
  validates :user,         presence: true
  validates :kitchen,      presence: true

  belongs_to :user
  belongs_to :kitchen
  belongs_to :type
  belongs_to :unit
  belongs_to :date_type
end
