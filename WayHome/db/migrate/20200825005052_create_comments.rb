class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|

      t.text :title
      t.text :body

      t.references :pet, null: false, foreign_key: true
   
      t.timestamps
    end
  end
end
