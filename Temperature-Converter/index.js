let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

let bton = document.querySelector('.btn button')

function roundNumber(number) {
    return Math.round(number*100)/100
}
celciusInput.addEventListener('input', function(){
    let celtemp = parseFloat(celciusInput.value)
    let fahtemp = (celtemp*(9/5)) + 32
    let keltemp = celtemp + 273.15
    console.log("cell change")

    fahrenheitInput.value = roundNumber(fahtemp)
    kelvinInput.value = roundNumber(keltemp)
})

fahrenheitInput.addEventListener('input', function(){
    let fahtemp = parseFloat(fahrenheitInput.value)
    let celtemp = (fahtemp - 32) * (5 / 9)
    let keltemp = (fahtemp + 32) * (5 / 9) + 273.15

    celciusInput.value = roundNumber(celtemp)
    kelvinInput.value = roundNumber(keltemp)
})

kelvinInput.addEventListener('input', function(){
    let keltemp = parseFloat(kelvinInput.value)
    let celtemp = keltemp - 273.15
    let fahtemp = (keltemp - 273.15)*(9/5) + 32

    celciusInput.value = roundNumber(celtemp)
    fahrenheitInput.value = roundNumber(fahtemp)
})

bton.addEventListener('click',()=>{
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})

