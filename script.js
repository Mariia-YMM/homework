const typeMathoperation = prompt('Please select the type of mathematical operation: sum, diff, mult, div, pow, sin, cos');
let firstNumber = 'Please enter the first number';
let secondNumber = 'Please enter the second number';
switch (typeMathoperation){
    case 'sum':{
        let first = prompt(firstNumber);
        let second = prompt(secondNumber);
        alert( `Calculations are finished! Sum: ${first} + ${second} = ${+first + +second}`);
        break};
    case 'diff':{
        let first = prompt(firstNumber);
        let second = prompt(secondNumber);
        alert( `Calculations are finished! Diff: ${first} - ${second} = ${first - second}`);
        break};
    case 'mult':{
        let first = prompt(firstNumber);
        let second = prompt(secondNumber);
        alert( `Calculations are finished! Mult: ${first} * ${second} = ${first * second}`);
        break};
    case 'div':{
        let first = prompt(firstNumber);
        let second = prompt(secondNumber);
        alert( `Calculations are finished! Div: ${first} / ${second} = ${first / second}`);
        break};
    case 'pow':{
        let first = prompt('Please enter number is the base');
        let second = prompt('Please enter number is the exponent');
        alert(Math.pow(first, second));
        break};
    case 'sin':{
        let first = prompt(firstNumber);
        alert(Math.sin(first));
        break};
    case 'cos':{
        let first = prompt(firstNumber);
        alert(Math.cos(first));
        break};
}


