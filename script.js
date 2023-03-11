let history = [];
let operation;
let num1;
let num2;
let result;
do {
    operation = prompt('Please select the type of mathematical operation: add, sub, mult, div, sin, cos, pow');
} while (!['add', 'sub', 'mult', 'div', 'sin', 'cos', 'pow'].includes(operation));

do {
    num1 = parseFloat(prompt('Please enter the first number'));
} while (isNaN(num1));

if (operation === 'sin' || operation === 'cos') {
    result = Math[operation](num1);
} else {
    do {
        num2 = parseFloat(prompt('Please enter the second number'));
    } while (isNaN(num2));

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'sub') {
        result = num1 - num2;
    } else if (operation === 'mult') {
        result = num1 * num2;
    } else if (operation === 'div') {
        result = num1 / num2;
    } else if (operation === 'pow') {
        result = Math.pow(num1, num2);
    }
}

console.log("Operation " + operation + " finished with result " + result);
history.push("Operation " + operation + " finished with result " + result);

while (confirm('Do you want to perform another operation?')) {
    do {
        operation = prompt('Please select the type of mathematical operation: add, sub, mult, div, sin, cos, pow');
    } while (!['add', 'sub', 'mult', 'div', 'sin', 'cos', 'pow'].includes(operation));

    do {
        num1 = parseFloat(prompt('Please enter the first number'));
    } while (isNaN(num1));

    if (operation === 'sin' || operation === 'cos') {
        result = Math[operation](num1);
    } else {
        do {
            num2 = parseFloat(prompt('Please enter the second number'));
        } while (isNaN(num2));

        if (operation === 'add') {
            result = num1 + num2;
        } else if (operation === 'sub') {
            result = num1 - num2;
        } else if (operation === 'mult') {
            result = num1 * num2;
        } else if (operation === 'div') {
            result = num1 / num2;
        } else if (operation === 'pow') {
            result = Math.pow(num1, num2);
        }
    }

    console.log("Operation " + operation + " finished with result " + result);
    history.push("Operation " + operation + " finished with result " + result);
}
if (confirm('Want to see your transaction history?')) {
    console.log(history.join('\n'));
}
