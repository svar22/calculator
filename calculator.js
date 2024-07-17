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

function operate (firstNumber, secondNumber, operator){
    if (operator === "divide" && secondNumber === 0){
        return ("bro...");
    }

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




// //add values from buttons pressed to small display


// decimal = document.querySelector("#decimal");
// decimal.addEventListener("click", () => {
//     mainDisplay.textContent += ".";
//     operatorAtFront = false;
// })

// //when operator button is pressed, add operator to the small display
// operators = document.querySelectorAll(".operator");
// operators.forEach((currentButton) => {
//     currentButton.addEventListener("click", () => {
//         if (operatorAtFront === false){
//             mainDisplay.textContent += ` ${currentButton.textContent} `;
//             operatorAtFront = true;
//         } else {
//             return;
//         }
//     });
// })

// 1. When number is pressed, number is appended to the larger display.

let mainDisplay = document.querySelector(".main-display");
let smallDisplay = document.querySelector(".small-display");
mainDisplay.textContent = "0";

let firstNumber;
let secondNumber;
let operator;

let operatorPressed = false;
let equalsPressed = false;

numbers = document.querySelectorAll(".number");
numbers.forEach((currentNumber) => {
    currentNumber.addEventListener("click", () => {
        if(operatorPressed === false && mainDisplay.textContent !== "0"){
            //if operator no pressed yet , append number pressed to number in main display
            mainDisplay.textContent += currentNumber.textContent;
        }
        else {
            //if operator already pressed, replace number in main display, since previous number will already be in small display as "firstNumber"
            mainDisplay.textContent = "";
            mainDisplay.textContent += currentNumber.textContent;
            operatorPressed = false;
        }
    });
});

// 2. When operator is pressed, number in larger display becomes first number, first number and operator are displayed in smaller display above. First number remains in large display until another number (or decimal point) is pressed.
operators = document.querySelectorAll(".operator");
operators.forEach((currentOperator) => {
    currentOperator.addEventListener("click", () => {
        if(operatorPressed === false && smallDisplay.textContent === ""){
            //if operator not pressed yet and smallDisplay is empty, append number in main display along with operator pressed to the small display.
            firstNumber = mainDisplay.textContent;
            operator = currentOperator.id;
            smallDisplay.textContent += (firstNumber + currentOperator.textContent);
            operatorPressed = true;
        } else if (operatorPressed === false && equalsPressed === false){
            //if operator pressed with two numbers inputted and operator in small display, evaluate the expression using first number and operator from small display and second number from main display.
            secondNumber = mainDisplay.textContent;
            let result = operate(Number(firstNumber), Number(secondNumber), operator);
            mainDisplay.textContent = result;
            smallDisplay.textContent = (result + currentOperator.textContent);
            operatorPressed = true;
            firstNumber = result;
            operator = currentOperator.id;
        } else {
            //if operator already pressed, replace (not append) small display content with number in main display along with operator pressed.
            firstNumber = mainDisplay.textContent;
            operator = currentOperator.id;
            smallDisplay.textContent = (firstNumber + currentOperator.textContent);
            mainDisplay.textContent = "";
            equalsPressed = false;
        }
    })
})



equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if(operatorPressed === false && smallDisplay.textContent !== ""){
        //small display has operator and number. main display has number. if there is no operator currently selected and nothing is in the smaller display, smaller display should show the equation ending in equals and main display should show the result.
        secondNumber = mainDisplay.textContent;
            let currentOperator = document.querySelector(`#${operator}`);
            let result = operate(Number(firstNumber), Number(secondNumber), operator);
            smallDisplay.textContent = (`${firstNumber}${currentOperator.textContent}${secondNumber} =`);
            mainDisplay.textContent = result;
            firstNumber = result; 
            equalsPressed = true;
    } else {
        //any other situation in which equals is pressed, bothing should happen.
        return;
    }
})

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", ()=> {
    mainDisplay.textContent = "0";
    smallDisplay.textContent = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
});

let deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
    let mainLength = mainDisplay.textContent.length;
    mainDisplay.textContent = mainDisplay.textContent.slice(0, mainLength - 1);
});


// 3. Now, 
//     1. If number pressed, replace first number in larger display with number that was pressed, now larger display begins collecting second number.
//     2. If operator pressed, replace current operator with operator that was pressed
//     3. If equals pressed, do nothing.
// 4. Once second number is inputted,
//     1. If equals pressed, evaluate expression using first number and operator from small display and second number from large display. Then small display should show “(first number) (operator) (second number) =“ and large display should show the result of the expression. 
//     2. If other operator pressed, evaluate equation using first number and operator from small display and second number from large display. In this case, small display should show the result of the expression and the NEW operator that was just pressed, and large display will show the result of the expression waiting to be replaced by the next input.