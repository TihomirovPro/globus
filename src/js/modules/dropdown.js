export function dropdown () {
  const dropdown = document.querySelectorAll('.dropdown')
  let maxHeight = 0
  dropdown.forEach(item => {
    const itemHeigh = item.offsetHeight
    const content = item.querySelector('.sub-menu')
    const contentHeight = content.offsetHeight
    maxHeight += contentHeight

    item.addEventListener('click', (e) => {
      const target = e.target
      if (target.parentNode === item && window.innerWidth < 992) {
        if (!item.classList.contains('open')) {
          item.classList.add('open')
          item.style.minHeight = `${contentHeight + itemHeigh}px`
          item.style.maxHeight = `${maxHeight + itemHeigh}px`
        } else {
          item.classList.remove('open')
          item.style.minHeight = `${itemHeigh}px`
          item.style.maxHeight = `${itemHeigh}px`
        }
      }
    })
  })
}
