import destinations from '../../../static/destinations.json'
import { select } from './select'

export function calculator () {
  const calculator = document.querySelector('.calculator')
  const container = calculator.querySelector('.form__container')
  const regionsOptions = calculator.querySelector('.regions .select__options')
  // const portsOptions = calculator.querySelector('.ports .select__options')
  const labels = calculator.querySelectorAll('.form__label')
  const portsSelector = labels[1]
  const newPortsSelector = portsSelector.cloneNode(true)
  const regions = new Set(destinations.map(p => p.region))
  const regionData = []

  regions.forEach(region => {
    const regionOption = option({
      value: region,
      name: 'region',
      dataValue: region
    })

    regionData.push({
      reg: region,
      options: destinations.filter(p => p.region === region)
    })

    regionsOptions.append(regionOption)
    regionOption.addEventListener('mouseup', () => {
      calculator.querySelectorAll('.form__label')[1].remove()
      const ports = newPortsSelector.cloneNode(true)
      const newPortsOptions = ports.querySelector('.ports .select__options')
      container.append(ports)
      const selectRegion = region
      optionGroup(selectRegion, regionData, newPortsOptions)
    })
  })
  const results = document.querySelector('.form__results')
  results.style.display = 'none'
  select('.regions')
}

function results (ft1, ft2, namePort) {
  const results = document.querySelector('.form__results')
  const ft20 = results.querySelector('.ft20')
  const ft40 = results.querySelector('.ft40')
  const port = results.querySelector('.port')
  ft20.innerHTML = ` ${ft1}$ `
  ft40.innerHTML = ` ${ft2}$ `
  port.innerHTML = ` ${namePort} `
  results.style.display = 'block'
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
              value: options.city,
              dataValue: `${options.city} (${country})`
            })
            group.append(regionCity)
            regionCity.addEventListener('click', () => {
              results(options.price.ft20, options.price.hq40, `${options.city} (${country})`)
            })
          }
        })
        portsOptions.append(group)
      })
    }
  }
  select('.ports')
}

function option (options) {
  const label = document.createElement('label')
  const input = document.createElement('input')
  const text = document.createElement('p')

  label.classList.add('select__option')
  text.classList.add('select__text')

  label.setAttribute('data-value', options.dataValue)
  input.setAttribute('type', 'radio')
  input.setAttribute('value', options.value)
  input.setAttribute('name', options.name)
  text.innerHTML = options.value

  label.append(input)
  label.append(text)

  return label
}
