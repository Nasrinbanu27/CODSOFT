let display = document.getElementById('display');
let currentInput = '';
let isOperator = false;

function appendNumber(number) {
    if (isOperator) {
        display.innerText = '';
        isOperator = false;
    }
    if (display.innerText === '0' || currentInput === '') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
    currentInput += number;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    if (!isOperator) {
        display.innerText += ` ${operator} `;
        currentInput += ` ${operator} `;
        isOperator = true;
    }
}

function appendDot() {
    if (!display.innerText.includes('.')) {
        display.innerText += '.';
        currentInput += '.';
    }
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
}

function deleteChar() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput || '0';
    }
}

function calculate() {
    try {
        display.innerText = eval(currentInput.replace('×', '*').replace('÷', '/'));
        currentInput = display.innerText;
    } catch (error) {
        display.innerText = 'Error';
    }
}
