import $ from 'jquery'
import 'slick-carousel';

$('.banner__holder--slider').slick({
  dots:true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3800,
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

$('.banner__holder--desc--button').click(function (){
  $('html, body').animate({
    scrollTop: $(".contactUs").offset().top
  }, 2000);
});
