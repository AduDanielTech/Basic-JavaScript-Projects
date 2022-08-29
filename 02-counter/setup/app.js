//set initial count
var count = 0

//select value and buttons
const value = document.querySelector('#value')
let btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
  btn.addEventListener('click', (e)=> {
   let has =  e.currentTarget.classList
   if (has.contains('decrease')) {
    count--
   }else if (has.contains('increase')) {
    count++
   }else if (has.contains('reset')) {
    count = 0
   }
   if (count < 0) {
    value.style.color = 'red'
   }else if (count > 0) {
    value.style.color = 'green'
   }else if (count === 0) {
    value.style.color = '#222'
   }
   value.textContent = count
  })
})