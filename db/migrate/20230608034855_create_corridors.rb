class CreateCorridors < ActiveRecord::Migration[6.0]
  def change
    create_table :corridors do |t|
      t.integer    :corridor_type_id, null: false
      t.string     :name,            null: false
      t.references :user,            null: false
      t.timestamps
    end
  end
end
