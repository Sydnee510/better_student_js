class CreateQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.integer :num_of_questions
      t.integer :score
      t.timestamps
    end
  end
end
