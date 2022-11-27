window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    document.getElementById('topbar').style.display = 'none'
  } else {
    document.getElementById('topbar').style.display = 'flex'
    document.getElementById('navbar').style.position = 'static'
  }
  if (window.scrollY > 120) {
    document.getElementById('navbar').style.position = 'fixed'
    document.getElementById('navbar').style.top = 0
  }
})

document.getElementById('go-top').addEventListener('click', (e) => {
  window.scrollTo(0, 0)
})