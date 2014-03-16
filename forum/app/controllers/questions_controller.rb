class QuestionsController < ApplicationController

	def index
		@questions = Question.all
	end

	def show
		@question = Question.find_by id: params["id"]

		respond_to do |format|
			format.html
			format.json { render :json => @question.to_json(:include => [:user, :questions]) }
		end
	end

	def create
		# need to check if user has valid sessoin first
		q = Question.new
		q.question = params[:question]
		q.user_id = session[:user_id]
		q.answer = q.create_answer
		q.answer.source_question_id = params[:source_question_id]

		q.save

		render :json => q.to_json

	end
	
	def update

	end

	def delete

	end

end
