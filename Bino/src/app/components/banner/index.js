import $ from 'jquery'
import 'slick-carousel';

$('.banner__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3800,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});
$('.banner__anchor').click(function (){
  $('html, body').animate({
    scrollTop: $(".whoWeAre").offset().top
  }, 2000);
});
$('.aboutUs__desc--a').click(function (){
  $('html, body').animate({
    scrollTop: $(".portfolio").offset().top
  }, 2000);
});
