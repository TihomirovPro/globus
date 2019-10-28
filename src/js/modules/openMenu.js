export function openMenu () {
  const btn = document.querySelector('.burger')
  const menu = document.querySelector('.menu')

  btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    menu.classList.toggle('open')
  })
}
