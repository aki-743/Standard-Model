var Number1D = require("./number1d");

var n1d = new Number1D();
var X = [4, 1, 7, 2, 3, 6, 8, 5];

console.log(n1d.Create(5));
console.log(n1d.Create(9, 5));
console.log(n1d.Arange(1 , 4, 1))
console.log(n1d.RandomFloat(5,1,100))
console.log(n1d.RandomInt(5,1,100))
console.log(n1d.Indexing(X, [2, 3, 0, 1, 0, 0]))
console.log(n1d.ArgSort(X))
console.log(n1d.Sort(X))
console.log(n1d.ArgMin(X))
console.log(n1d.ArgMax(X))
console.log(n1d.Shuffle(X))
console.log(n1d.Addition(X, 3))
console.log(n1d.Substract(X, 3))
console.log(n1d.Multiplication(X, 3))
console.log(n1d.Division(X, 3))
console.log(n1d.Total(X))
console.log(n1d.Average(X))
console.log(n1d.Variance(X))
console.log(n1d.Deviation(X))