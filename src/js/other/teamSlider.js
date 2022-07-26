import Swiper, { Pagination, Navigation } from 'swiper';

(function(){
  const swiper = new Swiper('.js-swiper', {
    // configure Swiper to use modules
    modules: [Pagination, Navigation],
    direction: 'horizontal',
    loop: false,
    navigation : {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      180: {
        slidesPerView: 2,
        spaceBetween: 15,
      }
    },

    // If we need pagination
    pagination: {
      el: '.team-slider__pagination',
    },
  });
})();
