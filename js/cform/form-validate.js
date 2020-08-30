function valid_datas(f) {

    if (f.name.value == '') {
        jQuery('#form_status').html('<span class="wrong">Your name must not be empty!</span>');
        notice(f.name);
    } else if (f.email.value == '') {
        jQuery('#form_status').html('<span class="wrong">Your email must not be empty and correct format!</span>');
        notice(f.email);
    } else if (f.room.value == '') {
        jQuery('#form_status').html('<span class="wrong">Your no of rooms must not be empty and correct format!</span>');
        notice(f.room);
    } else if (f.phone.value == '') {
        jQuery('#form_status').html('<span class="wrong">Your phone must not be empty and correct format!</span>');
        notice(f.phone);
    } else if (f.location.value == '') {
        jQuery('#form_status').html('<span class="wrong">Your location must not be empty!</span>');
        notice(f.location);
    } else if (f.person.value == '') {
        jQuery('#form_status').html('<span class="wrong">Your person name must not be empty!</span>');
        notice(f.person);
    } else if (f.start.value == '') {
        jQuery('#form_status').html('<span class="wrong">this must not be empty! enter year</span>');
        notice(f.start);
    } else if (f.message.value == '') {
        jQuery('#form_status').html('<span class="wrong">Your message must not be empty!</span>');
        notice(f.message);
    } else {
        jQuery.ajax({
            url: 'mail.php',
            type: 'post',
            data: jQuery('form#gsr-contact').serialize(),
            complete: function(data) {
                jQuery('#form_status').html(data.responseText);
                jQuery('#gsr-contact').find('input,textarea').attr({ value: '' });
                jQuery('#gsr-contact').css({ opacity: 1 });
                jQuery('#gsr-contact').remove();
            }
        });
        jQuery('#form_status').html('<span class="loading">Sending your message...</span>');
        jQuery('#gsr-contact').animate({ opacity: 0.3 });
        jQuery('#gsr-contact').find('input,textarea,button').css('border', 'none').attr({ 'disabled': '' });
    }

    return false;
}

function notice(f) {
    jQuery('#gsr-contact').find('input,textarea').css('border', 'none');
    f.style.border = '1px solid red';
    f.focus();
}