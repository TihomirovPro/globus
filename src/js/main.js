// import './utils/fixForEach'
import LazyLoad from 'vanilla-lazyload'
import { header } from './modules/header'
import { openMenu } from './modules/openMenu'
import { tabs } from './modules/tabs'
import { dropdown } from './modules/dropdown'
import { select } from './modules/select'
import { accardion } from './modules/accardion'
import { iframe } from '../blocks/modal/iframe'
import { messagesForm } from './modules/messagesForm'
import { calculator } from './modules/calculator'

document.addEventListener('DOMContentLoaded', () => {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    use_native: true
  })
  header()
  openMenu()
  dropdown()
  tabs()
  accardion()
  iframe('.iframe-popup')
  messagesForm()

  calculator()
  // select('.select')
})
