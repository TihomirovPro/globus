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
    // spaceBetween: 10,
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
        slidesPerView: 4
      },
      576: {
        slidesPerView: 2
      }
    }
  })
  const slider5View = new Swiper('.slider5', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 7000
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      }
    }

  })

  // ====================__s-how__slider__==================== //

  const sShowSlider = new Swiper('.s-how__slider1', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.next-button1',
      prevEl: '.prev-button1'
    }
  })

  const sShowSlider2 = new Swiper('.s-how__slider2', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.next-button2',
      prevEl: '.prev-button2'
    }
  })

  // ====================__index catalog__==================== //
  const indexCatalog = new Swiper('.main__catalog-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    slideToClickedSlide: true,
    observeParents: true,
    breakpoints: {
      992: {
        slidesPerView: 4
      },
      576: {
        slidesPerView: 3
      },
      420: {
        slidesPerView: 2
      }
    }
  })
  // ====================__index blog items slider__==================== //
  const blog = new Swiper('.slider4', {
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
    breakpoints: {
      992: {
        slidesPerView: 4
      },
      767: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      }
    }
  })
})
