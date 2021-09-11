function emptyArray(myArray) {
    while(myArray.length > 0) {
        myArray.pop();
    }
    console.log(myArray);
}

emptyArray([1,2,3]);
emptyArray(["egg", "bacon", "toast", "coffee", "random", "juice"]);