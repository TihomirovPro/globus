export function dropdown () {
  const dropdown = document.querySelectorAll('.dropdown')

  dropdown.forEach(item => {
    let link = item.querySelector('a')
    item.addEventListener('click', (e) => {
      let target = e.target
      if (target.parentNode === item) {
        item.classList.toggle('open')
      }
    })
  })
}
