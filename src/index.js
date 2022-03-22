import telephoneList from './modules/telephoneList'
import burgerMenu from './modules/burgerMenu'
import telMask from './modules/telMask'
import modal from './modules/modal'


telephoneList()
burgerMenu()
telMask()

modal('open-popup-1', 'close', 'popup-repair-types')
modal('open-popup-2', 'close', 'popup-repair-types')
