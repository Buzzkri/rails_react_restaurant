class CreateDishes < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes do |t|
      t.string :name
      t.string :belongs_to
      t.string :Menu

      t.timestamps
    end
  end
end
