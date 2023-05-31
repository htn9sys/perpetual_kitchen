class CreateCalendars < ActiveRecord::Migration[6.0]
  def change
    create_table :calendars do |t|
      t.string     :title,        null: false
      t.string     :description
      t.date       :start_date
      t.date       :end_date
      t.string     :location
      t.integer    :color_id
      t.references :user
      t.timestamps
    end
  end
end
