class Question < ActiveRecord::Base
	belongs_to :user

	before_destroy do
		self.questions.destroy
		self.answers.destroy
	end
	
	has_many :answers, :class_name => 'Answer', :foreign_key => 'source_question_id'
	has_many :questions, through: :answers, source: 'destination_question'

	has_one :answer, :class_name => 'Answer', :foreign_key => 'destination_question_id'
	has_one :answer_to, through: :answer, source: 'source_question'

	belongs_to :category, :autosave => true

end
