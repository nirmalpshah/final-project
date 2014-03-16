$(function() {

	// new question
	$(".new-question-link").click(function (e) {
		console.log(!$("#question").val());
		var group = $("#new-question-data");
		var q = $("#question");
		var c = $("#category");
		if (!q.val() || !c.val()) {
			group.addClass("has-error");
			return;
		} else {
			group.removeClass("has-error");
		} 
		$.ajax({
			url: '/questions',
			data: {
				question: q.val(),
				category: c.val()
			},
			type: 'post',
			success: function(response) {
				location.reload()
			}
		});

	});

});
