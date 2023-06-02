class Color < ActiveHash::Base
  self.data = [
    { id: 1, name: 'None' },
    { id: 2, name: 'Red' },
    { id: 3, name: 'Blue' },
    { id: 4, name: 'Green' },
    { id: 5, name: 'Yellow' },
    { id: 6, name: 'Pink' }
  ]

  def css_class
    "color-#{id}"
  end

  def self.options_for_select
    data.map { |color| [color[:name], color[:id]] }
  end

  include ActiveHash::Associations
  has_many :calendars
end
