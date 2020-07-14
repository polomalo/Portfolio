import $ from 'jquery';
import jqueryValidation from 'jquery-validation';

$('.contact__form--sendForm--btn').on('click', function(){
  let form = $('.contact__form--sendForm'),
      successMessage = $('.contact__form--sendForm--success');

  form.validate({
    rules: {
      name: 'required',
      email: {
        required: true,
        email: true,
      },
      subject: 'required',
      message: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'The name field is required'
      },
      email: {
        required: 'The email field is required',
        email: "The e-mail address must contain @ symbol"
      },
      subject: {
        required: 'The subject field is required'
      },
      message: {
        required: 'The message field is required'
      }
    },
    errorElement: "div",

    errorPlacement: function(error, element) {
      $('.contact__form--sendForm--error').append(error);
    },

    submitHandler: function() {
            successMessage.show();
            setTimeout(function() {
                location.reload();
            }, 2500);
        }
  })
});
