export function select () {
  const selects = document.querySelectorAll('.select-js')

  selects.forEach(select => {
    const checkedSelect = select.querySelector('.select__checked')
    const optionsWrap = select.querySelector('.select__options')
    const input = select.querySelector('.select__input')
    const options = select.querySelectorAll('.select__text')
    const optGroupTitle = select.querySelectorAll('.select__group-title')
    const optionsWrapHeight = optionsWrap.offsetHeight
    closeSelect(optionsWrap, select, false, false)

    let hide = false
    input.addEventListener('input', () => {
      const value = input.value
      if (!hide) {
        hideElements(optGroupTitle)
        hide = true
      }
      options.forEach(option => {
        const text = option.textContent
        option.parentElement.style.display = 'none'
        if (text.indexOf(value) + 1 && value !== '') {
          option.parentElement.style.display = 'block'
        }
      })
    })

    select.addEventListener('click', (e) => {
      const target = e.target
      if (target === checkedSelect) {
        optionsWrap.style.height = `${optionsWrapHeight}px`
        optionsWrap.style.zIndex = ''
        select.classList.add('open')
      } else if (target.classList.contains('select__text')) {
        checkedSelect.textContent = target.innerText
        closeSelect(optionsWrap, select, optGroupTitle, options)
        selectRoom(select, target.innerText)
        hide = false
      }
    })
    select.addEventListener('mouseleave', () => {
      closeSelect(optionsWrap, select, optGroupTitle, options)
      hide = false
    })
  })
}

function hideElements (elements) {
  elements.forEach(element => {
    element.style.display = 'none'
  })
}

function showElements (elements) {
  if (elements) {
    elements.forEach(element => {
      element.style.display = ''
      element.parentElement.style.display = ''
    })
  }
}

function closeSelect (optionsWrap, select, elements, elements2) {
  optionsWrap.style.height = '0'
  optionsWrap.style.zIndex = '-1'
  select.classList.remove('open')
  showElements(elements)
  showElements(elements2)
}

function selectRoom (select, value) {
  if (select.classList.contains('select__room')) {
    const roomSize = document.querySelector('.room-size')
    roomSize.textContent = `Какого размера ${value}?`
  }
}
