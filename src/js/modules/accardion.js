export function accardion () {
  const cards = document.querySelectorAll('.accardionJs')

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].querySelector('.accardion__title')
    const itemHeight = title.offsetHeight
    cards[i].style.height = `${itemHeight}px`
  }

  cards.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.querySelector('.accardionContentJs')
      const contentHeight = content.offsetHeight
      const itemHeight = heightTitle(item)

      if (item.classList.contains('open')) {
        item.style.height = `${itemHeight}px`
      } else {
        close(item)
        item.style.height = `${contentHeight + itemHeight}px`
      }

      item.classList.toggle('open')
    })
  })

  function close (opening) {
    cards.forEach(item => {
      if (opening !== item) {
        const itemHeight = heightTitle(item)
        item.classList.remove('open')
        item.style.height = `${itemHeight}px`
      }
    })
  }

  function heightTitle (item) {
    const title = item.querySelector('.accardion__title')
    return title.offsetHeight
  }
}
