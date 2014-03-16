class Category < ActiveRecord::Base

	validates :name, :presence => true

	before_save(on: :update) do
		self.name = self.name.camelize
	end

	has_many :questions

end
