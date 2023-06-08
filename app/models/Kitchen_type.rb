class KitchenType < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: 'キッチン 冷蔵庫' },
    { id: 3, name: 'キッチン 大型冷蔵庫' },
    { id: 4, name: 'キッチン 棚' },
    { id: 5, name: 'キッチン 段ボール' }
  ]

  include ActiveHash::Associations
  has_many :kitchens
  has_many :items
end