import Swiper, { Pagination } from 'swiper';

(function(){
  const swiper = new Swiper('.js-swiper', {
    // configure Swiper to use modules
    modules: [Pagination],
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,

    // If we need pagination
    pagination: {
      el: '.slider__list-pagination',
    },
  });
})();
