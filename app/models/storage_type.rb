class StorageType < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '倉庫 大型冷蔵庫' },
    { id: 3, name: '倉庫 冷蔵庫' },
    { id: 4, name: '倉庫 棚' },
    { id: 5, name: '倉庫 段ボール' }
  ]

  include ActiveHash::Associations
  has_many :storages
  has_many :items
end