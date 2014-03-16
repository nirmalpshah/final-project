class UsersController < ApplicationController

	def create
		user = User.new
		user.displayname = params[:name]
		user.username = params[:email]
		user.password = params[:password]
		user.password_confirmation = params[:password2]
		user.save!
		session[:user_id] = user.id

		respond_to do |format|
			format.json { render :json => {success: true} }
		end
	end

	def new
		render :layout => false
	end

end
