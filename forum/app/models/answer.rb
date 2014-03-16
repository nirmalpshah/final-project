class Answer < ActiveRecord::Base
	belongs_to :source_question, class_name: "Question"
	belongs_to :destination_question, class_name: "Question"
end
