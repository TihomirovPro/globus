import {
  Swiper,
  Navigation,
  Pagination,
  Autoplay
} from 'swiper/js/swiper.esm.js'

Swiper.use([Navigation, Pagination, Autoplay])

document.addEventListener('DOMContentLoaded', () => {
  // const catalogSlider = new Swiper('.main__catalog-container', {
  //   loop: true,
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   observer: true,
  //   observeParents: true,
  //   breakpoints: {
  //     576: {
  //       slidesPerView: 2
  //     },
  //     992: {
  //       slidesPerView: 3
  //     },
  //     1200: {
  //       slidesPerView: 4
  //     }
  //   },
  //   autoplay: {
  //     delay: 5000
  //   }
  // })

  // const reviewsSlider = new Swiper('.reviews__container', {
  //   loop: true,
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   observer: true,
  //   observeParents: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   breakpoints: {
  //     992: {
  //       slidesPerView: 3,
  //       loopAdditionalSlides: 3
  //     }
  //   }
  // })

  // const bloggersSlider = new Swiper('.bloggers__slider', {
  //   loop: true,
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   speed: 800,
  //   observer: true,
  //   observeParents: true,
  //   autoplay: {
  //     delay: 5000
  //   },
  //   breakpoints: {
  //     768: {
  //       slidesPerView: 2
  //     }
  //   }
  // })

  // const sliderReviews = new Swiper('.reviews-slider', {
  //   loop: true,
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   speed: 800,
  //   observer: true,
  //   observeParents: true,
  //   // autoplay: {
  //   //   // delay: 5000
  //   // },
  //   breakpoints: {
  //     576: {
  //       slidesPerView: 2
  //     },
  //     992: {
  //       slidesPerView: 3
  //     }
  //   }
  // })

  // const articleSlider = new Swiper('.article-slider', {
  //   loop: true,
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   speed: 800,
  //   observer: true,
  //   observeParents: true,
  //   autoplay: {
  //     delay: 5000
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // })

  // const articleSlider2 = new Swiper('.article-slider2', {
  //   loop: true,
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   speed: 800,
  //   observer: true,
  //   observeParents: true,
  //   autoplay: {
  //     delay: 5000
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   breakpoints: {
  //     768: {
  //       slidesPerView: 2
  //     }
  //   }
  // })

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
      type: 'bullets',
      clickable: true
    },
    autoplay: {
      delay: 20000
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
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button'
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
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
        if (slider4View.el.classList.contains('slider-tabs')) {
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
