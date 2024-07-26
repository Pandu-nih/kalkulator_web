let display = document.getElementById('display');
let currentInput = '';
let resultDisplayed = false;

function append(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    if (currentInput === '' && (value === '*' || value === '/' || value === '+' || value === '-')) return;
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        display.innerText = '0';
    } else {
        display.innerText = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
        resultDisplayed = true;
    } catch (e) {
        display.innerText = 'Error';
        currentInput = '';
    }
}
