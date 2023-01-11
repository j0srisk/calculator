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
function updateDisplay() {
    if (Math.round(displayValue) != displayValue) {
        display.textContent = Number(displayValue).toFixed(2);
    } else {
        display.textContent = displayValue;
    }
};

function onNumber(e) {
    if (e.target.outerText === "0" && displayValue === '') {
        console.log(displayValue);
    } else {
        displayValue += e.target.outerText;
        updateDisplay();
    }
};

function clear(){
    displayValue = '';
    storedValue = null;
    selectedOperator = null;
    display.textContent = '0';
}

function onOperator(e) {
    if (selectedOperator && selectedOperator != "=") {
        displayValue = operate(storedValue, displayValue, selectedOperator);
        updateDisplay();
    }
    
    if (selectedOperator != "=") {
        storedValue = displayValue;
    }
    
    selectedOperator = e.target.outerText;
    displayValue = '';

    if (display.textContent === "Infinity"){
        clear();
        display.textContent = "bruh";
    }

    console.log("Stored Value: " + storedValue);
    console.log("Display Value: " + displayValue);
    console.log("Selected Operator: " + selectedOperator);
};