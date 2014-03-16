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

	// Create account
	$(".account-create-link").click(function(e) {
		var username = $("#signup-username");
		var displayname = $("#signup-displayname");
		var password1 = $("#signup-password");
		var password2 = $("#signup-password2");

		var prob = false;
		_.each([username, displayname, password1, password2], function(item) {
			if (!item.val()) {
				item.parent().addClass("has-error");
				prob = true;
			} else {
				item.parent().removeClass("has-error");
			}
		});
		if (prob) return;

		$.ajax({
			url: "/users",
			type: "post",
			data: {
				name: displayname.val(),
				email: username.val(),
				password: password1.val(),
				password2: password2.val()
			},
			dataType: 'json',
			success: function(e) {
				location.reload();
			}, 
			error: function(e, f, g) {
				alert('Woops! Something went wrong, are you sure your passwords match?');
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
