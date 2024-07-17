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


let mainDisplay = document.querySelector(".main-display");

//add values from buttons pressed to small display
numbers = document.querySelectorAll(".number");
numbers.forEach((currentButton) => {
    currentButton.addEventListener("click", () => {
        mainDisplay.textContent += currentButton.textContent;
        operatorAtFront = false;
    });
});

decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    mainDisplay.textContent += ".";
    operatorAtFront = false;
})

//when operator button is pressed, add operator to the small display
operators = document.querySelectorAll(".operator");
operators.forEach((currentButton) => {
    currentButton.addEventListener("click", () => {
        if (operatorAtFront === false){
            mainDisplay.textContent += ` ${currentButton.textContent} `;
            operatorAtFront = true;
        } else {
            return;
        }
    });
})

// 1. When number is pressed, number is appended to the larger display.
// 2. When operator is pressed, number in larger display becomes first number, first number and operator are displayed in smaller display above. First number remains in large display until another number (or decimal point) is pressed.
// 3. Now, 
//     1. If number pressed, replace first number in larger display with number that was pressed, now larger display begins collecting second number.
//     2. If operator pressed, replace current operator with operator that was pressed
//     3. If equals pressed, do nothing.
// 4. Once second number is inputted,
//     1. If equals pressed, evaluate expression using first number and operator from small display and second number from large display. Then small display should show “(first number) (operator) (second number) =“ and large display should show the result of the expression. 
//     2. If other operator pressed, evaluate equation using first number and operator from small display and second number from large display. In this case, small display should show the result of the expression and the NEW operator that was just pressed, and large display will show the result of the expression waiting to be replaced by the next input.