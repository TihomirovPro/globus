export function tabs () {
  const tabs = document.querySelectorAll('.tabs-js')
  tabs.forEach(tab => {
    const nav = tab.querySelector('.b-tabs__nav')
    nav.addEventListener('click', (e) => {
      // e.preventDefault()

      const target = e.target
      if (target.className === 'b-tabs__link') {
        e.preventDefault()
        const id = target.hash
        const item = tab.querySelector(id)

        const prevLink = nav.querySelector('.active')
        prevLink.classList.remove('active')

        const prevItem = tab.querySelector(prevLink.hash)
        prevItem.classList.remove('show')

        target.classList.add('active')
        item.classList.add('show')
      }
    })
  })
}
