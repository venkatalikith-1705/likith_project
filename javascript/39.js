// JavaScript item 39
const numbers = [1, 2, 3]; const copy = [...numbers, 4]; function total(...values) { return values.reduce((sum, value) => sum + value, 0); } console.log(copy, total(...numbers));
