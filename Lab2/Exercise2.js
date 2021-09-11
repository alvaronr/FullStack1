const calculatePoints = function(wins, draws, losses) {
    return (wins > 0 ? wins * 3 : 0) + (draws > 0 ? draws * 1 : 0);
}

console.log(calculatePoints(3, 4, 2));
console.log(calculatePoints(5, 0, 2));
console.log(calculatePoints(0, 0, 1));