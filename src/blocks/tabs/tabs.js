export function tabs () {
  const tabs = document.querySelectorAll('.tabs-js')

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.stopPropagation()
      const target = e.target
      if (target.tagName === 'A') {
        e.preventDefault()

        const id = target.hash
        const item = tab.querySelector(id)

        const parentLink = target.parentElement.parentElement
        const prevLink = parentLink.querySelector(`.active:not(${id})`)
        prevLink.classList.remove('active')

        const prevItem = tab.querySelector(prevLink.hash)
        prevItem.classList.remove('show')

        target.classList.add('active')
        item.classList.add('show')
      }
    })
  })
}
