let dice = document.getElementById("dice");
let advice = document.getElementById("advice")
let id = document.getElementById("advice-id")
window.addEventListener('onload',getData())
dice.addEventListener("click",getData())

async function getData(){
    data = await fetch('https://api.adviceslip.com/advice') 
    jsonData = await data.json();
    advice.textContent =  await jsonData.slip.advice
    id.textContent = await jsonData.slip.id
    
}
