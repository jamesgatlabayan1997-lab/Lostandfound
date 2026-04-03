 const swiper = new Swiper(".team-swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3300,
        disableOnInteraction: false,
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

    // BOOTSTRAP CAROUSEL
    document.addEventListener("DOMContentLoaded", function () {
      const aboutCarousel = new bootstrap.Carousel('#aboutCarousel', {
        interval: 2000,
        ride: 'carousel',
        pause: false,
        wrap: true,
        touch: true
      });
    });


    