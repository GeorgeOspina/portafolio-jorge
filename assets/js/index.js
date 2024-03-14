
console.log('Document:', window.document)


console.log(document) 

console.log(document.body.className)

console.log(document.body.classList[2])
console.log(document.body.classList.value)
document.body.classList.add('bg-red')
document.body.classList.remove('one')

console.log(document.body.classList)


const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')
console.log(btnOpen)


btnOpen.onclick = function () {

  navMenu.classList.toggle('show--menu')
}

btnClose.onclick = function () {
  navMenu.classList.remove('show--menu')
}

const links = document.querySelectorAll('.nav__link')

for (const link of links) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('show--menu')
  })
}

var typed = new Typed('#typing', {
  strings: ['¡Hola!, soy...'],
  typeSpeed: 65,
  loop: true,
  cursorChar: ' '
})
