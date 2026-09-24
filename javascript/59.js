// JavaScript item 59
const values = ["a", "b", "a", "c", "b", "a"]; const frequency = values.reduce((result, value) => { result[value] = (result[value] || 0) + 1; return result; }, {}); console.log(frequency);
