const myArray = [1, 5, 6, 2, 3, -2,];
const myNewArray=[1, 5, 6, 2, 3, -2,"some string", "one morre string"];
const strings = ["this","text is used", "for","example","blablablaa"];
const util = {
    reverse: function(source) {
            let a = "";
            for(let i = source.length-1; i >= 0; i--){
            a += source[i];
            }
            return a;
            },
    getMin: function(source) {
            let i = source.length;
            min = source[i-1];
            while (i--){
                if(source[i] < min){
                min= source[i]}
            }
            return min},
    getAverage: function(source) {
                let sum = 0;
                for (let i = 0; i < source.length; i += 1){
                sum += source[i]};
                return sum / source.length
                },
    verifyNumbers: function(source) {
                    let result = [];
                    let index = 0;
                    for (let i = 0; i < source.length; i++){
                    if (typeof source[i] === 'number') {
                    result [index] = source[i];
                    index++}
                    }
                    return result
                    },
    getMaxString: function(source) {
                    let maxString = '';
                    for (let i = 0; i < source.length; i++){
                    if (source[i].length > maxString.length){
                    maxString=source[i]};
                    }
                    return maxString
                    },
}

console.log(util.reverse("Hello"));
console.log(util.getMin(myArray));
console.log(util.getAverage(myArray));
console.log(util.verifyNumbers(strings));
console.log(util.getMaxString(strings));
