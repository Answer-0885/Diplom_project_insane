'use strict'
const burgerMenu = () => {
  const menuIcon = document.querySelector('.menu__icon');
  const burgerMenu = document.querySelector('.popup-dialog-menu');
  const body = document.querySelector('body');
  const btnUp = document.querySelector('.button-footer');

  // Открыть бургер меню
  menuIcon.addEventListener('click', () => {
    if (document.documentElement.clientWidth >= 576) {
      burgerMenu.style.transform = 'translate3D(0px, 0 ,0)'
      body.style.overflow = 'hidden';
    } else {
      burgerMenu.style.transform = 'translate3D(0, 0px, 0)'
      body.style.overflow = 'hidden';
    }
  });
  // Закрыть бургер меню
  burgerMenu.addEventListener('click', (e) => {
    if (e.target.closest('.close-menu')) {
      if (document.documentElement.clientWidth >= 576) {
        burgerMenu.style.transform = 'translate3D(645px, 0 ,0)'
        body.style.overflow = 'auto';
      } else {
        burgerMenu.style.transform = 'translate3D(0, -645px, 0)'
        body.style.overflow = 'auto';
      }
      // Реализация плавного перемещения и закрытия бургер меню
    } else if (e.target.getAttribute('href')) {
      e.preventDefault();
      burgerMenu.style.transform = 'translate3D(645px, 0 ,0)'
      body.style.overflow = 'auto';
      // Плавно перемещаемся к выбранному блоку из списка меню
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  })
  // Нажатие на кнопку ВВЕРХ и плавноый переход к началу
  btnUp.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest('.button-footer')) {
      const blockId = e.target.closest('a[href*="#"]').getAttribute('href');
      document.querySelector(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };
  });
}
export default burgerMenu
