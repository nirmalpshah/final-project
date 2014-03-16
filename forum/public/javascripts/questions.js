$(function() {
	// work around - underscore template syntax conflicts with erb template syntax
	_.templateSettings = {
		  interpolate: /\{\{=(.+?)\}\}/g,
			evaluate: /\{\{(.+?)\}\}/g
	};

	// dynamically load questions children
	var loadAnswer = function (answerId, reload) {
		$.ajax({
			url: '/questions/' + answerId,
			type: 'get',
			dataType: 'json',
			success: function (data) {
				var questionHtml = _.template($("#question-template").html(), data);
				var $answer = $(".answer-" + answerId + " .question-heading");
				if (!reload) {
					$answer.after(questionHtml);
					$answer.next().show(500);
				} else {
					$answer.next().hide(250).replaceWith(questionHtml);
					$answer.next().show(250);
				}
			}
		});
	}

	// load first level questions on page load
	_.each($("[class^=answer-]"), function (a) {
		loadAnswer($(a).data("id"));
	});
	//loadAnswer($(".top-question").data("id"));

	// Allow further nested questions to be loaded or hidden dynamically
	$(document.body).on("click", ".question-heading", function (e) {
		var $target = $(e.target);
		var $next = $target.next();
		if ($next.length && $next.is(':visible')) {
			$next.hide(500);
		} else {
			if ($next.length) {
				$next.show(500);
			} else {
				var questionId = $target.data("id");
				loadAnswer(questionId);
			}
		}
	});

	// Posting a response
	$(document.body).on("click", ".response-link", function (e) {
		var $target = $(e.target);
		$target.next().show();
		$target.hide();
	});

	$(document.body).on("click", ".response-save", function (e) {
		var responseString = $(e.target).prev("#response").val();
		var sourceQuestionId = $($(e.target).parents("[class^=answer-]")[0]).data("id");
		$.ajax({
			url: '/questions',
			data: {
				question: responseString,
				source_question_id: sourceQuestionId
			},
			context: sourceQuestionId,
			type: 'post',
			dataType: 'json',
			success: function (data) {
				loadAnswer(this, true);
			}
		});
	});
	
});
