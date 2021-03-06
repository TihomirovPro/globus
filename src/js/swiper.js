import {
  Swiper,
  Navigation,
  Pagination,
  Autoplay
} from 'swiper/js/swiper.esm.js'

Swiper.use([Navigation, Pagination, Autoplay])

document.addEventListener('DOMContentLoaded', () => {

  // ====================__slider 1 view__==================== //

  const slider1View = new Swiper('.slider1', {
    loop: true,
    slidesPerView: 1,
    longSwipesRatio: 0.01,
    longSwipesMs: 100,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button'
    },
    pagination: {
      el: '.swiper-pagination1',
      type: 'bullets'
    },
    autoplay: {
      delay: 20000
    },
    breakpoints: {
      992: {
        pagination: {
          clickable: true
        }
      }
    }
  })

  // ====================__slider 3 view__==================== //

  const slider3View = new Swiper('.slider3', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination3',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button'
    },
    breakpoints: {
      767: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3,
        pagination: {
          clickable: true
        }
      }
    }
  })

  // ====================__slider 4 view__==================== //

  const slider4View = new Swiper('.slider4', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    slideToClickedSlide: true,
    observeParents: true,
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button'
    },
    pagination: {
      el: '.swiper-pagination4',
      type: 'bullets',
      clickable: true
    },
    on: {
      slideChange: () => {
        if (slider4View.el && slider4View.el.classList.contains('slider-tabs')) {
          const sliderTabs = document.querySelectorAll('.slider-tab')
          const nextTab = slider4View.realIndex

          for (let i = 0; i < sliderTabs.length; i++) {
            sliderTabs[i].style.display = 'none'
          }

          sliderTabs[nextTab].style.display = 'grid'
        }
      }
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      }
    }
  })
})
