console.log('paint it black');
console.log('_______________________________')
const wallPaint = function (maincolor,dotcolor) {
    console.log('i see a red door and i want to paint it ' + maincolor);
    console.log('and i will use also some ' + dotcolor + ' for the dots');
}
wallPaint('red', 'green');
// wallPaint([1, 2], 'blue');
// let scores = [1, 5, 9];
// console.log(scores[2]);
// No arguments
const paintWall1 = function () {
    console.log("The wall has been painted red");
};
paintWall1();

// Single argument
const paintWall2 = function (color) {
    console.log(`The wall has been painted ${color}`); // String interpolation
    // We could also have used string concatenation, but interpolation is often nicer
};
paintWall2("green");
paintWall2("blue");