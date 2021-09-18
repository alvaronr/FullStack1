function difference(number) {
    // Validates content
    let parsedNumber = parseInt(number);
    if (parsedNumber) {
        if (number > 13) {
            console.log(2*(number - 13));
        } else {
            console.log(13 - number);
        }
    } else {
        console.log("Invalid number");
    }
}
difference(32);
difference(11);