function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}


let firstNumber;
let secondNumber;
let operator;

function operate (firstNumber, secondNumber, operator){
    if (operator === "add"){
        return add(firstNumber,secondNumber);
    }
    else if (operator === "subtract"){
        return subtract(firstNumber, secondNumber);
    }
    else if (operator === "multiply"){
        return multiply(firstNumber, secondNumber);
    }
    else if (operator === "divide"){
        return divide(firstNumber, secondNumber);
    }
}


//add values from buttons pressed to display
let display = document.querySelector(".small-display");
let displayValue = "";

numbers = document.querySelectorAll(".number");
numbers.forEach((currentButton) => {
    currentButton.addEventListener("click", () => {
        display.textContent += currentButton.textContent;
        displayValue += currentButton.textContent;
    });
});

//when operator button is pressed, add operator to the main display


//when equals is pressed, equation within display is operated on.

