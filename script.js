let currentInput = "";

function inputDisplay(value) {
    if (value === 'x') {
        value = '*';
    }
    currentInput += value;
    document.getElementById("calculation").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("calculation").value = "";
}

function calcDisplay() {
    try {
        currentInput = eval(currentInput);
        document.getElementById("calculation").value = currentInput;
    } catch (error) {
        document.getElementById("calculation").value = "Error";
        currentInput = "";
    }
}
