import {bindScrollToLinks} from './gsap.js';
import {setupFAQ} from "./faq.js";
import {initMobileMenu} from './mobile.js';

bindScrollToLinks();
setupFAQ();
initMobileMenu();

(function () {
  const buttons = document.querySelectorAll(".header__btn");

  buttons.forEach(button => {
    ["mouseenter", "mouseout"].forEach(evt => {
      button.addEventListener(evt, e => {
        let parentOffset = button.getBoundingClientRect(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;

        const span = button.getElementsByTagName("span");

        span[0].style.top = relY + "px";
        span[0].style.left = relX + "px";
      });
    });
  });
})();

new Swiper('.price__swiper', {
  speed: 400,
  loop: false,
  breakpoints: {
    1260: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 12
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    425: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: {
        enabled: true
      },
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 16,
      freeMode: {
        enabled: false
      },
    }
  },
  navigation: {
    prevEl: '.price__btn--prev',
    nextEl: '.price__btn--next'
  }
});