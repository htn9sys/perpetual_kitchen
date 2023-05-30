class Type < ActiveHash::Base
  self.data = [
    {id: 1, name: '---'},
    {id: 2, name: '大型冷蔵庫'},
    {id: 3, name: '冷蔵庫'},
    {id: 4, name: '棚1'},
    {id: 5, name: '段ボール'},
  ]
  
  include ActiveHash::Associations
  has_many :areas

end