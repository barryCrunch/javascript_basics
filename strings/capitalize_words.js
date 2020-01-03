// capitalize_words.js

const capitalize = (string) => {
  let capString = string.split(' ');
  let words = [];
  for (let i = 0; i < capString.length; i++) {
    words.push(capString[i][0].toUpperCase() + capString[i].substring(1));
  }
  return words.join(' ');
};

let sentence = 'launch school tech & talk';
console.log(capitalize(sentence));