// JavaScript item 50
function gcd(a, b) { while (b !== 0) [a, b] = [b, a % b]; return Math.abs(a); } function lcm(a, b) { return Math.abs(a * b) / gcd(a, b); } console.log(lcm(12, 18));
