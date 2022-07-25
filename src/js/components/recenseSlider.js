import Swiper, { Pagination, Navigation } from 'swiper';

(function(){
  const swiper = new Swiper('.js-recense-swiper', {
    // configure Swiper to use modules
    modules: [Pagination, Navigation],
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: false,
    navigation : {
      nextEl: '.recense-button-next',
      prevEl: '.recense-button-prev'
    },

    // If we need pagination
    pagination: {
      el: '.recense__list-pagination',
    },
  });
})();