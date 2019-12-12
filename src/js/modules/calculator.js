import destinations from '../../../static/destinations.json'
import { select } from './select'

export function calculator () {
  const calculator = document.querySelector('.calculator')
  const regionsOptions = calculator.querySelector('.regions .select__options')
  const portsOptions = calculator.querySelector('.ports .select__options')
  const regions = new Set(destinations.map(p => p.region))
  const regionData = []

  regions.forEach(region => {
    const regionOption = option({
      value: region,
      name: 'region'
    })
    regionData.push({
      reg: region,
      options: destinations.filter(p => p.region === region)
    })

    regionsOptions.append(regionOption)

    regionOption.addEventListener('mouseup', () => {
      portsOptions.innerHTML = ''
      portsOptions.removeAttribute('style')
      const selectRegion = region
      optionGroup(selectRegion, regionData, portsOptions)
      select('.ports')
    })
  })
  select('.regions')
}

function optionGroup (selectRegion, regionData, portsOptions) {
  for (let i = 0; i < regionData.length; i++) {
    if (selectRegion === regionData[i].reg) {
      const regionOptions = regionData[i].options
      const regionCountry = new Set(regionOptions.map(p => p.country), regionOptions.map(p => p.city))

      regionCountry.forEach(country => {
        const group = document.createElement('div')
        const title = document.createElement('p')

        group.classList.add('select__group')
        title.classList.add('select__group-title')

        title.innerHTML = country
        group.append(title)

        regionOptions.forEach(options => {
          if (options.country === country) {
            const regionCity = option({
              name: 'port',
              value: options.city
            })
            group.append(regionCity)
          }
        })
        portsOptions.append(group)
      })
    }
  }
  // select('.ports')
}

function option (options) {
  const label = document.createElement('label')
  const input = document.createElement('input')
  const text = document.createElement('p')

  label.classList.add('select__option')
  text.classList.add('select__text')

  label.setAttribute('data-value', options.value)
  input.setAttribute('type', 'radio')
  input.setAttribute('value', options.value)
  input.setAttribute('name', options.name)
  text.innerHTML = options.value

  label.append(input)
  label.append(text)

  return label
}