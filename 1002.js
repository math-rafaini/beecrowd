var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var radius = parseFloat(lines.shift());
const pi = 3.14159;

function circleArea(k, radius)
{
    var area = k * radius * radius;
    return area;
}

console.log("A=" + circleArea(pi, radius).toFixed(4));

