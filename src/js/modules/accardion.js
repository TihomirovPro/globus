export function accardion () {
  const cards = document.querySelectorAll('.accardionJs')
  let itemHeight = 0

  function close (opening) {
    cards.forEach(item => {
      if (opening !== item) {
        item.classList.remove('open')
        item.style.height = `${itemHeight}px`
      }
    })
  }

  cards.forEach(item => {
    const content = item.querySelector('.accardionContentJs')
    const contentHeight = content.offsetHeight
    itemHeight = item.offsetHeight
    item.style.height = `${itemHeight}px`
    item.addEventListener('click', () => {
      if (item.classList.contains('open')) {
        item.style.height = `${itemHeight}px`
      } else {
        itemHeight = item.offsetHeight
        close(item)
        item.style.height = `${contentHeight + itemHeight}px`
      }

      item.classList.toggle('open')
    })
  })
}
