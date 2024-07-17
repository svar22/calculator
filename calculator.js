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
let operatorAtFront = false;

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


let smallDisplay = document.querySelector(".small-display");

//add values from buttons pressed to small display
numbers = document.querySelectorAll(".number");
numbers.forEach((currentButton) => {
    currentButton.addEventListener("click", () => {
        smallDisplay.textContent += currentButton.textContent;
        operatorAtFront = false;
    });
});

decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    smallDisplay.textContent += ".";
    operatorAtFront = false;
})

//when operator button is pressed, add operator to the small display
operators = document.querySelectorAll(".operator");
operators.forEach((currentButton) => {
    currentButton.addEventListener("click", () => {
        if (operatorAtFront === false){
            smallDisplay.textContent += ` ${currentButton.textContent} `;
            operatorAtFront = true;
        } else {
            return;
        }
    });
})

//when equals is pressed, equation within display is operated on.
// equals = document.querySelector("#equals");
// equals.addEventListener("click", (evaluate());

