var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

function multiply(num1, num2)
{
    var mult = num1 * num2;
    return mult;
}

console.log("PROD = " + multiply(a, b));
