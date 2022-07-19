import Swiper, { Pagination, Navigation } from 'swiper';

(function(){
  const swiper = new Swiper('.js-swiper', {
    // configure Swiper to use modules
    modules: [Pagination, Navigation],
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    navigation : {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    // If we need pagination
    pagination: {
      el: '.team-slider__pagination',
    },
  });
})();
