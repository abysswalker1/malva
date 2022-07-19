import Swiper, { Navigation } from 'swiper';

(function(){
  const swiper = new Swiper('.js-main-slider', {
    // configure Swiper to use modules
    modules: [Navigation],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation : {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    // If we need pagination
  });
})();