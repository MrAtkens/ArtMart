
(function ($) {

	$.fn.initForm = function (options) {
		var settings = $.extend({
			type: 'post',
			serverUrl: '#',
			successClean: this.find('.form-success-clean'),
			successGone: this.find('.form-success-gone'),
			successInvisible: this.find('.form-success-invisible'),
			successVisible: this.find('.form-success-visible'),
			textFeedback: this.find('.form-text-feedback'),
		}, options);
		var $ajax = {
			sendRequest: function (p) {
				var form_fill = $(p);

				// Get the form data.
				var form_inputs = form_fill.find(':input');
				var form_data = {};
				form_inputs.each(function () {
					form_data[this.name] = $(this).val();
				});
				$.ajax(
					{

						url: settings.serverUrl,
						type: settings.type,
						data: form_data,
						dataType: 'json',

						/* CALLBACK FOR SENDING EMAIL GOEAS HERE */
						success: function (data) {
							//Ajax connexion was a success, now handle response
							if (data && !data.error) {
								// Hide for if no error
								settings.successClean.val("");
								settings.successInvisible.addClass('invisible');
								settings.successGone.addClass('gone');
								settings.successVisible.removeClass('invisible');
								settings.successVisible.removeClass('gone');
								console.log('allclen');
							}
							// Else the login credentials were invalid.
							else {
								//Ajax connexion reject an error a success, now handle response
								settings.textFeedback.removeClass('gone');
								settings.textFeedback.removeClass('invisible');
								settings.textFeedback.html('Всё прошло успешно спасибо за сообщение');
								console.log('allclen');
							}
						},
						/* show error message */
						error: function (jqXHR, textStatus, errorThrown) {
							//ajax error
							settings.textFeedback.removeClass('gone');
							settings.textFeedback.removeClass('invisible');
							settings.textFeedback.html('Всё прошло успешно спасибо за сообщение');
							console.log('allclen');

						}
						/* END EMAIL SENDING CALLBACK */
					});
			}

		};


		//if jquery validator plugin is enable, use it
		if (jQuery.validator) {
			jQuery.validator.setDefaults({
				success: "valid"
			});
			this.validate({
				rules: {
					field: {
						required: true,
						email: true
					}
				}
			});
		}



		this.submit(function (event) {
			// prevent default submit
			console.log('Send request');
			event.preventDefault();
			// use jquery validator plugin if it is enabled
			if (jQuery.validator) {
				if ($(this).valid()) {
					$ajax.sendRequest(this);
				}
			}
			else {
				$ajax.sendRequest(this);
			}
		});

	};

}(jQuery));

/* End of ajax */


// Make them as plugin
