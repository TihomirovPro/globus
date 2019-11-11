export function header () {
  const header = document.querySelector('.header')
  const position = window.scrollY
  if (position > 0) {
    header.classList.add('header_bg')
  }

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY
    if (scroll > 0 && !header.classList.contains('header_bg')) {
      header.classList.add('header_bg')
    } else if (scroll === 0) {
      header.classList.remove('header_bg')
    } else {
      return false
    }
  })
}
