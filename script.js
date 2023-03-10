let history = [];
let operation, num1, num2, result;
do {
    operation = prompt('Оберіть операцію (add, sub, mult, div, sin, cos, pow):');
} while (!['add', 'sub', 'mult', 'div', 'sin', 'cos', 'pow'].includes(operation));

do {
    num1 = parseFloat(prompt('Введіть перше число:'));
} while (isNaN(num1));

if (operation === 'sin' || operation === 'cos') {
    result = Math[operation](num1);
} else {
    do {
        num2 = parseFloat(prompt('Введіть друге число:'));
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
while (confirm('Бажаєте виконати ще одну операцію?')) {
    do {
        operation = prompt('Оберіть операцію (add, sub, mult, div, sin, cos, pow):');
    } while (!['add', 'sub', 'mult', 'div', 'sin', 'cos', 'pow'].includes(operation));

    do {
        num1 = parseFloat(prompt('Введіть перше число:'));
    } while (isNaN(num1));

    if (operation === 'sin' || operation === 'cos') {
        result = Math[operation](num1);
    } else {
        do {
            num2 = parseFloat(prompt('Введіть друге число:'));
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

    history.push("Operation " + operation + " finished with result " + result);
}
if (confirm('Бажаєте побачити історію операцій?')) {
    console.log(history.join('\n'));
}
