import Swiper, { Pagination } from 'swiper';

(function(){
  const swiper = new Swiper('.js-img-swiper', {
    // configure Swiper to use modules
    modules: [Pagination],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
})();
