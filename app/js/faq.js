export function setupFAQ() {
  const faqHeads = document.querySelectorAll('.faq__head');

  faqHeads.forEach(head => {
    head.addEventListener('click', () => {
      const faqItem = head.closest('.faq__item');
      const faqText = faqItem.querySelector('.faq__text');
      const isOpen = faqText.classList.contains('open');

      if (isOpen) {
        faqText.style.maxHeight = null;
        faqText.classList.remove('open');

        const faqButton = faqItem.querySelector('.faq__btn');
        faqButton.classList.remove('open');
      } else {
        const openFaqItem = document.querySelector('.faq__item .faq__text.open');
        if (openFaqItem) {
          const openFaqButton = openFaqItem.closest('.faq__item').querySelector('.faq__btn');
          openFaqItem.style.maxHeight = null;
          openFaqItem.classList.remove('open');
          openFaqButton.classList.remove('open');
        }

        faqText.style.maxHeight = `${faqText.scrollHeight}px`;
        faqText.classList.add('open');
        const faqButton = faqItem.querySelector('.faq__btn');
        faqButton.classList.add('open');
      }
    });
  });

  const firstFaqButton = document.querySelector('.faq__btn');
  firstFaqButton.classList.add('open');

  const defaultQuestion = document.querySelector('.faq__item:first-of-type .faq__text');
  defaultQuestion.style.maxHeight = `${defaultQuestion.scrollHeight}px`;
  defaultQuestion.classList.add('open');

  const faqButtons = document.querySelectorAll('.faq__btn');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.blur();
    });
  });
}