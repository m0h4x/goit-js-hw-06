const buttonDec = document.querySelector("[data-action=decrement]")
const buttonInc = document.querySelector("[data-action=increment]")
buttonDec.addEventListener('click', () => {
    console.log('DeKlick')
})
buttonInc.addEventListener('click', () => {
    console.log('InKlick')
})
