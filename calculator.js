
let firstNumber = '';
let operation = '';
let secondNumber = '';

// --------------------------------------------------------------------------------------------
function calcResult() {
    let result;
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '×') {
        result = firstNumber * secondNumber;
    } else if (operation === '÷') {
        result = firstNumber / secondNumber;
    }

    firstNumber = result;
    operation = '';
    secondNumber = '';
    updateScreen();
}

// --------------------------------------------------------------------------------------------
function operationPressed(op) {
    operation = op;
    updateScreen();
}

// --------------------------------------------------------------------------------------------
function numberPressed(number) {
    if (operation === '') {
        firstNumber += number;
        updateScreen();
    } else {
        secondNumber += number; 
        updateScreen();
    }
}

// --------------------------------------------------------------------------------------------
function clearScreen() {
    // 
}

// --------------------------------------------------------------------------------------------
function updateScreen() {
    document.querySelector('#screen').innerText = firstNumber + operation + secondNumber;
}

const buttons = document.querySelectorAll('button');
for (const button of buttons) {

    
    button.addEventListener('click', () => {

        if ('0123456789'.includes(button.innerText)) {
            numberPressed(button.innerText);
        }
        
        else if ('+-×÷'.includes(button.innerText)) {
            operationPressed(button.innerText);
        }
        
        else if ('=' === button.innerText) {
            calcResult();
        }
    });
}