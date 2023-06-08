class Item < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  validates :name,         presence: true
  validates :quantity,     presence: true
  validates :unit_id,      presence: true
  validates :date_type_id, presence: true
  validates :date,         presence: true
  validates :user,         presence: true
  validate  :ensure_single_association

  belongs_to :user
  belongs_to :unit
  belongs_to :date_type

  belongs_to :kitchen, optional: true
  belongs_to :corridor, optional: true
  belongs_to :garden, optional: true
  belongs_to :storage, optional: true

  private

  def ensure_single_association
    associations = [kitchen, corridor, garden, storage].compact
    if associations.length != 1
      errors.add(:base, "Item must be associated with exactly one location (kitchen, corridor, garden, or storage)")
    end
  end
end