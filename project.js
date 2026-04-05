// DEBUG: check if JS is loading
console.log("JS loaded");

let num1 = "";
let num2 = "";
let operation = "";

// 👇 VERY IMPORTANT: make functions global
window.append = function(value) {
    if(operation === "") {
        num1 += value;
    } else {
        num2 += value;
    }
    updateDisplay();
};

window.setOp = function(op) {
    if(num1 === "") return;
    operation = op;
    updateDisplay();
};

window.calculate = function() {
    let n1 = Number(num1);
    let n2 = Number(num2);
    let result;

    if(operation === "+") result = n1 + n2;
    else if(operation === "-") result = n1 - n2;
    else if(operation === "*") result = n1 * n2;
    else if(operation === "/") result = n2 !== 0 ? n1 / n2 : "Error";
    else return;

    document.getElementById("display").value = result;

    num1 = result.toString();
    num2 = "";
    operation = "";
};

window.clearDisplay = function() {
    num1 = "";
    num2 = "";
    operation = "";
    document.getElementById("display").value = "";
};

window.backspace = function() {
    if(operation === "") {
        num1 = num1.slice(0, -1);
    } else {
        num2 = num2.slice(0, -1);
    }
    updateDisplay();
};

function updateDisplay() {
    let display = operation === ""
        ? num1
        : num1 + " " + operation + " " + num2;

    document.getElementById("display").value = display;
}