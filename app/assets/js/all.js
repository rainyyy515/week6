$(function() {
  // console.log('Hello Bootstrap5');
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 8,
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 8,
      },
      1200: {
        slidesPerView: 10,
      },
    },
  });

  var swiper = new Swiper('.mySwiper2', {
    // Optional parameters
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper(".courseSwiper", {
    slidesPerView: 2,
    spaceBetween: 16,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });
});