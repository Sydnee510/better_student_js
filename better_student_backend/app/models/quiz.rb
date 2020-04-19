class Quiz < ApplicationRecord
    validates :title, :num_of_questions, presence: true
    
end
