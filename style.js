
const color = document.querySelector('#color')
const square = document.querySelector('.square')

color.addEventListener('change', event => {

  square.style.backgroundColor = event.target.value
})