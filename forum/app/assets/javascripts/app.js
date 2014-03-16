$(function() {

	// Log in
	$(".login-link").click(function() {
		$.ajax({
			url: "/sessions", 
			data: { 
				email: $("#login-username").val(),
				password: $("#login-password").val()
			},
			type: 'post',
			success: function (data) {
				var success = data.success;
				if (success) {
						$("#login-password").val('');
						$("#login-username").val('');
						$("#login-data").removeClass("has-error");
						$("#login-form").hide();
						$(".displayname").html(data.displayname);
						$("#login-success").show();
						location.reload();
					} else if (data.error == "email") {
						$("#login-username")
							.attr("placeholder", "Unknown email")
							.focus().val('');
						$("#login-password").val('');
						$("#login-data").addClass("has-error");
					} else if (data.error == "password") {
						$("#login-password")
							.addClass("has-error")
							.attr("placeholder", "Bad password")
							.focus().val('');
						$("#login-data").addClass("has-error");
					}
			}
		});
	});

	//Log out
	$(".signout-link").click(function() {
		$.ajax({
			url: "/logout",
			type: 'get',
			success: function (data) {
				location.reload();
			}
		});
	});

	// Disable form submit on enter
	$("form").bind("keypress", function(e) {
		if (e.keyCode == 13) {
			return false;
		}
	});

	// Opt-in to bootstrap popups
	$('body').popover({
		selector: '[data-toggle="popover"]'
	});

	$('body').tooltip({
		selector: 'a[rel="tooltip"], [data-toggle="tooltip"]'
	});

});
