function findOddOrEven(number) {
    if (number % 2 == 0)
        return "even";
    return "odd"
}

for(let i = 0; i <= 10; i++) {
    console.log(i + " is " + findOddOrEven(i));
}