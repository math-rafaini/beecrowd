var input = require('fs').readFileSync('stdin', 'utf8'); 
var lines = input.split('\n');
var num1 = parseInt(lines.shift());
var num2 = parseInt(lines.shift());

function simpleSum(numA, numB)
{
    var sum = numA + numB;
    return sum;
}

console.log('SOMA = ' + simpleSum(num1, num2));
