class CreateGardens < ActiveRecord::Migration[6.0]
  def change
    create_table :gardens do |t|
      t.integer    :garden_type_id, null: false
      t.string     :name,           null: false
      t.references :user,           null: false
      t.timestamps
    end
  end
end
