class Type < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '個' },
    { id: 3, name: 'pc' },
    { id: 4, name: '本' },
    { id: 5, name: 'kg' },
    { id: 6, name: '袋' },
    { id: 7, name: '箱' },
    { id: 8, name: '缶' },
    { id: 9, name: 'ℓ' }
  ]

  include ActiveHash::Associations
  has_many :kitchen_items
end