// JavaScript item 51
const number = 153; const power = String(number).length; const sum = String(number).split("").reduce((total, digit) => total + Number(digit) ** power, 0); console.log(sum === number);
