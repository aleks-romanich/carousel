

function createCarousel(){
  var width = 600;
  var count = 1;
  var carousel = document.getElementById('carousel');
  var list = carousel.querySelector('ul');
  var listElems = carousel.querySelectorAll('li');
  var position = 0;

  return {
    moveLeft: function(){
      position = Math.min(position + width * count, 0);
      list.style.marginLeft = position + 'px';
    },
    moveRight : function(){
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    }
  }
}

var carouselModule = createCarousel();
carousel.querySelector('.arrows__left').addEventListener('click', carouselModule.moveLeft);
carousel.querySelector('.arrows__right').addEventListener('click', carouselModule.moveRight);
