import { createModal, openModal, closeModal } from './metods'

export function iframe (selector) {
  const openers = document.querySelectorAll(selector)
  openers.forEach(opener => {
    opener.addEventListener('click', () => {
      createModal()
      const iframe = document.createElement('iframe')
      iframe.classList.add('modal__iframe')
      iframe.setAttribute('frameborder', 0)
      iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture')
      iframe.setAttribute('allowfullscreen', '')

      const modalWrap = document.querySelector('.modal')
      const modalContainer = document.querySelector('.modal__container')
      const closeUp = document.querySelectorAll('.modal__close')

      modalContainer.classList.add('modal__iframeWrap')
      modalContainer.appendChild(iframe)

      const item = opener.querySelector('[data-modal]')
      const dataModal = item.getAttribute('data-modal')
      iframe.setAttribute('src', `https://www.youtube.com/embed/${dataModal}`)

      openModal()
      iframe.style.height = `${iframe.offsetWidth * 0.5625}px`

      closeUp.forEach(item => {
        item.addEventListener('click', () => {
          closeModal(modalWrap)
        })
      })

      modalWrap.addEventListener('click', (e) => {
        if (e.target === modalWrap) {
          closeModal(modalWrap)
        }
      })
    })
  })
}
