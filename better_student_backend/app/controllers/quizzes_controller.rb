class QuizzesController < ApplicationController
    def index
        @quizzes = Quiz.all 
    end
    def show 
        @quiz = Quiz.find(params[:id])
    end
    def create 
        @quiz = Quiz.create(quiz_params)
        #@quiz.save
    end
    def update 
        @quiz = Quiz.find(params[:id])
        @quiz.update(quiz_params)
    end
    def destroy
        @quiz = Quiz.find(params[:id])
        @quiz.destroy
    end
    private 
    def quiz_params
        params.require(:quiz).permit(:title, :num_of_questions)
    end
end
