class SessionsController < ApplicationController
	respond_to :json

	def destroy
		reset_session
		redirect_to root_path
	end

	def create
		username = params[:email]
		user = User.find_by(username: username)

		if user
			if user.authenticate(params[:password])
				session[:user_id] = user.id
				render json: { success: true, displayname: user.displayname }
			else
				render json: { success: false, error: 'password' }
			end
		else
			render json: { success: false, error: 'email' }
		end
	end

end
