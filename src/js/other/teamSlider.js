import Swiper, { Pagination, Navigation } from 'swiper';

(function(){
  const swiper = new Swiper('.js-swiper', {
    // configure Swiper to use modules
    modules: [Pagination, Navigation],
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    navigation : {
      nextEl: '.team-slider-next',
      prevEl: '.team-slider-prev'
    },

    // If we need pagination
    pagination: {
      el: '.team-slider__pagination',
    },
  });
})();
