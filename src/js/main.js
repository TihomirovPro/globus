import './utils/fixForEach'
import { header } from './modules/header'
import { openMenu } from './modules/openMenu'
import { tabs } from './modules/tabs'
import { dropdown } from './modules/dropdown'

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function () {
    let scroll = this.scrollY
    header(scroll)
  })
  openMenu()
  tabs()
  dropdown()
})
