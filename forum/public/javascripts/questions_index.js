$(function() {

	// new question
	$(".new-question-link").click(function (e) {
		$.ajax({
			url: '/questions',
			data: {
				question: $("#question").val(),
				category: $("#category").val()
			},
			type: 'post',
			success: location.reload()
		});

	});

});
