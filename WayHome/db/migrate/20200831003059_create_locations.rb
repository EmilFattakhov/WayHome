class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|

      t.string :long
      t.string :lat

      t.references :user, foreign_key: true, index: true 
      t.references :pet, foreign_key: true, index: true 


      t.timestamps
    end
  end
end
