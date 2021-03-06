const desktopWidth = window.innerWidth > 700;
const mobileWidth = window.innerWidth < 700;

const swiper = new Swiper(".swiper", {
  slidesPerView: 3.3,
  spaceBetween: 0,

  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
