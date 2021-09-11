function helloWorlds(number) {
    var parserdNumber = parseInt(number);
    if (parserdNumber) {
        for(let i = 0; i < parserdNumber; i++)
        {
            console.log("Hello World!");
        }
    } else {
        console.log("Goodbye World");
    }
}

helloWorlds(5);
helloWorlds(true);
helloWorlds("hello");
helloWorlds(null);
helloWorlds(undefined);