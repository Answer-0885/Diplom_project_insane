'use strict'
import {
  animate
} from './helper';
const modal = (open, close, popUp) => {
  const body = document.querySelector('body');
  //const popup = document.querySelector('.popup-repair-types');
  const burgerMenu = document.querySelector('.popup-dialog-menu');
  const modalOpen = document.querySelectorAll(`.${open}`);
  const modalClose = document.querySelector(`.${close}`);
  // Модальные окна
  const modal = document.querySelector(`.${popUp}`);



  //Открываем модальные окна
  modalOpen.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.visibility = 'visible';
      burgerMenu.style.transform = 'translate3D(645px, 0 ,0)'
      body.style.overflow = 'hidden';
      animate({
        duration: 600,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
        }
      });
    });
  });
  //Закрываем модальные окна на крестик или кликнув мимо окна
  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
      modal.style.visibility = 'hidden';
      modal.style.opacity = 0;
      body.style.overflow = 'auto';
    };
  });
};
export default modal
