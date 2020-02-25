export function openText () {
  const items = document.querySelectorAll('.open-text-wrap')

  items.forEach(item => {
    const text = item.querySelector('.open-text-js')
    const btn = item.querySelector('.open-text-btn')

    item.style.display = 'block'
    const textHeight = text.scrollHeight
    console.log(textHeight)
    item.style.display = ''
    text.style.overflow = 'hidden'
    text.style.height = '240px'

    btn.addEventListener('click', () => {
      text.style.height = `${textHeight}px`
      text.style.overflow = 'inherit'
    })
  })
}
