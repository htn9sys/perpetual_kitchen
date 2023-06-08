class CorridorType < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '廊下 大型冷蔵庫' },
    { id: 3, name: '廊下 冷蔵庫' },
    { id: 4, name: '廊下 棚' },
    { id: 5, name: '廊下 段ボール' }
  ]

  include ActiveHash::Associations
  has_many :corridors
  has_many :items
end