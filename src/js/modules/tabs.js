export function tabs () {
  const links = document.querySelectorAll('.tab-link-js')
  const tabs = document.querySelectorAll('.tab-js')

  function removeActive () {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active')
      tabs[i].classList.remove('active')
    }
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      removeActive()

      let id = link.getAttribute('href')
      let tab = document.querySelector(id)

      link.classList.add('active')
      tab.classList.add('active')
    })
  })
}
