import $ from 'jquery'
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
});
$('.header__navigation--home').click(function (){
  $('html, body').animate({
    scrollTop: $(".banner").offset().top
  }, 2000);
});
$('.header__navigation--aboutUs').click(function (){
  $('html, body').animate({
    scrollTop: $(".whoWeAre").offset().top
  }, 2000);
});
$('.header__navigation--services').click(function (){
  $('html, body').animate({
    scrollTop: $(".services").offset().top
  }, 2000);
});
$('.header__navigation--platforms').click(function (){
  $('html, body').animate({
    scrollTop: $(".platforms").offset().top
  }, 2000);
});
$('.header__navigation--portfolio').click(function (){
  $('html, body').animate({
    scrollTop: $(".portfolio").offset().top
  }, 2000);
});
$('.header__navigation--pricing').click(function (){
  $('html, body').animate({
    scrollTop: $(".pricing").offset().top
  }, 2000);
});
$('.header__navigation--team').click(function (){
  $('html, body').animate({
    scrollTop: $(".team").offset().top
  }, 2000);
});
$('.header__navigation--blog').click(function (){
  $('html, body').animate({
    scrollTop: $(".blog").offset().top
  }, 2000);
});
$('.header__navigation--contact').click(function (){
  $('html, body').animate({
    scrollTop: $(".contact").offset().top
  }, 2000);
});
var x = document.getElementById("header__navigation--burger");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("keks");
  element.classList.toggle("open");

  x.classList.toggle("change");
}
