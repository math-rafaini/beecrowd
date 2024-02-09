var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
const kA = 3.5;
const kB = 7.5;


function avg(num1, num2, k1, k2)
{
    var average = num1*k1 + num2*k2;
    average = average / (k1+k2);
    return average;
}

console.log("MEDIA = " + avg(a, b, kA, kB).toFixed(5));
