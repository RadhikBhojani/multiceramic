$(document).ready(function () {
    $("#submit_btn").click(function () {
        var user_name = $('input[name=name]').val(); var user_email = $('input[name=email]').val(); var user_message = $('textarea[name=message]').val(); var proceed = true; if (user_name == "") { $('input[name=name]').css('border-color', '#e41919'); proceed = false; }
        if (user_email == "") { $('input[name=email]').css('border-color', '#e41919'); proceed = false; }
        if (user_message == "") { $('textarea[name=message]').css('border-color', '#e41919'); proceed = false; }
        if (proceed) {
            post_data = { 'userName': user_name, 'userEmail': user_email, 'userMessage': user_message }; $.post('contact_me.php', post_data, function (response) {
                if (response.type == 'error') { output = '<div class="error">' + response.text + '</div>'; }
                else { output = '<div class="success">' + response.text + '</div>'; $('#contact_form input').val(''); $('#contact_form textarea').val(''); }
                $("#result").hide().html(output).slideDown();
            }, 'json');
        }
        return false;
    }); $("#contact_form input, #contact_form textarea").keyup(function () { $("#contact_form input, #contact_form textarea").css('border-color', ''); $("#result").slideUp(); });
});