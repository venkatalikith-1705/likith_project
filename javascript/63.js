// JavaScript item 63
const text = "Hello World".toLowerCase(); const vowels = (text.match(/[aeiou]/g) || []).length; const consonants = (text.match(/[b-df-hj-np-tv-z]/g) || []).length; console.log({ vowels, consonants });
