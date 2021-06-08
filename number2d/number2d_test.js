var Number2D = require("./number2d");

var n2d = new Number2D();

var X = [
    [6, 1, 4],
    [7, 6, 2],
    [2, 4, 8],
    [8, 9, 1]
];
var Line = [
    [1],
    [2],
    [3],
    [4]
];
var Row = [
    [1, 2, 3]
];
console.log(n2d.Create(4, 3));
console.log(n2d.Full(4, 3, 9));
console.log(n2d.Flatten(X));
console.log(n2d.Transpose(X));
console.log(n2d.Indexing(X, [2, 3, 0, 1, 0, 0], 0));
console.log(n2d.Min(X, 0));
console.log(n2d.Max(X, 0));

// -1なら一つの数値、0ならRow、1ならLine
console.log(n2d.Addition(X, Row, 0));
console.log(n2d.Substract(X, Row, 0));
console.log(n2d.Multiplication(X, Row, 0));
console.log(n2d.Division(X, Row, 0));
//

console.log(n2d.Total(X, 0));
console.log(n2d.Average(X, 0));
console.log(n2d.Variance(X, 0));
console.log(n2d.Deviation(X, 0));