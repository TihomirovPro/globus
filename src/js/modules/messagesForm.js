import { popupMessageForm } from '../../blocks/modal/popup'

export function messagesForm () {
  const form = document.querySelector('.form')

  const btn = form.querySelector('.btn')
  const spinner = btn.querySelector('.spinner')
  const inputs = form.querySelectorAll('input, textarea')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const request = new XMLHttpRequest()
    request.open('POST', 'mail.php')

    const formData = new FormData(form)
    const obj = {}
    formData.forEach((value, key) => {
      obj[key] = value
    })
    const json = JSON.stringify(obj)

    console.log(json)

    request.send(formData)
    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        disabled(true)
      } else if (request.readyState === 4 && request.status === 200) {
        setTimeout(() => {
          popupMessageForm('Сообщение отправленно!')
          disabled(false)
        }, 1000)
      } else {
        setTimeout(() => {
          popupMessageForm('Произошла ошибка при отправке, попробуйте позже!')
          disabled(false)
        }, 1000)
      }
    })
  })

  function disabled (d) {
    if (d) {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute('disabled', 'disabled')
      }
      btn.setAttribute('disabled', 'disabled')
      spinner.style.display = 'block'
      btn.textContent = ''
      btn.appendChild(spinner)
    } else {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute('disabled')
      }
      btn.removeAttribute('disabled')
      btn.textContent = 'Отправить'
    }
  }
}
