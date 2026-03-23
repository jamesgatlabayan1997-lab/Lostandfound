const swiper = new Swiper(".team-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  autoplay: {
    delay: 2500,        // time between slides (ms)
    disableOnInteraction: false, // keep autoplay even after swipe/click
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
