// blank_v1.js

const isBlank = (string) => {
  return string.trim().length === 0;
};

console.log(isBlank('mars'));
console.log(isBlank('   '));
console.log(isBlank(''));


