export function header (scroll) {
  const header = document.querySelector('.header')
  if (scroll > 0 && !header.classList.contains('header_bg')) {
    header.classList.add('header_bg')
  } else if (scroll === 0) {
    header.classList.remove('header_bg')
  } else {
    return false
  }
}
