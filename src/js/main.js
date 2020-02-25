// import './utils/fixForEach'
import LazyLoad from 'vanilla-lazyload'
import { header } from './modules/header'
import { openMenu } from './modules/openMenu'
import { tabs } from '../blocks/tabs/tabs'
import { dropdown } from './modules/dropdown'
import { accardion } from './modules/accardion'
import { iframe } from '../blocks/modal/iframe'
// import { messagesForm } from './modules/messagesForm'
// import { calculator } from './modules/calculator'
// import { filter } from './modules/filter'
import { select } from '../blocks/form/inputs/select/select'
import { reviewsFilter } from './modules/reviewsFilter'
import { openText } from './modules/openText'

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
  // messagesForm()
  // calculator()
  select()
  openText()
  // filter()
  // reviewsFilter()
})
