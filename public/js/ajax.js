$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('hideRec', 'ajax_form', 'feedback.php');
			return false;
		}
	);
});

function sendAjaxForm(result_form, ajax_form, url) {
    var name = $("#name").val();
    var email = $("#mail").val();
    var phone = $("#phone").val();
    var message = $("#message").val();


    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $('Имя: ' + name + '<br>Телефон: ' + phone + '<br>Почта: ' + email +'<br> Сообщение: ' + message).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#result_form').html('Имя: ' + name + '<br>Телефон: ' + phone + '<br>Почта: ' + email +'<br> Сообщение: ' + message);
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
}
