const btnMenu = document.querySelector('.burger-menu')
const menu = document.querySelector('.menu')

btnMenu.addEventListener('click', () => {
  console.log(true)
  menu.classList.toggle("show")
})