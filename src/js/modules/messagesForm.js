import { popupMessageForm } from '../../blocks/modal/popup'

export function messagesForm () {
  const form = document.querySelector('.form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    popupMessageForm()

    const success = document.querySelector('.form-messages__success')
    const error = document.querySelector('.form-messages__error')

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
      if (request.readyState < 4) {} else if (request.readyState === 4 && request.status === 200) {
        success.style.display = 'block'
      } else {
        error.style.display = 'block'
      }
    })
  })
}
