class CreateKitchens < ActiveRecord::Migration[6.0]
  def change
    create_table :kitchens do |t|
      t.integer    :kitchen_type_id, null: false
      t.string     :name,            null: false
      t.references :user,            null: false
      t.timestamps
    end
  end
end
