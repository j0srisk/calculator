//default values
let displayValue = '';
let storedValue = null;
let selectedOperator = null;

//add number buttons
const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(button => button.addEventListener('click', onNumber));

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(button => button.addEventListener('click', onOperator));

const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', onOperator);

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

const display = document.getElementById('current');

//math functions
function add(num1, num2) {
    return Number(num1) + Number(num2);
};

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
};

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
};

function divide(num1, num2) {
    return Number(num1) / Number(num2);
};

function operate(num1, num2, operator) {
    if (operator === "+"){
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
};

//dom functions
function updateDisplay(value) {
    display.textContent = value;
};

function onNumber(e) {
    displayValue += e.target.outerText;
    updateDisplay(displayValue);
};

function clear(e){
    displayValue = '';
    storedValue = null;
    selectedOperator = null;
    updateDisplay(displayValue);
}

function onOperator(e) {
    if (selectedOperator && selectedOperator != "=") {
        displayValue = operate(storedValue, displayValue, selectedOperator);
        updateDisplay(displayValue);
    }
    
    if (selectedOperator != "=") {
        storedValue = displayValue;
    }
    
    selectedOperator = e.target.outerText;
    displayValue = '';

    console.log("Stored Value: " + storedValue);
    console.log("Display Value: " + displayValue);
    console.log("Selected Operator: " + selectedOperator);
};