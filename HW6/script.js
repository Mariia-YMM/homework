let history = [];
let num1;
let num2;
let result;
let operation;
let sum = (num1, num2) => num1 + num2;
let sub = (num1, num2) => num1 - num2;
let div = (num1, num2) => num1 / num2;
let mult = (num1, num2) => num1 - num2;
let pow = (num1, num2) => Math.pow(num1, num2);
let sin = (num1) => Math.sin(num1);
let cos = (num1) => Math.cos(num1);
let operations = ['sum', 'sub', 'mult', 'div', 'sin', 'cos', 'pow'];
function valid1() {
    do {
        operation = prompt('Please select the type of mathematical operation: sum, sub, mult, div, sin, cos, pow');
    } while (!operations.includes(operation));
    return true;
}
function valid2() {
    do {
        num1 = parseFloat(prompt('Please enter the first number'));
    } while (isNaN(num1));
    return true;
}
function valid3() {
    do {
        num2 = parseFloat(prompt('Please enter the second number'));
    } while (isNaN(num2));
    return true;
}

valid1();
if (operation === 'sin' || operation === 'cos') {
    valid2();
    if (operation === 'sin') {
        result = (sin(num1));
    } else if (operation === 'cos') {
        result = (cos(num1));
    }
} else {
    valid2();
    valid3();
    if (operation === 'sum') {
        result = (sum(num1, num2));
    } else if (operation === 'sub') {
        result = (sub(num1, num2));
    } else if (operation === 'mult') {
        result = (mult(num1, num2));
    } else if (operation === 'div') {
        result = (div(num1, num2));
    } else if (operation === 'pow') {
        result = (pow(num1, num2));
    }
}
console.log('Operation ' + operation + ' finished with result ' + result);
history.push(`Operation ${operation} finished with result ${result}`);

while (confirm('Do you want to perform another operation?')) {
    valid1();
    if (operation === 'sin' || operation === 'cos') {
        valid2();
        if (operation === 'sin') {
            result = (sin(num1));
        } else if (operation === 'cos') {
            result = (cos(num1));
        }
    } else {
        valid2();
        valid3();
        if (operation === 'sum') {
            result = (sum(num1, num2));
        } else if (operation === 'sub') {
            result = (sub(num1, num2));
        } else if (operation === 'mult') {
            result = (mult(num1, num2));
        } else if (operation === 'div') {
            result = (div(num1, num2));
        } else if (operation === 'pow') {
            result = (pow(num1, num2));
        }
    }
console.log('Operation ' + operation + ' finished with result ' + result);
history.push('Operation ' + operation + ' finished with result ' + result);
}
if (confirm('Want to see your transaction history?')) {
    console.log(history.join('\n'));
}