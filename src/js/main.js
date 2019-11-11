import './utils/fixForEach'
import { header } from './modules/header'
import { openMenu } from './modules/openMenu'
import { tabs } from './modules/tabs'
import { dropdown } from './modules/dropdown'
import { select } from './modules/select'
import { accardion } from './modules/accardion'

document.addEventListener('DOMContentLoaded', () => {
  header()
  openMenu()
  dropdown()
  tabs()
  select()
  accardion()
})
