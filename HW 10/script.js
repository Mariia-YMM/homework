function createStack() {
    const stack = [];
    function push(i) {
        stack.push(i);
    }
    function pop() {
        return stack.pop();
    }
    function getStack() {
        return stack;
    }
    return {
        push,
        pop,
        getStack
    };
}

function isBetween(min, max) {
    return function (value) {
        return value >= min && value <= max;
    };
}

function calculate(operation) {
    return function (a) {
        return function (b) {
            let result;
            if (operation === '+') {
                result = a + b;
            } else if (operation === '-') {
                result = a - b;
            } else if (operation === '*') {
                result = a * b;
            } else if (operation === '/') {
                result = a / b;
            } else if (operation === 'pow') {
                result = Math.pow(a, b);
            }
            return result;
        };
    };
}

function sortByField(fieldName, sortType) {
    return function (a, b) {
        let valueA = a[fieldName];
        let valueB = b[fieldName];

        if (sortType === 'asc') {
            if (valueA < valueB) return -1;
            if (valueA > valueB) return 1;
        } else if (sortType === 'desc') {
            if (valueA > valueB) return -1;
            if (valueA < valueB) return 1;
        }

        return 0;
    };
}



const stack = createStack();
stack.push(1);
stack.push(10);
console.log(stack.getStack());
stack.pop();
console.log(stack.getStack());

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(isBetween(3, 6));
console.log(filteredNumbers);


const powResult = calculate('pow')(2)(3);
console.log(powResult);


const products = [
    { name: 'Product 1', quantity: 10, price: 25 },
    { name: 'Product 2', quantity: 3, price: 55 },
    { name: 'Product 3', quantity: 22, price: 35 }
];

products.sort(sortByField('quantity', 'desc'));
console.log(products);
