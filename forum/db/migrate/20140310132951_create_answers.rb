class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :source_question_id
      t.integer :destination_question_id
      t.string :label
      t.integer :user_id

      t.timestamps
    end
  end
end
