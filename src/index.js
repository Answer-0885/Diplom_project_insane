import telephoneList from './modules/telephoneList'
import burgerMenu from './modules/burgerMenu'
import telMask from './modules/telMask'
import modal from './modules/modal'
import sendForm from './modules/sendForm'

modal('open-popup-1', 'close', 'popup-repair-types')
modal('open-popup-2', 'close', 'popup-repair-types')
modal('link-privacy', 'close', 'popup-privacy')

telephoneList()
burgerMenu()
telMask()
sendForm({
  formID: 'feedback1'
});
sendForm({
  formID: 'feedback2'
});
sendForm({
  formID: 'feedback3'
});
sendForm({
  formID: 'feedback4'
});
sendForm({
  formID: 'feedback5'
});
sendForm({
  formID: 'feedback6'
});
