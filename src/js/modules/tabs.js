export function tabs () {
  const links = document.querySelectorAll('.tab-link-js')
  const tabs = document.querySelectorAll('.tab-js')

  for (let i = 0; i < links.length; i++) {
    links[0].classList.add('active')

    tabs[i].style.display = 'none'
    tabs[0].style.display = ''
    tabs[0].classList.add('active')
  }

  function removeActive () {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active')
      tabs[i].style.display = 'none'
      tabs[i].classList.remove('active')
    }
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      removeActive()

      const id = link.getAttribute('href')
      const tab = document.querySelector(id)

      link.classList.add('active')
      tab.classList.add('active')
      tab.style.display = ''
    })
  })
}
