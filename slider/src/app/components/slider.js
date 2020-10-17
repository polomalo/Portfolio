let mySlider = (function() {
  return function (selector, config) {
    let
      slider = document.querySelector(selector),
      sliderWrapper = slider.querySelector('.slider__wrap'),
      sliderItems = slider.querySelectorAll('.slider__wrap--item'),
      sliderWrapperWidtn = sliderWrapper.offsetWidth,
      sliderItemWidth = sliderItems[0].offsetWidth,   
      positionCurrentItem = 0,
      sliderHtml = slider.innerHTML,
      transform = 0,
      currentIndexIndicator = 0,
      maxIndexIndicator = sliderItems.length - 1,
      indicatorItems,
      transformStep = sliderItemWidth / sliderWrapperWidtn * 100, 
      items = [],
      sliderInterval = 0,
      startX = 0,
      itemStateIndex,
      sliderStates = [
        { active: false, minWidth: 480, count: 1 },
        { active: false, minWidth: 768, count: 2 },
        { active: false, minWidth: 1024, count: 3 }
      ],
      sliderConfig = {
        cycling: false,
        direction: 'right',
        interval: 2000,
        pause: true,
        swipeOnDesk: true
      };

    for (let key in config) {
      if (key in sliderConfig) {
        sliderConfig[key] = config[key];
      }
    }

    sliderItems.forEach((item,index) => {
      items.push({
        item: item,
        position: index,
        transform: 0
      });
    })

    let setActiveState = () => {
      itemStateIndex = 0;
      let width = document.body.offsetWidth;
      sliderStates.forEach((item,index) => {
        sliderStates[index].active = false;
        if (width >= sliderStates[index].minWidth)
          itemStateIndex = index;
      });
      sliderStates[itemStateIndex].active = true;
    }

    let getActiveState = () => {
      sliderStates.forEach((item, index) => {
        if (sliderStates[index].active) {
          itemStateIndex = index;
        }
      });
      return itemStateIndex;
    }

    let position = {
      getItemMin: () => {
        let indexItem = 0;
        items.forEach((item, index) => {
          if (item.position < items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: () => {
        let indexItem = 0;
        items.forEach((item, index) => {
          if (item.position > items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: () => {
        return items[position.getItemMin()].position;
      },
      getMax: () => {
        return items[position.getItemMax()].position;
      }
    }

    let transformItem = (direction) =>{
      let nextItem, currentIndicator = currentIndexIndicator;
      if (direction === 'right') {
        positionCurrentItem++;
        if ((positionCurrentItem + sliderWrapperWidtn / sliderItemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          items[nextItem].position = position.getMax() + 1;
          items[nextItem].transform += items.length * 100;
          items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
        }
        transform -= transformStep;
        currentIndexIndicator = currentIndexIndicator + 1;
        if (currentIndexIndicator > maxIndexIndicator) {
          currentIndexIndicator = 0;
        }
      }
      if (direction === 'left') {
        positionCurrentItem--;
        if (positionCurrentItem < position.getMin()) {
          nextItem = position.getItemMax();
          items[nextItem].position = position.getMin() - 1;
          items[nextItem].transform -= items.length * 100;
          items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
        }
        transform += transformStep;
        currentIndexIndicator = currentIndexIndicator - 1;
        if (currentIndexIndicator < 0) {
          currentIndexIndicator = maxIndexIndicator;
        }
      }
      sliderWrapper.style.transform = 'translateX(' + transform + '%)';
      indicatorItems[currentIndicator].classList.remove('active');
      indicatorItems[currentIndexIndicator].classList.add('active');
    }

    let slideTo = (to) => {
      let i = 0, direction = (to > currentIndexIndicator) ? 'right' : 'left';
      while (to !== currentIndexIndicator && i <= maxIndexIndicator) {
        transformItem(direction);
        i++;
      }
    }

    let cycle = (direction) => {
      if (!sliderConfig.cycling) {
        return;
      }
      sliderInterval = setInterval(() => {
        transformItem(direction);
      }, sliderConfig.interval);
    }

    let controlClick = (e) =>{
      if (e.target.classList.contains('slider__control')) {
        e.preventDefault();
        let direction = e.target.classList.contains('slider__btnNext') ? 'right' : 'left';
        transformItem(direction);
        clearInterval(sliderInterval);
        cycle(sliderConfig.direction);
      }
      if (e.target.getAttribute('data-slide-to')) {
        e.preventDefault();
        slideTo(parseInt(e.target.getAttribute('data-slide-to')));
        clearInterval(sliderInterval);
        cycle(sliderConfig.direction);
      }
    }

    let isTouchDevice = () => {
      return !!('ontouchstart' in window || navigator.maxTouchPoints);
    };

    let refresh = () => {
      clearInterval(sliderInterval);
      slider.innerHTML = sliderHtml;
      sliderWrapper = slider.querySelector('.slider__wrap');
      sliderItems = slider.querySelectorAll('.slider__wrap--item');
      sliderWrapperWidtn = sliderWrapper.offsetWidth;
      sliderItemWidth = sliderItems[0].offsetWidth; 
      positionCurrentItem = 0;
      transform = 0;
      currentIndexIndicator = 0;
      maxIndexIndicator = sliderItems.length - 1;
      indicatorItems;
      transformStep = sliderItemWidth / sliderWrapperWidtn * 100;
      items = [];
      sliderItems.forEach((item,index) => {
        items.push({
          item: item,
          position: index,
          transform: 0
        });
      });
      addIndicators();
    }

    let setUpListeners = () =>{
      slider.addEventListener('click', controlClick);
      if (sliderConfig.pause && sliderConfig.cycling) {
          slider.addEventListener('mouseenter', () => {
          clearInterval(sliderInterval);
        });
        slider.addEventListener('mouseleave', () => {
          clearInterval(sliderInterval);
          cycle(sliderConfig.direction);
        });
      }
      if (isTouchDevice()) {
        slider.addEventListener('touchstart', (e) => {
          startX = e.changedTouches[0].clientX;
        });
        slider.addEventListener('touchend', (e) => {
          let
            endX = e.changedTouches[0].clientX,
            deltaX = endX - startX;
          if (deltaX > 50) {
            transformItem('left');
          } else if (deltaX < -50) {
            transformItem('right');
          }
        });
      } else if (sliderConfig.swipeOnDesk){
          slider.addEventListener('mousedown', (e) => {
            startX = e.clientX;
          });
          slider.addEventListener('mouseup', (e) => {
            let
              endX = e.clientX,
              deltaX = endX - startX;
            if (deltaX > 50) {
              transformItem('left');
            } else if (deltaX < -50) {
              transformItem('right');
            }
          });
        }

        window.addEventListener('resize', () => {
          let
            itemStateIndex = 0,
            width = document.body.offsetWidth;
          sliderStates.forEach((item, index) => {
            if (width >= sliderStates[index].minWidth)
              itemStateIndex = index;
          });
          if (itemStateIndex !== getActiveState()) {
            setActiveState();
            refresh();
          }
        });
    }

    let addIndicators = () => {
      let sliderIndicators = document.createElement('ul');
      sliderIndicators.classList.add('slider__indicators');
      for (let i = 0; i < sliderItems.length; i++) {
        let sliderIndicatorsItem = document.createElement('li');
        if (i === 0) {
          sliderIndicatorsItem.classList.add('active');
        }
        sliderIndicatorsItem.setAttribute("data-slide-to", i);
        sliderIndicators.appendChild(sliderIndicatorsItem);
      }
      document.querySelector('.dots').appendChild(sliderIndicators);
      indicatorItems = document.querySelector('.dots').querySelectorAll('.slider__indicators > li')
    }

    addIndicators();
    setUpListeners();
    cycle(sliderConfig.direction);
    setActiveState();

    return {
      right: () => { 
        transformItem('right');
      },
      left: () => { 
        transformItem('left');
      },
      cycle: () => {
        sliderConfig.cycling = true;
        clearInterval(sliderInterval);
        cycle();
      },
      stop: () => {
        sliderConfig.cycling = false;
        clearInterval(sliderInterval);
      },
      swipeOnDesk: () =>{
        sliderConfig.swipeOnDesk = false;
      }
    }

  }
}());

let slider = mySlider('.slider', {
  cycling: true,
  swipeOnDesk: false
})