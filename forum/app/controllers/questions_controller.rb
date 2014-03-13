class QuestionsController < ApplicationController

	def index
		@questions = Question.all
	end

	def show
		@question = Question.find_by id: params["id"]
	end

	def create
		question = Question.new
		q = params[:question]
		user_id = session[:user_id]
		type = params[:type]

		question.save

	end
	
	#def new
	#end

	def update

	end

	def delete

	end

end
