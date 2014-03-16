class User < ActiveRecord::Base

	validates :displayname, :presence => true
	validates :username, :presence => true

	has_secure_password

	has_many :questions

end
