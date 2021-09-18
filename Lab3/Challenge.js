const myArray = [1, 2, 3, 4];
let calculateSum = (myArray) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return myArray.reduce(reducer);
}

let calculateProduct = (myArray) => {
        const reducer = (previousValue, currentValue) => previousValue * currentValue;
        return myArray.reduce(reducer);
    }

console.log(calculateSum([1,2,3,4]));
console.log(calculateProduct([1,2,3,4]));