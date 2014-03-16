class User < ActiveRecord::Base

	validates :displayname, :presence => true
	validates :username, :presence => true

	before_save do
		self.displayname.chomp!
	end

	has_secure_password

	has_many :questions

end
