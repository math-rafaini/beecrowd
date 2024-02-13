var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());
const kA = 2;
const kB = 3;
const kC = 5;

function average(num1, num2, num3, k1, k2, k3)
{
    var avg = (num1 * k1) + (num2 * k2) + (num3 * k3);
    avg = avg / (k1 + k2 + k3);
    return avg;
}

console.log("MEDIA = " + average(a, b, c, kA, kB, kC).toFixed(1));
