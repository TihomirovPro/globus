import {
  Swiper,
  Navigation,
  Pagination,
  Autoplay
} from 'swiper/js/swiper.esm.js'

Swiper.use([Navigation, Pagination, Autoplay])

document.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new Swiper('.main__container', {
    loop: true,
    slidesPerView: 1,
    longSwipesRatio: 0.01,
    longSwipesMs: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    autoplay: {
      delay: 20000
    }
  })

  const catalogSlider = new Swiper('.main__catalog-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    },
    autoplay: {
      delay: 5000
    }
  })

  const reviewsSlider = new Swiper('.reviews__container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        loopAdditionalSlides: 3
      }
    }
  })

  const blogSlider = new Swiper('.blog__container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button'
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

  const bloggersSlider = new Swiper('.bloggers__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  })

  const articleSlider = new Swiper('.article-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })

  const articleSlider2 = new Swiper('.article-slider2', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  })
})
