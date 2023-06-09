class DateType < ActiveHash::Base
  self.data = [
    { id: 1, name: '期限の選択' },
    { id: 2, name: '賞味期限' },
    { id: 3, name: '消費期限' },
    { id: 4, name: 'その他(1週間前にお知らせ)' },
  ]

  include ActiveHash::Associations
  has_many :items
end