const slider = document.querySelector('.wrap');

if (slider != null){
  let sliderItems = document.querySelectorAll('.slider__item'),
  pex = document.querySelector('.slider'),
  sliderCount = sliderItems.length,
  currentSliderItem = 0,
  sliderItemHeight = null,
  initialHeight = sliderItems[0].clientHeight;

  let sliderItemsArray = [...document.querySelectorAll('.slider__item')]
  sliderItems.forEach(function(item, index){
    if (index <=2 ){
      sliderItems[index].classList.add('active');
    }
  });
  //console.log(sliderItemsArray)
  sliderItems[currentSliderItem+1].classList.add('focus');
  //sliderItems[1].classList.add('active');


  function moveToSlide(n, direction){
    if( direction == "right"){
      sliderItemsArray[currentSliderItem].className = "slider__item";
      let keks = sliderItemsArray[currentSliderItem].cloneNode(true);
      pex.appendChild(keks);
      pex.removeChild(sliderItemsArray[currentSliderItem]);

      sliderItemsArray.push(sliderItemsArray[currentSliderItem]);
      console.log(sliderItemsArray)
      sliderItemsArray.shift();
      console.log(sliderItemsArray)
      //sliderItemsArray = [...document.querySelectorAll('.slider__item')];
      currentSliderItem = (n+sliderItemsArray.length)%sliderItemsArray.length;
      sliderItemsArray[currentSliderItem].className = "slider__item active";
      sliderItemsArray[currentSliderItem+1].className = "slider__item active focus";
      sliderItemsArray[currentSliderItem+2].className = "slider__item active";


    }

  /*function moveToSlide(n, direction){
    if( direction == "right"){
      sliderItemsArray[currentSliderItem].className = "slider__item";

      sliderItemsArray.push(sliderItemsArray[currentSliderItem]);
      console.log(sliderItemsArray);

      currentSliderItem = (n+sliderCount)%sliderCount;
      sliderItemsArray[currentSliderItem].className = "slider__item active";
      sliderItemsArray[currentSliderItem+1].className = "slider__item active focus";
      sliderItemsArray[currentSliderItem+2].className = "slider__item active";

      console.log(sliderItemsArray);

    } else if(direction=="left"){
      sliderItemsArray[currentSliderItem].className = "slider__item";
      currentSliderItem = (n+sliderCount)%sliderCount;
      sliderItemsArray[currentSliderItem].className = "slider__item active a";
      sliderItemsArray[currentSliderItem+1].className = "slider__item active focus";
      sliderItemsArray[currentSliderItem+2].className = "slider__item";
    }


*/


    sliderItemHeight = sliderItems[currentSliderItem].clientHeight;
    slider.style.height = sliderItemHeight + 'px';
    window.addEventListener('resize', function(){
      let resizedSliderItemHeight = sliderItems[currentSliderItem].clientHeight;
      slider.style.height = resizedSliderItemHeight + 'px';
    });
  }

  function nextSlide(e){
    moveToSlide(currentSliderItem+1, "right");
    //sliderItemsArray.shift(sliderItemsArray[currentSliderItem]);

  }
  function prevSlide(e){
    moveToSlide(currentSliderItem-1, "left");
  }

  const slideHandlers = {
    nextSlide: function(element){
      document.querySelector(element).addEventListener('click', nextSlide);
    },
    prevSlide: function(element){
      document.querySelector(element).addEventListener('click', prevSlide);
    }
  }

  slideHandlers.nextSlide('#slider__btnNext');
  slideHandlers.prevSlide('#slider__btnPrev');

  /*setInterval(function(){
    nextSlide();
  }, 3000);*/
}
