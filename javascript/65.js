// JavaScript item 65
const text = "banana"; const frequency = [...text].reduce((result, character) => { result[character] = (result[character] || 0) + 1; return result; }, {}); console.log(frequency);
