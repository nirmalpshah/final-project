class UsersController < ApplicationController

	def create
		user = User.new
		user.displayname = params[:name]
		user.username = params[:email]
		user.password = params[:password]
		user.save
		session[:user_id] = user.id
	end

end
