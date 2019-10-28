// import Swiper from 'swiper/dist/js/swiper'
import {
  Swiper,
  Navigation,
  Pagination,
  Autoplay
} from 'swiper/dist/js/swiper.esm.js'

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
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      575: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    },
    autoplay: {
      delay: 5000
    }
  })

  const reviewsSlider = new Swiper('.reviews__container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      991: {
        slidesPerView: 1,
        loopAdditionalSlides: 3
      }
    }
  })

  const blogSlider = new Swiper('.blog__container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 1
      }
    }
  })

  const bloggersSlider = new Swiper('.bloggers__slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      767: {
        slidesPerView: 1
      }
    }
  })
})
