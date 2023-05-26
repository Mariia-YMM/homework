let obj = {
    a: 'f',
    b: 78,
    c: 'R',
    d: {
        a: {
            a: null,
            b: 'E',
            c: {
                a: true,
                b: 'C',
                c: 'test'
            },
            d: 'U'
        },
        b: {
            a: 'R',
            b: ['S', 4, 6, 'I'],
            c: 0,
        },
        c: ['O'],
        d: null,
        e: 'N'
    }
};
function findWord(obj) {
    let result = '';

    for (let i in obj) {
        if (typeof obj[i] === 'object' && obj[i] !== null) {
            result += findWord(obj[i]);
        } else if (typeof obj[i] === 'string' && obj[i].toUpperCase() === obj[i]) {
            result += obj[i];
        }
    }
    return result;
}


let result = findWord(obj);
console.log(result);