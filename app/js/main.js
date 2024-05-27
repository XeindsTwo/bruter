import {bindScrollToLinks} from './gsap.js';
import {setupFAQ} from "./faq.js";

bindScrollToLinks();
setupFAQ();

const html = document.documentElement;
const menuBtn = document.querySelector('.menu-btn');
const headerMobile = document.querySelector('.header__mobile');
const anchors = document.querySelectorAll('a.header__link.mobile');

menuBtn.addEventListener('click', () => {
  menuBtn.blur();
  html.classList.toggle('active');
  menuBtn.classList.toggle('active');
  headerMobile.classList.toggle('active');
});

function scrollToTarget(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    html.classList.remove('active');
    headerMobile.classList.remove('active');
    menuBtn.classList.remove('active');
    setTimeout(() => {
      const targetOffset = targetSection.offsetTop - 25;
      window.scrollTo({top: targetOffset, behavior: 'smooth'});
    }, 700);
  }
}

function handleAnchorClick(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const hrefParts = href.split('#');
  if (hrefParts.length === 2) {
    const targetId = '#' + hrefParts[1];
    scrollToTarget(targetId);
  }
}

for (const anchor of anchors) {
  anchor.addEventListener('click', handleAnchorClick);
  anchor.addEventListener('touchstart', handleAnchorClick, {passive: true});
}

(function() {
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