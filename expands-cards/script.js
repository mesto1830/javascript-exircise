const panels = document.querySelectorAll('.panel')

panels.forEach(item => {
  item.addEventListener('click', () => {
    removeActive()
    item.classList.add('active')
  })
})


const removeActive =  () => {
  panels.forEach(item => {
    item.classList.remove('active')
  })
}