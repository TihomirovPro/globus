import { fixScrollBarWidth, lockScroll } from './scroll'

// ---------- create modal ---------- //

export function createModal (type) {
  const modalWrap = document.createElement('div')
  const modalContainer = document.createElement('div')
  const closeBtn = document.createElement('button')

  if (type === 'gallery') {
    const galleryWrap = document.createElement('div')
    const next = document.createElement('button')
    const prev = document.createElement('button')

    galleryWrap.classList.add('modal__gallery')
    next.classList.add('modal__next')
    prev.classList.add('modal__prev')

    modalContainer.appendChild(galleryWrap)
    modalContainer.appendChild(next)
    modalContainer.appendChild(prev)
  }

  modalWrap.classList.add('modal')
  modalContainer.classList.add('modal__container')
  closeBtn.classList.add('modal__close')

  document.body.appendChild(modalWrap)
  modalWrap.appendChild(modalContainer)
  modalContainer.appendChild(closeBtn)
}

// ---------- open modal ---------- //

export function openModal () {
  const modalWrap = document.querySelector('.modal')

  modalWrap.style.display = 'block'
  modalWrap.classList.add('fadeIn')

  lockScroll(true)
  fixScrollBarWidth(true)
}

// ---------- close modal ---------- //

export function closeModal (modalWrap, callback) {
  modalWrap.classList.add('fadeOut')
  setTimeout(() => {
    document.body.removeChild(modalWrap)
    if (callback) callback()
    lockScroll(false)
    fixScrollBarWidth(false)
  }, 450)
}
