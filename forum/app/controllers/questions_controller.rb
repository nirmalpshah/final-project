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
		if !params[:source_question_id].blank?
			q.answer = q.create_answer
			q.answer.source_question_id = params[:source_question_id]
		end
		if !params[:category].blank?
			q.category = q.create_category
			q.category.name = params[:category]
		end
		q.save

		respond_to do |format|
			format.html { redirect_to root_path }
			format.json { render :json => q.to_json }
		end
	end

	def update

	end

	def delete

	end

end
