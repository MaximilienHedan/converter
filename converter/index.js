/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputValue = document.getElementById("value");


const convertBtn = document.getElementById("btn-convert");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");


convertBtn.addEventListener('click', function(){
    
    //Length
    length.innerHTML = `${inputValue.value} meters = ${(inputValue.value * 3.281).toFixed(3)} feet | 
    ${inputValue.value} feet = 
    ${(inputValue.value / 3.281).toFixed(3)} meters`;
    
    //Volume
    volume.innerHTML = `${inputValue.value} liters = ${(inputValue.value * 0.264).toFixed(3)} gallons | 
    ${inputValue.value} gallons = 
    ${(inputValue.value / 0.264).toFixed(3)} liters`;
    
    //mass
    mass.innerHTML = `${inputValue.value} kilos = ${(inputValue.value * 2.204).toFixed(3)} pounds | 
    ${inputValue.value} pounds = 
    ${(inputValue.value / 2.204).toFixed(3)} kilos`;
})

