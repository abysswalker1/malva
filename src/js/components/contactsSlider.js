import Swiper, { Navigation, Pagination } from 'swiper';


(function(){
  const paginationText =  [
    {
      "title": "Филиал в Кузьминках",
      "adress": "ул. Крупской 13/400",
      "status": "Круглосуточно"
    },
    {
      "title": "Филиал в Кузьминках",
      "adress": "ул. Взлетная 13",
      "status": "Ежедневно с 9:00 до 22:00"
    },
    {
      "title": "Филиал в Ясной поляне",
      "adress": "Школьный бульвар 1",
      "status": "Ежедневно с 9:00 до 20:00"
    }
  ]

  const swiper = new Swiper('.contacts__slider', {
    // configure Swiper to use modules
    modules: [Pagination, Navigation],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation : {
      prevEl: '.contacts-btn-prev',
      nextEl: '.contacts-btn-next',
    },
    observer: true, 
    observeParents: true,

    // If we need pagination
    pagination: {
      el: '.contacts__slider-pagination',
      clickable: true,
      dynamicBullets: true,
      renderBullet: function(index) {
        return `\
          <div class="swiper-pagination-bullet">\
            <div class="pagination-string"></div>\
            <div class="pagination-text">\
              <svg class="pagination-icon">\
                <use href='../assets/img/svg-sprite/sprite.svg#location'><use>\
              </svg>
              <h3 class="pagination-text-title">\
               ${paginationText[index].title}
              </h3>\
              <p class="pagination-text-adress">\
               ${paginationText[index].adress}
              </p>\
              <p class="pagination-text-status">
               ${paginationText[index].status}
              </p>
            </div>\
          </div>`
      }
    },
  });
})();