class QuizzesController < ApplicationController
    def index
        @quizzes = Quiz.all 
        render json: @quizzes, status: 200
    end
    def show 
        @quiz = Quiz.find(params[:id])
        render json: @quiz, status: 200
    end
    def create 
       #binding.pry
        @quiz = Quiz.new(quiz_params)
        @quiz.save
        render json: @quiz, status: 200
    end
    def update 
        @quiz = Quiz.find(params[:id])
        @quiz.update(quiz_params)
        render json: @quiz, status: 200
    end
    def destroy
        @quiz = Quiz.find(params[:id]).destroy
        render json: {quizId: @quiz.id}
    end
    private 
    def quiz_params
        params.require(:quiz).permit(:title, :num_of_questions)
    end
end
