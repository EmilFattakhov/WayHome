class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|

      t.string :name
      t.text :description
      t.string :animal
      t.string :age
      t.string :sex
      t.string :breed
      t.string :colour
      t.string :location_lost
      t.string :distinctive_features
      t.string :flag
      t.string :time_lost

  
      t.timestamps


    end
  end
end
