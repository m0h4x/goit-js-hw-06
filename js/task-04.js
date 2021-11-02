const buttonDec = document.querySelector("[data-action=decrement]")
const buttonInc = document.querySelector("[data-action=increment]")
buttonDec.addEventListener('click', deButtonClick)
buttonInc.addEventListener('click', inButtonClick)
function deButtonClick() {
    console.log('DeKlick')
}
function inButtonClick() {
    console.log('InKlick')
}
