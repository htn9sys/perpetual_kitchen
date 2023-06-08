class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string     :name,            null: false
      t.integer    :quantity,        null: false
      t.integer    :unit_id,         null: false
      t.integer    :date_type_id,    null: false
      t.date       :date,            null: false
      t.text       :description
      t.references :user,            null: false
      t.references :kitchen
      t.references :corridor
      t.references :garden
      t.references :storage
      t.timestamps
    end
  end
end
