const colors = ['red', 'green', 'blue'];

let capitalizedColors = () => colors.map(x => x.substring(0, 1).toUpperCase() + x.substring(1));

console.log(capitalizedColors());

