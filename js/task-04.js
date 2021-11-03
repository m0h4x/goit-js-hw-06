const buttonDec = document.querySelector("[data-action=decrement]")
const buttonInc = document.querySelector("[data-action=increment]")
buttonDec.addEventListener('click', deButtonClick)
buttonInc.addEventListener('click', inButtonClick)
function deButtonClick() {
    counter.textContent++
}
function inButtonClick() {
    counter.textContent--
}
const counter = document.querySelector('span')
console.log(counter.textContent)