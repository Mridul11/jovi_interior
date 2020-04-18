class CreateFloorPlans < ActiveRecord::Migration[6.0]
  def change
    create_table :floor_plans do |t|
      t.string :floor_plan_image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
