'use strict'

const telephoneList = () => {
  const headerContactsArrow = document.querySelector('.header-contacts__arrow');
  const phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord>a');


  headerContactsArrow.addEventListener('click', () => {
    if (phoneNumberAccord.style.opacity === '') {
      phoneNumberAccord.style.marginTop = '25px';
      phoneNumberAccord.style.opacity = '1';
      headerContactsArrow.style.transform = 'scale(1, -1)';
    } else {
      phoneNumberAccord.style.marginTop = '0px';
      phoneNumberAccord.style.opacity = '';
      headerContactsArrow.style.transform = 'scale(-1, 1)';
    }

  })
}
export default telephoneList
