import $ from 'jquery';
import jqueryValidation from 'jquery-validation';

$('.contactUs__form--button').on('click', function(){
  let form = $('.contactUs__form'),
      successMessage = $('.contactUs__form--success');

  form.validate({
    rules: {
      name: 'required',
      title: 'required',
      email: {
        required: true,
        email: true,
      },
      comment: {
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
      title: {
        required: 'The title field is required'
      },
      comment: {
        required: 'The comment field is required'
      }
    },
    errorElement: "div",

    errorPlacement: function(error, element) {
      $('.contactUs__form--error').append(error);
    },

    submitHandler: function() {
            successMessage.show();
            setTimeout(function() {
                location.reload();
            }, 2500);
        }
  })
})
