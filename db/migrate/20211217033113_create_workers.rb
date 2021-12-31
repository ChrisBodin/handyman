class CreateWorkers < ActiveRecord::Migration[6.1]
  def change
    create_table :workers do |t|
      t.string :name
      t.integer :phone
      t.string :email

      t.timestamps
    end
  end
end
