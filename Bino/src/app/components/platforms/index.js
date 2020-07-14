import $ from 'jquery';

$('.platforms__types--ipad').on("click", function(){
  kek($('.platforms__images--ipad'),
      $('.platforms__images--iphone'),
      $('.platforms__images--macbook'));
});
$('.platforms__types--iphone').on("click", function(){
  kek($('.platforms__images--iphone'),
      $('.platforms__images--ipad'),
      $('.platforms__images--macbook'));
});
$('.platforms__types--macbook').on("click", function(){
  kek($('.platforms__images--macbook'),
      $('.platforms__images--ipad'),
      $('.platforms__images--iphone'));
});
function kek(value, val2, val3){
  if(val2.hasClass("show")){
    val2.removeClass("show");
  }
  if(val3.hasClass("show")){
    val3.removeClass("show");
  }
  value.addClass("show");
}
