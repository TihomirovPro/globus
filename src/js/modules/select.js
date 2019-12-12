export function select (selector) {
  const selects = document.querySelectorAll(selector)
  const roomSize = document.querySelector('.room-size')

  selects.forEach(select => {
    const checkedOption = select.querySelector('.select__checked')
    const optionsWrap = select.querySelector('.select__options')
    const options = select.querySelectorAll('.select__option')

    const optionsWrapHeight = optionsWrap.offsetHeight
    optionsWrap.style.height = '0'

    checkedOption.addEventListener('click', () => {
      if (select.classList.contains('open')) {
        optionsWrap.style.height = '0'
      } else {
        optionsWrap.style.height = `${optionsWrapHeight}px`
      }
      select.classList.toggle('open')
    })

    options.forEach(option => {
      option.addEventListener('mouseup', () => {
        const value = option.getAttribute('data-value')
        checkedOption.innerText = value
        if (option.classList.contains('select__room')) {
          roomSize.innerText = `Какого размера ${value}?`
        }
        closeSelect(optionsWrap, select)
      })
    })

    select.addEventListener('mouseleave', () => {
      closeSelect(optionsWrap, select)
    })
  })

  function closeSelect (optionsWrap, select) {
    optionsWrap.style.height = '0'
    select.classList.remove('open')
  }
}
