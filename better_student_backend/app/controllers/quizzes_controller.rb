class QuizzesController < ApplicationController
    def index
        @quizzes = Quiz.all 
        render json: @quizzes
    end
    def show 
        @quiz = Quiz.find(params[:id])
        render json: @quiz
    end
    def create 
        @quiz = Quiz.create(quiz_params)
        #@quiz.save
        render json: @quiz
    end
    def update 
        @quiz = Quiz.find(params[:id])
        @quiz.update(quiz_params)
        render json: @quiz
    end
    def destroy
        @quiz = Quiz.find(params[:id]).destroy
        render json: {id: @quiz.id}
    end
    private 
    def quiz_params
        params.require(:quiz).permit(:title, :num_of_questions)
    end
end
