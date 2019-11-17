// ---------- lock scroll page ---------- //

export function lockScroll (lock) {
  const body = document.querySelector('body')
  const html = document.querySelector('html')

  body.style.overflow = lock ? 'hidden' : ''
  html.style.overflow = lock ? 'hidden' : ''
}

// ---------- ScrollBar ---------- //

function isScroll (scrollBar, tag) {
  const body = document.querySelector(tag)
  const elem = document.documentElement
  const param = scrollBar.charAt(0).toUpperCase() + scrollBar.slice(1)
  const scroll = `scroll${param}`
  const client = `client${param}`
  return /CSS/.test(document.compatMode) ? (elem[client] < elem[scroll]) : (body[client] < body[scroll])
}

// ---------- get ScrollBar width ---------- //

function getScrollbarWidth () {
  const scrollDiv = document.createElement('div')
  scrollDiv.className = 'scrollbarMeasure'
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}

// ---------- ScrollBar width fixed ---------- //

export function fixScrollBarWidth (fix) {
  const body = document.querySelector('body')
  const header = document.querySelector('.header__bottom')
  const ScrollbarWidth = getScrollbarWidth()

  if (isScroll('height', 'body')) {
    if (fix) {
      body.style.paddingRight = `${ScrollbarWidth}px`
      header.style.left = `-${ScrollbarWidth / 2}px`
    } else {
      body.style.paddingRight = 0
      header.style.left = 0
    }
  }
}
