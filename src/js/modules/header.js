export function header () {
  const header = document.querySelector('.header')
  const position = window.scrollY

  if (position > 0 && window.innerWidth > 767) {
    header.classList.add('header_fixed')
  }

  if (window.innerWidth > 767) {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY

      if (scroll !== 0) {
        header.classList.add('header_fixed')
      } else {
        header.classList.remove('header_fixed')
      }
    })
  }
}
