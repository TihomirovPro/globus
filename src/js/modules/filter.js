export function filter () {
  const filter = document.querySelector('.filter')
  const filters = document.querySelectorAll('.filter__link')
  const filterReset = document.querySelector('.filter-reset')
  const filterElemets = document.querySelectorAll('.filter-element')

  filter.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('filter__link')) {
      target.classList.toggle('active')
      filterReset.style.display = 'block'
      const tags = getFilters(filters)
      showFilters(filterElemets, tags, filterReset)
    }
  })

  filterReset.addEventListener('click', () => {
    filterElemets.forEach(element => {
      element.classList.remove('first-video')
      element.classList.remove('hide')
      filterReset.style.display = 'none'
    })
  })
}

function getFilters (filters) {
  const tags = [...filters].map(item => {
    if (item.classList.contains('active')) {
      return item.getAttribute('data-filter')
    }
  }).filter(item => {
    return item !== undefined && item !== null
  })
  return tags
}

function showFilters (filterElemets, tags, filterReset) {
  filterElemets.forEach(element => {
    element.classList.remove('first-video')
    element.classList.remove('hide')
    filterReset.style.display = 'none'
  })
  if (tags.length > 0) {
    let i = 0
    filterElemets.forEach(element => {
      let isFilter = 0
      tags.forEach(tag => {
        if (element.classList.contains(tag)) {
          isFilter++
        }
      })
      if (isFilter > 0) {
        if (i === 0) {
          element.classList.add('first-video')
          i++
        }
        element.classList.remove('hide')
      } else {
        element.classList.remove('first-video')
        element.classList.add('hide')
      }
    })
  } else {
    filterElemets.forEach(element => {
      element.classList.remove('first-video')
      element.classList.remove('hide')
      filterReset.style.display = 'none'
    })
  }
}
