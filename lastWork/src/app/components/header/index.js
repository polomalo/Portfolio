import $ from 'jquery'
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });
  $('.header__navigation--process').click(function (){
    $('html, body').animate({
      scrollTop: $(".workProcess").offset().top
    }, 2000);
  });
  $('.header__navigation--aboutUs').click(function (){
    $('html, body').animate({
      scrollTop: $(".aboutUs").offset().top
    }, 2000);
  });
  $('.header__navigation--works').click(function (){
    $('html, body').animate({
      scrollTop: $(".works").offset().top
    }, 2000);
  });
  $('.header__navigation--services').click(function (){
    $('html, body').animate({
      scrollTop: $(".services").offset().top
    }, 2000);
  });
  $('.header__navigation--testimonials').click(function (){
    $('html, body').animate({
      scrollTop: $(".testimonials").offset().top
    }, 2000);
  });
  $('.header__navigation--contacts').click(function (){
    $('html, body').animate({
      scrollTop: $(".contactUs").offset().top
    }, 2000);
  });
  $('.header__navigation--home').click(function (){
    $('html, body').animate({
      scrollTop: $(".banner").offset().top
    }, 2000);
  });

  var x = document.getElementById("header__navigation--burger");

  x.addEventListener("click", myFunction);

  function myFunction() {
    var element = document.getElementById("keks");
    element.classList.toggle("open");

    x.classList.toggle("change");
  }
