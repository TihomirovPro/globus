export function reviewsFilter () {
  const filters = document.querySelectorAll('.filter input')
  const filterReset = document.querySelector('.filter-reset')
  const reviews = document.querySelectorAll('.filter-element')
  const reviewsTitle = document.querySelector('.reviews__title span')

  filters.forEach(item => {
    item.addEventListener('change', () => {
      filterReview(item.value)
      reviewsTitle.textContent = item.offsetParent.innerText
    })
  })

  filterReset.addEventListener('click', () => {
    reviews.forEach(review => {
      review.classList.remove('first-video')
      review.style.display = ''
    })
    filterReset.style.display = ''
    reviewsTitle.textContent = 'Все города'
  })

  function filterReview (filter) {
    let i = 0
    reviews.forEach(review => {
      if (review.classList.contains(filter)) {
        if (i === 0) {
          review.classList.add('first-video')
          i++
        }
        review.style.display = ''
      } else {
        review.classList.remove('first-video')
        review.style.display = 'none'
      }
    })
    filterReset.style.display = 'block'
  }
}
