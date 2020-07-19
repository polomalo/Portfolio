import $ from 'jquery';

let leftParalax = document.querySelector('.banner__content--desc--leftParal');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    leftParalax.style.transform = 'translate(-' + x * 1.5 + 'vw, -' + y * 1.5 + 'vw)';
});
let rightParalax = document.querySelector('.header__rightParal');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    rightParalax.style.transform = 'translate(-' + x * 1.5 + 'vw, -' + y * 1.5 + 'vw)';
});
$('.banner__popup--close').on('click', function(){
  $('.banner__popup').removeClass('show');
  $('.banner__popup--back').removeClass('show');
});
$('.banner__content--desc--btn').on('click', function(){
  $('.banner__popup').addClass('show');
  $('.banner__popup--back').addClass('show');
});
$('.banner__popup--back').on('click', function(){
  $('.banner__popup').removeClass('show');
  $('.banner__popup--back').removeClass('show');
});

$('.banner__popup--ok--close').on('click', function(){
  $('.banner__popup--ok').removeClass('show');
  $('.banner__popup--back').removeClass('show');
});
$('.banner__popup--back').on('click', function(){
  $('.banner__popup--ok').removeClass('show');
  $('.banner__popup--back').removeClass('show');
});
$('.banner__popup--desc--btn').on('click', function(){
  $('.banner__popup').removeClass('show');
  $('.banner__popup--ok').addClass('show');
  $('.banner__popup--back').addClass('show');
});

$('.header__signUp').on('click', function(){
  $('.banner__popup').addClass('show');
  $('.banner__popup--back').addClass('show');
});
var x = document.getElementById("header__nav--burger");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("header__nav--list");
  element.classList.toggle("open");

  x.classList.toggle("change");
}
