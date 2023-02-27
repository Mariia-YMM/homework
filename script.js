const typeMathoperation = prompt('Please select the type of mathematical operation: sum, diff, mult, div, pow, sin, cos');
if (typeMathoperation == 'sum'){
    let first = prompt('Please enter the first number');
    let second = prompt('Please enter the second number');
    alert( `Calculations are finished! Sum: ${first} + ${second} = ${+first + +second}`);
} else if (typeMathoperation == 'diff'){
    let first = prompt('Please enter the first number');
    let second = prompt('Please enter the second number');
    alert( `Calculations are finished! Diff: ${first} - ${second} = ${first - second}`);
} else if (typeMathoperation == 'mult'){
    let first = prompt('Please enter the first number');
    let second = prompt('Please enter the second number');
    alert( `Calculations are finished! Mult: ${first} * ${second} = ${first * second}`);
} else if (typeMathoperation == 'div'){
    let first = prompt('Please enter the first number');
    let second = prompt('Please enter the second number');
    alert( `Calculations are finished! Div: ${first} / ${second} = ${first / second}`);
} else if (typeMathoperation == 'pow'){
    let first = prompt('Please enter number is the base');
    let second = prompt('Please enter number is the exponent');
    alert(Math.pow(first, second));
} else if (typeMathoperation == 'sin'){
    let first = prompt('Please enter number');
    alert(Math.sin(first));
} else if (typeMathoperation == 'cos'){
    let first = prompt('Please enter number');
    alert(Math.cos(first));
}

