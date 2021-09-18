const comparer = require('./comparer');
const calculator = require('./calculator');

let compareNumber = (num1, num2) => {
    console.log(`comparing two numbers: ${num1}, ${num2} `); 

    if(comparer.areNumberEqual(num1, num2)) {
        console.log("numbers are equal");
        console.log("adding two numbers");
        console.log(calculator.add(num1, num2));
     } else {
        console.log("numbers are not equal");        
        console.log("subtracting two numbers");
        console.log(calculator.subtract(num1, num2));
     }
    
}

compareNumber(5, 10);
compareNumber(5, 5);








    