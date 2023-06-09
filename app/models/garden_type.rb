class GardenType < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '庭 大型冷蔵庫' },
    { id: 3, name: '庭 冷蔵庫' },
    { id: 4, name: '庭 棚' },
    { id: 5, name: '庭 段ボール' }
  ]

  include ActiveHash::Associations
  has_many :gardens
  has_many :items
end