let firstNumber = Math.floor(Math.random() * 11);
let secondNumber = Math.floor(Math.random() * 11);
let total = firstNumber + secondNumber;

let primaryNumber = document.querySelector("#primary-number"); 
let secondaryNumber = document.querySelector("#secondary-number");
let input = document.querySelector("#guess");
let message = document.querySelector("#message");
let button = document.querySelector("#btn");

primaryNumber.textContent = firstNumber;
secondaryNumber.textContent = secondNumber;

function checkResult(){
    if (input.value == total){
        message.textContent = "¡CORRECTO! El resultado es " + total;
        message.style.color = "green";
    } else {
        message.textContent = "¡INCORRECTO! El resultado es " + total;
        message.style.color = "red";
    }
}

button.addEventListener("click", checkResult);