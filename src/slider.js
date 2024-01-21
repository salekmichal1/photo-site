'use strict';

///////////////////////////////////////
// SLIDER

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 60,
  centeredSlides: true,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 5,
    },
  },
});
