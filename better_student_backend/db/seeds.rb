# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Quiz.create(title: "math", num_of_questions: 5, score: 0)
Quiz.create(title: "oop", num_of_questions: 3, score: 0)
Quiz.create(title: "english", num_of_questions: 5, score: 0)
Quiz.create(title: "science", num_of_questions: 6, score: 0)
