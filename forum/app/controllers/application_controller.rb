class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

	before_filter :load_user

	protected
	def load_user
		user_id = session[:user_id]
		if !user_id.blank?
			user = User.find_by id: user_id
			if user
				@displayname = user.displayname
			end
		else
			@displayname = nil
		end
	end

end
